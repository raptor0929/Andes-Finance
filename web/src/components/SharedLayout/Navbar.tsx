import React from 'react';
import AccountConnect from '../layout/header/AccountConnect';
import LanguageSwitcher from '../Global/LanguageSwitcher';

function Navbar() {
  return (
    <div className="flex h-full items-center justify-between  font-urbanist text-black">
      <div className="w-1/6 px-10 text-3xl">Welcome!</div>
      <div className="flex px-10">
        <LanguageSwitcher />
        <AccountConnect />
      </div>
    </div>
  );
}

export default Navbar;
