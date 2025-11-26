import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

interface NavbarProps {
    onNavigateHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
      onNavigateHome();
      window.scrollTo(0, 0);
  }

  const handleNavClick = (href: string) => {
      onNavigateHome();
      // Small timeout to allow state change before scrolling to ID
      setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
      setIsMobileMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-nst-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-8 md:px-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-gradient-to-br from-nst-teal to-green-400 rounded-lg flex items-center justify-center font-bold text-xl">
            K
          </div>
          <span className="text-2xl font-bold tracking-tight">KNST</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium hover:text-nst-teal transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nst-teal transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-nst-dark/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-lg font-medium text-white hover:text-nst-teal"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
