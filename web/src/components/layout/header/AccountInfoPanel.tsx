import { useCallback } from 'react';
import { Name } from '@coinbase/onchainkit/identity';
import { usePrivy } from '@privy-io/react-auth';
import { ExitIcon } from '@radix-ui/react-icons';
import { useBiconomy } from '@/context/BiconomyContext';
import { Snippet } from '@nextui-org/snippet';
import { Avatar } from '@nextui-org/react';
// import { useAccount, useDisconnect } from 'wagmi';

export function AccountInfoPanel() {
  // const { address } = useAccount();
  // const { disconnect } = useDisconnect();
  const { smartAccountAddress: address } = useBiconomy();
  console.log('address', address);
  const { logout } = usePrivy();
  const handleDisconnectWallet = useCallback(() => {
    logout();
  }, [logout]);

  if (!address) return null;

  return (
    <>
      <div className="mb-4 inline-flex items-center justify-start gap-2">
        {/* <Avatar address={address} className="h-10 w-10 rounded-full" /> */}
        <Avatar
          src="https://yt3.googleusercontent.com/9OW-1uDGtjji2NY0Axp_9xV_IxbbDsT08aYtRE-d_GEn_aHwqPfN6NoW1sIyyYH6yfC3UgkK=s176-c-k-c0x00ffffff-no-rj"
          className="h-8 w-8 text-tiny"
        />
        <div className="inline-flex flex-col items-start justify-center gap-1">
          <div className="font-inter w-32 text-base font-medium text-white">
            <Snippet
              disableTooltip
              hideSymbol
              codeString={`0x${address.slice(2)}`}
              className="-p-2 bg-transparent text-white"
            >
              <Name address={`0x${address.slice(2)}`} />
            </Snippet>
          </div>
        </div>
      </div>
      <hr className="h-px self-stretch border-transparent bg-zinc-400 bg-opacity-20" />
      <button
        type="button"
        aria-label="Disconnect"
        className="my-4 flex w-full items-center justify-between  text-danger"
        onClick={handleDisconnectWallet}
      >
        <span className="font-inter w-32 text-left text-base font-medium ">Disconnect</span>
        <ExitIcon className="-mr-1" />
      </button>
    </>
  );
}
