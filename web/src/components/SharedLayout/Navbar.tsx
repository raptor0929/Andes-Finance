import React from 'react';
import AccountConnect from '../layout/header/AccountConnect';

function Navbar() {
  return (
    <div className="flex h-full items-center justify-between px-10 font-urbanist  text-black">
      <div className="w-1/6 text-3xl">Welcome!</div>
      {/* <div className="w-1/6 text-end text-xl">0xeD...9JWC</div> */}
      <AccountConnect/>
    </div>
  );
}

export default Navbar;
