
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wine-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-3xl font-display font-bold text-white">Pehnaav</h2>
            </Link>
            <p className="text-gold-100 mb-6 max-w-xs">
              Premium wholesale garment brand delivering quality fashion to retailers worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-wine-800 flex items-center justify-center hover:bg-gold-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@pehnaav.com" 
                className="w-10 h-10 rounded-full bg-wine-800 flex items-center justify-center hover:bg-gold-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h3 className="font-display text-xl mb-6 text-gold-300">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gold-400 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="font-display text-xl mb-6 text-gold-300">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-gold-400 mt-1 flex-shrink-0" />
                <p>123 Fashion Street, Textile District, Mumbai, India - 400001</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-gold-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold-400 transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-gold-400 flex-shrink-0" />
                <a href="mailto:info@pehnaav.com" className="hover:text-gold-400 transition-colors">info@pehnaav.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-wine-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-wine-300">
              &copy; {new Date().getFullYear()} Pehnaav. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-wine-300">
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
