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
import { INSTALLMENT_LOAN_CONTRACT_ADDRESS } from '../constants';

type RequestLoanButtonProps = {
  amount: number;
  duration: number;
};

const RequestLoanButton = ({ amount, duration }: RequestLoanButtonProps) => {
  const handleRequestLoan = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Button onClick={handleRequestLoan}>REQUEST LOAN</Button>
    </div>
  );
};

export default RequestLoanButton;
