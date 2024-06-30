import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { IoLanguageSharp } from 'react-icons/io5';
import i18n from '../../../i18n';

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
        <Button
          variant="flat"
          startContent={<IoLanguageSharp />}
          radius="full"
          size="lg"
          className="font-urbanist"
        >
          {selectedLanguage === 'en' && 'En'}
          {selectedLanguage === 'en-USA' && 'En'}
          {selectedLanguage === 'es' && 'Es'}
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
