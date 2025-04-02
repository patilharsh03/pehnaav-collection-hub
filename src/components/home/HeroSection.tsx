import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ImageWithLoader from '@/components/ImageWithLoader';
import { scrollToTop } from '@/lib/scrollToTop';

interface HeroSectionProps {
  scrollToNextSection: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToNextSection }) => {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithLoader
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury fashion garments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-950/70 via-wine-900/50 to-wine-950/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-6">
            Elegance in Every <span className="text-gold-400">Thread</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mx-auto max-w-3xl mb-8">
            Premium wholesale garments crafted with precision for retailers who demand quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigate('/products')}
              className="inline-flex items-center justify-center px-8 py-3 bg-wine-800 hover:bg-wine-700 text-white rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Explore Collection
            </button>
            <button
              onClick={() => handleNavigate('/contact')}
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-all transform hover:translate-y-[-2px]"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center justify-center text-white animate-bounce"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
