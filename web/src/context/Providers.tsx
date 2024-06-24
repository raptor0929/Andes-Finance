import { FC, ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import TranslationProvider from '@/components/Global/TranslationProvider';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <NextUIProvider>
      <TranslationProvider>{children}</TranslationProvider>
    </NextUIProvider>
  );
};

export default Providers;
