import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  // Caminho direto para a imagem na raiz/public
  const primaryImage = "/CHEDDAR.jpg";
  // Fallback de alta qualidade
  const fallbackImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden bg-veloce-black">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#121212] to-transparent z-0 opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-veloce-black to-transparent z-10" />
      
      {/* Gold Glow Orb - Adjusted for mobile visibility */}
      <div className="absolute top-10 right-0 md:top-1/4 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-veloce-gold rounded-full filter blur-[100px] md:blur-[120px] opacity-10 animate-pulse" />

      <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content - Order 1 on Mobile (First) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-1 flex flex-col items-start"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-veloce-gold/30 rounded-full bg-veloce-gold/5 backdrop-blur-sm">
            <span className="text-veloce-gold text-[10px] md:text-xs font-bold tracking-widest uppercase">{t.hero.badge}</span>
          </div>
          
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            {t.hero.headline.line1} <br/>
            {t.hero.headline.line2} <br/>
            <span className="bg-gradient-to-r from-veloce-gold to-veloce-amber bg-clip-text text-transparent">
              {t.hero.headline.line3}
            </span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed">
            {t.hero.subtext}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" icon className="w-full sm:w-auto">
              {t.hero.ctaPrimary}
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        {/* Image Content - Order 2 on Mobile (Second) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-2 relative flex justify-center lg:justify-end mt-4 lg:mt-0"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-veloce-gold/10 bg-veloce-black mx-auto lg:mx-0"
          >
             {/* Gold Energy Lines (CSS Borders/Overlays) */}
             <div className="absolute inset-0 border border-veloce-gold/20 z-30 rounded-2xl pointer-events-none"></div>
             
             {/* Founder Image with Professional Fallback */}
            <img 
              src={imgError ? fallbackImage : primaryImage}
              onError={() => setImgError(true)}
              alt="Gabriel Basilio Lopes" 
              className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-90 hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Speed Lines Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;