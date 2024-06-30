import React, { useEffect } from 'react';
import { useCreateSession, useUserOpWait, Options } from '@biconomy/use-aa';
import { Button } from '@nextui-org/react';
import {
  PaymasterMode,
  createSmartAccountClient,
  createSession,
  Rule,
  Policy,
  createSessionKeyEOA,
} from '@biconomy/account';
import { useBiconomy } from '@/context/BiconomyContext';
import { baseSepolia } from 'viem/chains';
import { INSTALLMENT_LOAN_CONTRACT_ADDRESS } from 'app/dashboard/constants';
// import { BiconomyProvider } from '@/context/BiconomyContext';
// import { BiconomyProvider } from '@biconomy/use-aa';

const CreateSession = () => {
  const { smartAccount: usersSmartAccount, smartAccountAddress, setSessionStorageClient } = useBiconomy();
  if (!usersSmartAccount || !smartAccountAddress) {
    console.log('*** No Biconomy smart account ***');
    return;
  }
  const withSponsorship = {
    paymasterServiceData: { mode: PaymasterMode.SPONSORED },
  };

  const handleCreateSession = async () => {
    const { sessionKeyAddress, sessionStorageClient } = await createSessionKeyEOA(
      usersSmartAccount,
      baseSepolia,
    );
    const rules: Rule[] = [
      {
        offset: 0,
        condition: 0,
        referenceValue: smartAccountAddress,
      },
    ];
    const policy: Policy[] = [
      {
        sessionKeyAddress,
        contractAddress: INSTALLMENT_LOAN_CONTRACT_ADDRESS,
        functionSelector: 'takeLoan(uint256,uint256)',
        rules,
        interval: {
          validUntil: 0,
          validAfter: 0,
        },
        valueLimit: 0n,
      },
    ];

    const { wait, session } = await createSession(
      usersSmartAccount,
      policy,
      sessionStorageClient,
      withSponsorship,
    );

    const {
      receipt: { transactionHash },
      success,
    } = await wait();
    if (success) {
        console.log('SUCCESS!!! ', transactionHash);
        setSessionStorageClient && setSessionStorageClient(sessionStorageClient);
    } else {
        console.log('There was an error creating the session');
    }
  };

  return (
    <div>
      <Button onClick={handleCreateSession}>
        Create session
      </Button>
    </div>
  );
};

export default CreateSession;
