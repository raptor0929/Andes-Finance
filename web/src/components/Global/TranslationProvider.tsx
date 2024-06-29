// /app/common/TranslationProvider.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ready } = useTranslation();

  if (!ready) {
    return;
  }
  return <>{children}</>;
};

export default TranslationProvider;
