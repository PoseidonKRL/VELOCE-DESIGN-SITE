import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, TrendingUp, CheckCircle } from 'lucide-react';
import Section from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

const SKILL_ICONS = [Layout, Code, TrendingUp];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" className="bg-veloce-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto md:mr-auto rounded-full overflow-hidden border-2 border-veloce-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
            <img 
              src="https://picsum.photos/id/1062/800/800" 
              alt="Gabriel Basilio Lopes Portrait" 
              className="w-full h-full object-cover filter grayscale contrast-110" 
            />
            {/* Rim light effect */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(212,175,55,0.3)]"></div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-4 right-10 bg-veloce-charcoal border border-veloce-gold/30 p-4 rounded-xl shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-veloce-gold/10 rounded-lg text-veloce-gold">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{t.about.badge}</p>
                <p className="font-heading font-bold text-white text-lg">{t.about.years}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            {t.about.headline.part1} <span className="text-veloce-gold">{t.about.headline.part2}</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {t.about.bio.part1}
            <br /><br />
            {t.about.bio.part2}
          </p>

          <div className="space-y-6">
            <h3 className="font-heading text-sm uppercase tracking-widest text-veloce-gold font-bold">{t.about.skillsTitle}</h3>
            <div className="flex flex-wrap gap-4">
              {t.about.skills.map((skill, index) => {
                const Icon = SKILL_ICONS[index] || Layout;
                return (
                  <div key={index} className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-lg hover:border-veloce-gold/40 transition-colors">
                    <Icon size={20} className="text-veloce-gold" />
                    <span className="font-medium text-gray-300">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default About;