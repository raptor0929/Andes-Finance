'use client';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { useAccount } from 'wagmi';
import { baseSepolia } from 'viem/chains';
import { INSTALLMENT_LOAN_CONTRACT_ADDRESS } from '../constants';
import { useWriteContracts } from 'wagmi/experimental';
import { useInstallmentLoanContract } from '../_contracts/useInstallmentLoanContract';
import isLocal from '@/utils/isLocal';
import { ethers } from 'ethers';

type RequestLoanButtonProps = {
  amount: string;
  duration: number;
};

const isLocalEnv = isLocal();
const defaultUrl = isLocalEnv
  ? process.env.NEXT_PUBLIC_PAYMASTER_URL
  : `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/api/paymaster-proxy`;

const RequestLoanButton = ({ amount, duration }: RequestLoanButtonProps) => {
  const { address } = useAccount();
  const { data: callID, writeContracts } = useWriteContracts();
  const contract = useInstallmentLoanContract();

  if (contract.status !== 'ready') {
    console.error('Contract is not ready');
    return null;
  }

  const handleRequestLoan = () => {
    console.log('amount', amount, 'duration', duration);
    console.log('contract', contract);
    console.log('defaultUrl', defaultUrl);
    writeContracts({
      contracts: [
        {
          address: contract.address,
          abi: contract.abi,
          functionName: 'takeLoan',
          args: [parseInt(amount), duration],
        },
      ],
      capabilities: {
        paymasterService: {
          url: defaultUrl,
        },
      },
    });
  };
  return (
    <div>
      <Button onClick={handleRequestLoan}>REQUEST LOAN</Button>
    </div>
  );
};

export default RequestLoanButton;
