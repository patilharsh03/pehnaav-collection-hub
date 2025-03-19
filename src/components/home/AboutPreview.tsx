
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageWithLoader from '@/components/ImageWithLoader';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-wine-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-wine-100 text-wine-800 rounded-full text-sm font-medium mb-4">
              About Pehnaav
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Wholesale Excellence <br />in Every Garment
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Pehnaav, we blend traditional craftsmanship with modern design sensibilities to create wholesale garments that stand out in quality and style.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our commitment to excellence has made us a trusted partner for retailers across the country who demand nothing but the best for their customers.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 bg-wine-800 hover:bg-wine-700 text-white rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Learn More About Us <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <ImageWithLoader
              src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="Pehnaav workshop"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
