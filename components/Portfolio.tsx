import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import Button from './ui/Button';
import { PROJECT_IMAGES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="portfolio" className="bg-veloce-black">
      <div className="text-center mb-16 md:mb-20">
         <span className="text-veloce-gold text-xs font-bold tracking-widest uppercase mb-2 block">{t.portfolio.label}</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">{t.portfolio.heading}</h2>
      </div>

      <div className="space-y-24 md:space-y-32">
        {t.portfolio.items.map((project, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 md:gap-12 lg:gap-20`}
          >
            {/* Image Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-3/5"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-veloce-gold/20 to-veloce-charcoal rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-veloce-charcoal aspect-video shadow-2xl">
                    <img 
                        src={PROJECT_IMAGES[index]} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Mockup Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-2/5"
            >
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] md:text-xs font-bold text-veloce-gold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <Button variant="outline" icon>
                {t.portfolio.button}
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;