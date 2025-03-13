
import React, { useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import ImageWithLoader from '@/components/ImageWithLoader';

const HomePage: React.FC = () => {
  // Smooth scrolling for hero section arrow
  const scrollToNextSection = () => {
    const featuredSection = document.getElementById('featured-section');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageTransition>
      {/* Hero Section */}
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
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-wine-800 hover:bg-wine-700 text-white rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Explore Collection <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-all transform hover:translate-y-[-2px]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
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

      {/* Featured Categories Section */}
      <section id="featured-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-wine-50 text-wine-800 rounded-full text-sm font-medium mb-4">
              Our Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Featured Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium wholesale garment categories crafted with attention to detail and quality
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category) => (
              <motion.div 
                key={category.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-5 relative overflow-hidden">
                  <ImageWithLoader
                    src={category.image}
                    alt={category.title}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-bold mb-2">{category.title}</h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <Link
                    to={`/products?category=${category.id}`}
                    className="inline-flex items-center font-medium text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Explore <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gold-50 text-gold-800 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from retailers who have transformed their business with Pehnaav's wholesale garments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-wine-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold-500 hover:bg-gold-600 text-wine-950 font-medium rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Get in Touch
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-all transform hover:translate-y-[-2px]"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

// Sample data for the categories
const categories = [
  {
    id: 'ethnic',
    title: 'Ethnic Wear',
    description: 'Traditional garments with contemporary designs',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80'
  },
  {
    id: 'formal',
    title: 'Formal Wear',
    description: 'Sophisticated attire for professional settings',
    image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&auto=format&fit=crop&w=985&q=80'
  },
  {
    id: 'casual',
    title: 'Casual Collection',
    description: 'Comfortable yet stylish everyday garments',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80'
  }
];

// Sample testimonials
const testimonials = [
  {
    name: 'Priya Sharma',
    title: 'Owner, Elegance Boutique',
    quote: 'Pehnaav has transformed our boutique's collection. The quality of their garments is exceptional, and our customers love the unique designs.',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    name: 'Rajiv Mehta',
    title: 'Director, Fashion Forward',
    quote: 'We've been working with Pehnaav for over 3 years. Their wholesale collection consistently exceeds our expectations in quality and style.',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
  {
    name: 'Ananya Patel',
    title: 'Manager, Trendsetter Retail',
    quote: 'The attention to detail in Pehnaav's garments is remarkable. Our store has seen increased customer satisfaction since partnering with them.',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
  }
];

export default HomePage;
