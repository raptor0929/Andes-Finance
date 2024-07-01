import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import AndesFinanceLogo from '../Global/AndesFinanceLogo';
import LanguageSwitcher from '../Global/LanguageSwitcher';
import AccountConnect from '../layout/header/AccountConnect';
import { BlackCreateWalletButton } from '../layout/header/BlackCreateWalletButton';
import { useAccount } from 'wagmi';

type ScrollComponentProps = {
  scrollToSection: (index: number) => void;
  activeSection: number;
};

const HeaderHome: React.FC<ScrollComponentProps> = ({ scrollToSection, activeSection }) => {
  const { t } = useTranslation();
  const { address } = useAccount();
  return (
    <Navbar className="z-10 bg-background-1 p-4" maxWidth="2xl">
      <NavbarContent className="w-full justify-between">
        <NavbarBrand>
          <Link color={activeSection === 0 ? undefined : 'foreground'}>
            <AndesFinanceLogo />
          </Link>
        </NavbarBrand>
        <div className="flex w-1/2 justify-center gap-6 lg:gap-20">
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
        </div>
        <div className="flex items-center gap-4">
          <NavbarItem>
            <LanguageSwitcher />
          </NavbarItem>
          {!address && (
            <NavbarItem className="hidden lg:flex">
              <BlackCreateWalletButton />
            </NavbarItem>
          )}
          <NavbarItem className="hidden rounded-lg bg-information px-10 py-3 text-lg font-bold lg:flex">
            <AccountConnect />
          </NavbarItem>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderHome;
