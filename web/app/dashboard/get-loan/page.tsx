'use client';
import SharedLayout from '@/components/SharedLayout';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Input, Button } from '@nextui-org/react';
import Link from 'next/link';

const page = () => {
  const pathname = usePathname();
  return (
    <SharedLayout>
      <div className="h-full px-4 py-2">
        {/* <div className="px-10 pb-12 pt-4">
          <span className="font-urbanist text-4xl text-information">Dashboard</span>
        </div> */}
        <div className="flex h-full p-14">
          <div className="flex w-full flex-col items-center justify-center gap-8 bg-white px-20 text-black">
            <div className="w-full">
              <p className="text-6xl text-information">Desembolsa tu préstamo</p>
              <span className="text-gray-400">Confirma primero estos datos</span>
            </div>
            <div className="flex h-1/2 w-full items-center gap-20">
              <div className="flex w-1/2 flex-col gap-8">
                <span className="text-xl text-black">DIRECCIÓN DE CUENTA DE DEPÓSITO</span>
                <Input
                  type="address"
                  label="Address"
                  color="primary"
                  isClearable
                  radius="none"
                  // className="border-2 border-primary"
                />
                <span className="text-sm text-gray-400">
                  A esta cuenta depositaremos el préstamo. Debe estar en USDC y en la red?
                </span>
              </div>
              <div className="flex w-1/2 flex-col gap-5">
                <span className="text-xl text-black">DIRECCIÓN DE CORREO ELECTRÓNICO</span>
                <Input
                  type="email"
                  label="Email"
                  color="primary"
                  isClearable
                  radius="none"
                  // className="border-2 border-primary"
                />
                <span className="text-sm text-gray-400">
                  A este correo te enviaremos las notificaciones de pago
                </span>
              </div>
            </div>

            <Link href={'/dashboard/laon'} passHref>
              <Button radius="full" color="primary" className="px-16 py-8 text-lg">
                CONTINUAR
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
};

export default page;
