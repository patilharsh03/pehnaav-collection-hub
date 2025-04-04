import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Menu, X, ShoppingBag, Info, Home, Phone } from 'lucide-react';
import { scrollToTop } from '@/lib/scrollToTop';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-4 bg-wine-950/80 backdrop-blur-md'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <span className="text-3xl font-bold font-display tracking-wider">
                  <span className={scrolled ? "text-wine-900" : "text-white"}>PEHNAAV</span>
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-wine-700 to-gold-400"></span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <NavLink 
              to="/" 
              label="Home" 
              active={location.pathname === '/'} 
              icon={<Home size={16} className="mr-1" />}
              scrolled={scrolled}
            />
            <NavLink 
              to="/products" 
              label="Products" 
              active={location.pathname === '/products'} 
              icon={<ShoppingBag size={16} className="mr-1" />}
              scrolled={scrolled}
            />
            <NavLink 
              to="/about" 
              label="About Us" 
              active={location.pathname === '/about'} 
              icon={<Info size={16} className="mr-1" />}
              scrolled={scrolled}
            />
            <NavLink 
              to="/contact" 
              label="Contact" 
              active={location.pathname === '/contact'} 
              icon={<Phone size={16} className="mr-1" />}
              scrolled={scrolled}
            />
            <a 
              href="https://instagram.com/pehnaav__?igsh=eXdlZ3BqdzE4MjF4" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-1 transition-colors hover:text-wine-700 ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
              aria-label="Visit our Instagram"
            >
              <Instagram size={18} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled 
                  ? 'text-gray-700 hover:text-wine-800 hover:bg-gray-100 focus:bg-gray-100 focus:text-wine-800' 
                  : 'text-white hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white'
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed inset-0 z-40 w-full h-screen pt-24 pb-6 bg-wine-950 transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center space-y-8 text-lg">
          <NavLink 
            to="/" 
            label="Home" 
            active={location.pathname === '/'} 
            mobile 
            icon={<Home size={20} className="mr-2" />}
            scrolled={scrolled}
          />
          <NavLink 
            to="/products" 
            label="Products" 
            active={location.pathname === '/products'} 
            mobile 
            icon={<ShoppingBag size={20} className="mr-2" />}
            scrolled={scrolled}
          />
          <NavLink 
            to="/about" 
            label="About Us" 
            active={location.pathname === '/about'} 
            mobile 
            icon={<Info size={20} className="mr-2" />}
            scrolled={scrolled}
          />
          <NavLink 
            to="/contact" 
            label="Contact" 
            active={location.pathname === '/contact'} 
            mobile 
            icon={<Phone size={20} className="mr-2" />}
            scrolled={scrolled}
          />
          <a 
            href="https://instagram.com/pehnaav__?igsh=eXdlZ3BqdzE4MjF4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 mt-4 text-white transition-colors hover:text-gold-400"
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
  icon?: React.ReactNode;
  scrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, active, mobile, icon, scrolled }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(to);
    scrollToTop();
  };

  return (
    <div 
      onClick={handleNavigation}
      className={`
        relative flex items-center transition-all duration-300 cursor-pointer ${mobile ? 'py-2 px-4 text-white' : ''}
        ${active 
          ? mobile 
            ? 'text-gold-400 font-medium' 
            : scrolled 
              ? 'text-wine-800 font-medium' 
              : 'text-gold-400 font-medium'
          : mobile
            ? 'text-white hover:text-gold-400'
            : scrolled
              ? 'text-gray-600 hover:text-wine-700' 
              : 'text-white hover:text-gold-400'
        }
      `}
    >
      {icon}
      {label}
      {active && !mobile && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-wine-700 to-gold-400 mt-1" />
      )}
    </div>
  );
};

export default Navbar;
