import React from 'react';
import Navbar from '../components/Layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import CTASection from '../components/sections/CTASection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/Layout/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default LandingPage;
