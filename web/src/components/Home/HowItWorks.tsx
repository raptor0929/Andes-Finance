// src/components/Home/HowItWorks.tsx

'use client';
import Image from 'next/image';
import React from 'react';
import { IoWallet, IoServer, IoGitNetwork, IoGift } from 'react-icons/io5';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-success py-28 text-white">
      <div className="container mx-auto">
        <h2 className="mb-20 text-6xl font-medium">¿Cómo funciona?</h2>
        <div className="flex flex-wrap justify-around">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <Image
              src="/images/home/wallet-bg-blue.svg"
              alt="Hero Image"
              width={80}
              height={80}
              className="mb-4 rounded-lg"
            />
            <div className="w-60">
              <h3 className="my-6 text-left text-2xl font-bold">Lorem ipsum</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien nec orci.
              </p>
            </div>
          </div>
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <Image
              src="/images/home/money-bg-blue.svg"
              alt="Hero Image"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="w-60">
              <h3 className="my-6 text-left text-2xl font-bold">Aprende gratis</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien nec orci.
              </p>
            </div>
          </div>
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <Image
              src="/images/home/challenges-bg-blue.svg"
              alt="Hero Image"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="w-60">
              <h3 className="my-6 text-left text-2xl font-bold">Cumple retos</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien nec orci.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/4">
            <Image
              src="/images/home/loan-bg-blue.svg"
              alt="Hero Image"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="w-60">
              <h3 className="my-6 text-left text-2xl font-bold">Obtén tu préstamo</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien nec orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
