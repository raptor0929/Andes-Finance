'use client';
import i18n from '../../i18n';
import { FC, ReactNode, useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import TranslationProvider from '@/components/Global/TranslationProvider';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng') || 'en';
    i18n.changeLanguage(storedLanguage);
  }, []);

  return (
    <NextUIProvider>
      <TranslationProvider>{children}</TranslationProvider>
    </NextUIProvider>
  );
};

export default Providers;
