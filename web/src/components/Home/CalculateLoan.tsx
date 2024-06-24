'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CalculateLoan: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-success p-8 text-black">
      <div className="container mx-auto">
        <h2 className="mb-4 text-3xl font-bold">Calcula tu préstamo</h2>
        {/* Add loan calculator content here */}
      </div>
    </section>
  );
};

export default CalculateLoan;
