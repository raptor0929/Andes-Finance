'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import SharedLayout from '@/components/SharedLayout';
import Header from './components/Header';
import LoansTable from './components/LoansTable';

const loansData = [
  {
    payment: '1st payment',
    mount: '170',
    date: '23/07/24',
    status: 'pay',
  },
  {
    payment: '2st payment',
    mount: '170',
    date: '23/08/24',
    status: 'pending',
  },
  {
    payment: '3st payment',
    mount: '170',
    date: '23/09/24',
    status: 'pending',
  },
];

const page = () => {
  return (
    <SharedLayout>
      <div className="h-5/6 p-10 text-black">
        <div className="px-10 pb-12 pt-4">
          <span className="font-urbanist text-4xl text-information">My loans</span>
        </div>
        {loansData.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center bg-white py-16 ">
            <div className="border-rad flex w-2/5 flex-col gap-4 rounded-lg border-1 border-[#5A88EE] bg-white p-10">
              <p className="text-center">
                POR EL MOMENTO NO TIENES NINGÚN PRÉSTAMO, SOLICITA UNO YA.
              </p>
              <Button color="primary" className="py-7 text-black" radius="full">
                SOLICITAR UN PRESTAMO
              </Button>
            </div>
          </div>
        ) : (
          <>
            <Header />
            <LoansTable data={loansData} />
          </>
        )}
      </div>
    </SharedLayout>
  );
};

export default page;
