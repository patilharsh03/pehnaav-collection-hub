
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-wine-900 font-display">Pehnaav</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <NavLink to="/" label="Home" active={location.pathname === '/'} />
            <NavLink to="/products" label="Products" active={location.pathname === '/products'} />
            <NavLink to="/about" label="About Us" active={location.pathname === '/about'} />
            <NavLink to="/contact" label="Contact" active={location.pathname === '/contact'} />
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-600 transition-colors hover:text-wine-700"
            >
              <Instagram size={18} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-wine-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-wine-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed inset-0 z-40 w-full h-screen pt-24 pb-6 bg-white transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center space-y-8 text-lg">
          <NavLink to="/" label="Home" active={location.pathname === '/'} mobile />
          <NavLink to="/products" label="Products" active={location.pathname === '/products'} mobile />
          <NavLink to="/about" label="About Us" active={location.pathname === '/about'} mobile />
          <NavLink to="/contact" label="Contact" active={location.pathname === '/contact'} mobile />
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 mt-4 text-gray-600 transition-colors hover:text-wine-700"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  active: boolean;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, active, mobile }) => {
  return (
    <Link
      to={to}
      className={`
        relative transition-all duration-300 ${mobile ? 'py-2 px-4' : ''}
        ${active 
          ? 'text-wine-800 font-medium' 
          : 'text-gray-600 hover:text-wine-700'
        }
      `}
    >
      {label}
      {active && !mobile && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-wine-700 to-gold-400 mt-1" />
      )}
    </Link>
  );
};

export default Navbar;
