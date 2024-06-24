'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from '../Global/LanguageSwitcher';

const HeaderHome: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/logo.svg" alt="Logo" width={300} height={300} />
        </div>
        <nav className="flex space-x-8 font-medium text-gray-700">
          <Link href="/">
            <p className="hover:text-gray-900">Inicio</p>
          </Link>
          <Link href="/how-it-works">
            <p className="hover:text-gray-900">¿Cómo funciona?</p>
          </Link>
          <Link href="/learn">
            <p className="hover:text-gray-900">Aprende</p>
          </Link>
        </nav>
        <div className="flex space-x-4">
          <button className="border-primary-normal text-primary-normal rounded border-2 px-4 py-2 font-bold">
            INICIA SESIÓN
          </button>
          <button className="bg-primary-normal hover:bg-primary-hover rounded px-4 py-2 font-bold text-white">
            REGÍSTRATE
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
