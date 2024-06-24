'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../Global/LanguageSwitcher';

const HeaderHome = () => {
  const { t } = useTranslation('en');

  return (
    <div className="bg-primary-strong p-4 text-white">
      <LanguageSwitcher />
      <p>{t('welcome')}</p>
      <p>{t('data.number')}</p>
      <p>{t('data.string')}</p>
    </div>
  );
};

export default HeaderHome;
