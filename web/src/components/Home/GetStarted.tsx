'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const GetStarted: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-gray-100 p-8 text-black">
      <div className="container mx-auto">
        <h2 className="mb-4 text-3xl font-bold">¿Cómo empezar?</h2>
        {/* Add steps content here */}
      </div>
    </section>
  );
};

export default GetStarted;
