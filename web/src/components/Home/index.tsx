'use client';
import React from 'react';
import HeaderHome from './HeaderHome';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import GetStarted from './GetStarted';
import CalculateLoan from './CalculateLoan';
import FreeCourses from './FreeCourses';
import FooterHome from './FooterHome';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  return (
    <>
      <HeaderHome />
      <HeroSection />
      <HowItWorks />
      <GetStarted />
      <CalculateLoan />
      <FreeCourses />
      <FooterHome />
    </>
  );
};

export default Home;
