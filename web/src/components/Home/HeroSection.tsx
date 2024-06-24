// src/components/Home/HeroSection.tsx

'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-information py-20 text-white">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
        <div className="mb-44 md:w-1/2">
          <p className="mb-6 text-lg">100% SEGURO Y CONFIABLE</p>
          <h1 className="mb-6 text-6xl font-medium">
            Obtén un préstamo mientras juegas y aprendes
          </h1>
          <Button color="primary" className="text-black" radius="full" size="lg">
            EMPECEMOS
          </Button>
        </div>
        <div className="mt-32 w-1/2">
          <Image
            src="/images/home/girl.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="container mx-auto flex text-center">
        <div className="w-full md:w-1/2">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/bSnlKl_PoQU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto"
          ></iframe>
        </div>
        <div className="inline-block w-full bg-white p-8 shadow-lg md:w-1/2">
          <p className="mb-4 text-4xl text-black">
            Sabemos que obtener un préstamo no es sencillo, es por eso que te ayudamos a cumplir tus
            metas con micro créditos.
          </p>
          <Button color="primary" variant="bordered" radius="full" className="text-black" size="lg">
            CALCULA TU PRÉSTAMO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
