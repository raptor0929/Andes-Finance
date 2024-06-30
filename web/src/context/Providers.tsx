'use client';
import { FC, ReactNode, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { PrivyProvider } from '@privy-io/react-auth';
import { baseSepolia } from 'viem/chains';
import TranslationProvider from '@/components/Global/TranslationProvider';
import i18n from '../../i18n';
import { BiconomyProvider } from './BiconomyContext';
import { GameProvider } from '@/components/Global/GameProvider';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  useEffect(() => {
    i18n.changeLanguage(i18n.language || 'en');
  }, []);

  return (
    <NextUIProvider>
      <TranslationProvider>
        <PrivyProvider
          appId={process.env.NEXT_PUBLIC_PRIVY_ID || ''}
          config={{
            supportedChains: [baseSepolia],
            embeddedWallets: {
              createOnLogin: 'users-without-wallets',
              noPromptOnSignature: true,
            },
            loginMethods: ['email', 'google', 'twitter', 'discord', 'apple'],
          }}
        >
          <BiconomyProvider>
            <GameProvider>{children}</GameProvider>
          </BiconomyProvider>
        </PrivyProvider>
      </TranslationProvider>
    </NextUIProvider>
  );
};

export default Providers;
