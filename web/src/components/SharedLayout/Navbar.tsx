'use client';
import React from 'react';
import LanguageSwitcher from '../Global/LanguageSwitcher';
import AccountConnect from '../layout/header/AccountConnect';
import { BlackCreateWalletButton } from '../layout/header/BlackCreateWalletButton';

function Navbar() {
  return (
    <div className="flex h-full items-center justify-between  font-urbanist text-black">
      <div className="w-1/6 px-10 text-3xl">Welcome!</div>
      <div className="flex px-10">
        <LanguageSwitcher />
        <BlackCreateWalletButton />
        <AccountConnect />
      </div>
    </div>
  );
}

export default Navbar;
