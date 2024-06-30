'use client';
import { useEffect } from 'react';
import {
  PaymasterMode,
  createSessionSmartAccountClient,
  createSession,
  Rule,
  Policy,
  Session,
  getSingleSessionTxParams,
} from '@biconomy/account';
import { useSession, useUserOpWait, Options } from '@biconomy/use-aa';
import { Button } from '@nextui-org/react';
import { encodeFunctionData, parseAbi } from 'viem';

import { baseSepolia } from 'viem/chains';
import { useBiconomy } from '@/context/BiconomyContext';
import { INSTALLMENT_LOAN_CONTRACT_ADDRESS } from '../constants';

const withSponsorship = {
  paymasterServiceData: { mode: PaymasterMode.SPONSORED },
};

function RequestLoanButton({ amount, duration }) {
  // const { mutate, data: userOpResponse, error, isPending } = useSession();
  const { sessionStorageClient } = useBiconomy();

  const handleRequestLoan = async () => {
    const usersSmartAccountAddress = sessionStorageClient.smartAccountAddress;
    const emulatedUsersSmartAccount = await createSessionSmartAccountClient(
      {
        accountAddress: usersSmartAccountAddress, // Dapp can set the account address on behalf of the user
        bundlerUrl: process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL,
        paymasterUrl: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_URL,
        chainId: baseSepolia.id,
      },
      usersSmartAccountAddress, // Storage client, full Session or simply the smartAccount address if using default storage for your environment
    );

    const takeLoanTx = {
      to: INSTALLMENT_LOAN_CONTRACT_ADDRESS,
      data: encodeFunctionData({
        abi: parseAbi(['function takeLoan(uint256,uint256)']),
        functionName: 'takeLoan',
        args: [amount, duration],
      }),
    };

    const params = await getSingleSessionTxParams(
      usersSmartAccountAddress,
      baseSepolia,
      0, // index of the relevant policy leaf to the tx
    );

    const { wait } = await emulatedUsersSmartAccount.sendTransaction(takeLoanTx, {
      ...params,
      ...withSponsorship,
    });

    const { success, receipt, logs } = await wait();
    if (success) {
      console.log('SUCCESSFUL LOAN REQUEST!', receipt);
    } else {
      console.log('ERROR REQUESTING LOAN', receipt, logs);
    }
  };

  return (
    <div>
      <Button onClick={handleRequestLoan}>REQUEST LOAN</Button>
    </div>
  );
}

export default RequestLoanButton;
