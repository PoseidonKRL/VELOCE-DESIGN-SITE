import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-veloce-black/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-2xl tracking-tighter flex items-center gap-1 group">
          <span className="text-white group-hover:text-veloce-gold transition-colors duration-300">&lt;</span>
          <span className="bg-gradient-to-r from-veloce-gold to-veloce-amber bg-clip-text text-transparent">VL</span>
          <span className="text-white group-hover:text-veloce-gold transition-colors duration-300">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a 
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-veloce-gold uppercase tracking-wide transition-colors"
            >
              {/* @ts-ignore - dynamic key access */}
              {t.nav[item.key]}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1 border border-white/10 rounded-full hover:border-veloce-gold/50 transition-colors"
          >
            <span className={language === 'pt' ? 'text-veloce-gold' : 'text-gray-500'}>PT</span>
            <span className="text-gray-600">/</span>
            <span className={language === 'en' ? 'text-veloce-gold' : 'text-gray-500'}>EN</span>
          </button>

          <Button variant="primary" className="!px-6 !py-2 !text-xs">
            {t.nav.cta}
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleLanguage}
                className="text-xs font-bold uppercase tracking-wider px-2 py-1 border border-white/10 rounded-full text-veloce-gold"
            >
                {language.toUpperCase()}
            </button>
            <button 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-veloce-black z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
            <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
            >
            <X size={28} />
            </button>
          {NAV_LINKS.map((item) => (
            <a 
              key={item.key}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-2xl font-bold text-white hover:text-veloce-gold"
            >
              {/* @ts-ignore */}
              {t.nav[item.key]}
            </a>
          ))}
           <Button variant="primary" onClick={() => setIsOpen(false)}>
            {t.nav.cta}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;