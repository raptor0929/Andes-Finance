'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const FreeCourses: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-gray-100 p-8 text-black">
      <div className="container mx-auto">
        <h2 className="mb-4 text-3xl font-bold">Aprende con los cursos gratuitos</h2>
        {/* Add courses content here */}
      </div>
    </section>
  );
};

export default FreeCourses;
