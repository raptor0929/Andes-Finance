import SharedLayout from '@/components/SharedLayout';
import React from 'react';
import Founding from './components/Founding';
import LoanRoute from './components/LoanRoute';
import CreditScore from './components/CreditScore';

const page = () => {
  return (
    <SharedLayout>
      <div className="h-full px-4 py-2">
        {/* <div className="px-10 pb-12 pt-4">
          <span className="font-urbanist text-4xl text-information">Dashboard</span>
        </div> */}
        <div className="flex h-full ">
          <div className="flex w-1/2 flex-col gap-8 p-4">
            <CreditScore />
            <Founding />
          </div>
          <div className="w-1/2 p-4">
            <LoanRoute />
          </div>
        </div>
      </div>
    </SharedLayout>
  );
};

export default page;
