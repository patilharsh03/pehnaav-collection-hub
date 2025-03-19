
import React, { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import { categories, testimonials } from '@/data/homePageData';

const HomePage: React.FC = () => {
  // Smooth scrolling for hero section arrow
  const scrollToNextSection = () => {
    const featuredSection = document.getElementById('featured-section');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <HeroSection scrollToNextSection={scrollToNextSection} />
      <FeaturedCategories categories={categories} />
      <AboutPreview />
      <Testimonials testimonials={testimonials} />
      <CTASection />
    </PageTransition>
  );
};

export default HomePage;
