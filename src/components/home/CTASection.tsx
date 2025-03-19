
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  const navigate = useNavigate();
  
  // Navigation to Contact page with scroll to top
  const navigateToContact = () => {
    navigate('/contact');
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  // Navigation to Products page with scroll to top
  const navigateToProducts = () => {
    navigate('/products');
    // Scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-wine-800 to-wine-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Elevate Your Retail Collection?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with Pehnaav for premium wholesale garments that set your brand apart from the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateToContact}
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-500 hover:bg-gold-600 text-wine-950 font-medium rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Get in Touch
            </button>
            <button
              onClick={navigateToProducts}
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-all transform hover:translate-y-[-2px]"
            >
              Browse Products
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
