import React, { useState, useEffect } from 'react';
import i18n from '../../../i18n';
import { IoLanguageSharp } from 'react-icons/io5';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';

const LanguageSwitcher: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  useEffect(() => {
    setSelectedLanguage(i18n.language || 'en');
  }, []);

  const changeLanguage = (lng: React.Key) => {
    setSelectedLanguage(lng.toString());
    i18n.changeLanguage(lng.toString());
  };

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="flat" startContent={<IoLanguageSharp />} radius="full" size="lg">
          {selectedLanguage === 'en' && 'English'}
          {selectedLanguage === 'en-USA' && 'English'}
          {selectedLanguage === 'es' && 'Español'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Static Actions"
        onAction={(key: React.Key) => changeLanguage(key)}
      >
        <DropdownItem key="en" className="text-black">
          English
        </DropdownItem>
        <DropdownItem key="es" className="text-black">
          Español
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
