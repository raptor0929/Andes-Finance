'use client';
import React from 'react';
import AccountConnect from '../layout/header/AccountConnect';
import LanguageSwitcher from '../Global/LanguageSwitcher';
import CreateSession from '../layout/header/CreateSession';
import { useBiconomy } from '@/context/BiconomyContext';

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
