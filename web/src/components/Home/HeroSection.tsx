// src/components/Home/HeroSection.tsx

'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleStart = () => {
    router.push('/dashboard');
  };
  return (
    <section className=" bg-information px-10 text-white">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
        <div className="mb-44 md:w-1/2">
          <p className="mb-6 text-lg">{t('hereSection.shortDescription')}</p>
          <h1 className="mb-6 text-6xl font-medium">{t('hereSection.title')}</h1>
          <Button
            onClick={handleStart}
            color="primary"
            className="text-black"
            radius="full"
            size="lg"
          >
            {t('hereSection.start')}
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
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center bg-white p-8 shadow-lg md:w-1/2">
          <p className="mb-4 text-4xl text-black">{t('hereSection.videoDescription')}</p>
          <Button
            color="primary"
            variant="bordered"
            radius="full"
            className="font-urbanist text-black"
            size="lg"
          >
            {t('hereSection.calculate')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
