import React, { useState, useEffect, ChangeEvent } from 'react';
import i18n from '../../../i18n';

const LanguageSwitcher: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng') || 'en';
    setSelectedLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
  }, []);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={changeLanguage}
        value={selectedLanguage}
        className="block w-full appearance-none rounded border border-gray-300 bg-white px-3 py-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 25"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
