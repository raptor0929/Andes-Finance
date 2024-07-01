'use client';
import { FC, ReactNode, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { PrivyProvider } from '@privy-io/react-auth';
import { baseSepolia } from 'viem/chains';
import { GameProvider } from '@/components/Global/GameProvider';
import TranslationProvider from '@/components/Global/TranslationProvider';
import i18n from '../../i18n';

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
        <GameProvider>{children}</GameProvider>
      </TranslationProvider>
    </NextUIProvider>
  );
};

export default Providers;
