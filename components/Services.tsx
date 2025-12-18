import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { SERVICE_ICONS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="services" className="bg-veloce-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-veloce-gold/20 to-transparent"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          {t.services.heading.part1} <span className="text-veloce-gold">{t.services.heading.part2}</span>
        </h2>
        <p className="text-gray-400">
          {t.services.subtext}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.services.cards.map((service, index) => {
          const Icon = SERVICE_ICONS[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-[#0F0F0F] p-8 rounded-xl border border-white/5 hover:border-veloce-gold/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-veloce-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-veloce-black border border-veloce-gold/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-veloce-gold transition-all duration-300">
                  <Icon className="text-veloce-gold w-7 h-7" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-veloce-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;