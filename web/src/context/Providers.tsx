'use client';
import i18n from '../../i18n';
import { FC, ReactNode, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import TranslationProvider from '@/components/Global/TranslationProvider';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  useEffect(() => {
    i18n.changeLanguage(i18n.language || 'en');
  }, []);

  return (
    <NextUIProvider>
      <TranslationProvider>{children}</TranslationProvider>
    </NextUIProvider>
  );
};

export default Providers;
