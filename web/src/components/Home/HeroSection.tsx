'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-blue-500 p-8 text-white">
      <div className="container mx-auto">
        <h1 className="mb-4 text-4xl font-bold">{t('welcome')}</h1>
        <p className="text-xl">{t('data.number')}</p>
        <p className="text-xl">{t('data.string')}</p>
        <button className="bg-primary-normal hover:bg-primary-hover mt-4 rounded px-4 py-2 font-bold text-white">
          Empieza
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
