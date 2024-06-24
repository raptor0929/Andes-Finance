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
    <div>
      <select onChange={changeLanguage} value={selectedLanguage}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
