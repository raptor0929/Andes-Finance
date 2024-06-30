'use client';
import React from 'react';
import { useBiconomy } from '@/context/BiconomyContext';
import LanguageSwitcher from '../Global/LanguageSwitcher';
import AccountConnect from '../layout/header/AccountConnect';
import CreateSession from '../layout/header/CreateSession';

function Navbar() {
  const { smartAccountAddress } = useBiconomy();
  return (
    <div className="flex h-full items-center justify-between  font-urbanist text-black">
      <div className="w-1/6 px-10 text-3xl">Welcome!</div>
      <div className="flex px-10">
        <LanguageSwitcher />
        <AccountConnect />
        <CreateSession userSmartAccountAddress={smartAccountAddress}/>
      </div>
    </div>
  );
}

export default Navbar;
