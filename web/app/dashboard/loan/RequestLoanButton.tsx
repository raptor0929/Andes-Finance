'use client';
import { useEffect } from 'react';
import {
  PaymasterMode,
  createSessionSmartAccountClient,
  getSingleSessionTxParams,
} from '@biconomy/account';
import { Button } from '@nextui-org/react';
import { encodeFunctionData, parseAbi } from 'viem';

import { baseSepolia } from 'viem/chains';
import { useBiconomy } from '@/context/BiconomyContext';
import { INSTALLMENT_LOAN_CONTRACT_ADDRESS } from '../constants';

const withSponsorship = {
  paymasterServiceData: { mode: PaymasterMode.SPONSORED },
};

type RequestLoanButtonProps = {
  amount: number;
  duration: number;
};

function RequestLoanButton({ amount, duration }: RequestLoanButtonProps) {
  const { sessionStorageClient } = useBiconomy();

  const handleRequestLoan = async () => {
    const usersSmartAccountAddress = sessionStorageClient.smartAccountAddress;
    const emulatedUsersSmartAccount = await createSessionSmartAccountClient(
      {
        accountAddress: usersSmartAccountAddress,
        bundlerUrl: process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL,
        paymasterUrl: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_URL,
        chainId: baseSepolia.id,
      },
      usersSmartAccountAddress,
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
      0,
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
