import React, { useState, useEffect, useContext } from 'react';
import { BiconomySmartAccountV2, createSmartAccountClient } from '@biconomy/account';
import { ConnectedWallet, usePrivy, useWallets } from '@privy-io/react-auth';
import { baseSepolia } from 'viem/chains';

type BiconomyInterface = {
  smartAccount?: BiconomySmartAccountV2;
  smartAccountAddress?: string;
};

const BiconomyContext = React.createContext<BiconomyInterface>({
  smartAccount: undefined,
  smartAccountAddress: undefined,
});

export const useBiconomy = () => {
  return useContext(BiconomyContext);
};

export function BiconomyProvider({ children }: { children: React.ReactNode }) {
  const [smartAccount, setSmartAccount] = useState<BiconomySmartAccountV2 | undefined>();
  const [smartAccountAddress, setSmartAccountAddress] = useState<string | undefined>();
  const { wallets } = useWallets();
  const { ready, authenticated } = usePrivy();

  const createBiconomyAccountFromEOA = async (wallet: ConnectedWallet) => {
    await wallet.switchChain(baseSepolia.id);
    const provider = await wallet.getEthersProvider();
    const signer = provider.getSigner();

    const smartAccount = await createSmartAccountClient({
      signer: signer as LightSigner,
      bundlerUrl: process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL, // <-- Read about this at https://docs.biconomy.io/dashboard#bundler-url
      biconomyPaymasterApiKey: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_URL, // <-- Read about at https://docs.biconomy.io/dashboard/paymaster
      rpcUrl: process.env.NEXT_PRIVATE_RPC_URL, // <-- read about this at https://docs.biconomy.io/Account/methods#createsmartaccountclient
    });

    const address = await smartAccount.getAccountAddress();

    setSmartAccount(smartAccount);
    setSmartAccountAddress(address);
  };

  useEffect(() => {
    if (!ready || !authenticated) return;
    const embeddedWallet = wallets.find((wallet) => wallet.walletClientType === 'privy');
    if (embeddedWallet && !smartAccount) createBiconomyAccountFromEOA(embeddedWallet);
  }, [wallets]);

  return (
    <BiconomyContext.Provider
      value={{ smartAccount: smartAccount, smartAccountAddress: smartAccountAddress }}
    >
      {children}
    </BiconomyContext.Provider>
  );
}
