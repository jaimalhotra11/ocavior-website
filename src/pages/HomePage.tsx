import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ClientsSection from '../components/home/ClientsSection';
import MarketingServices from '../components/home/MarketingServices';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ClientsSection />
      <MarketingServices />
      <CtaSection />
    </main>
  );
};

export default HomePage;