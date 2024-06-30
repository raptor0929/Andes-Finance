import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../Global/LanguageSwitcher';
import AccountConnect from '../layout/header/AccountConnect';
import AndesFinanceLogo from '../Global/AndesFinanceLogo';

type ScrollComponentProps = {
  scrollToSection: (index: number) => void;
  activeSection: number;
};

const HeaderHome: React.FC<ScrollComponentProps> = ({ scrollToSection, activeSection }) => {
  const { t } = useTranslation();
  return (
    <Navbar className="bg-background-1 p-4" maxWidth="2xl">
      <NavbarContent justify="end">
        <NavbarBrand>
          <Link color={activeSection === 0 ? undefined : 'foreground'}>
            <AndesFinanceLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="w-1/2 gap-20" justify="center">
        <NavbarItem>
          <Link
            color={activeSection === 0 ? undefined : 'foreground'}
            onPress={() => scrollToSection(0)}
          >
            {t('navbar.home')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={activeSection === 1 ? undefined : 'foreground'}
            onPress={() => scrollToSection(1)}
          >
            {t('navbar.howWorks')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={activeSection === 2 ? undefined : 'foreground'}
            onPress={() => scrollToSection(2)}
          >
            {t('navbar.learning')}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <AccountConnect />
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderHome;
