import React from 'react';
import { SOCIALS } from '../constants';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-veloce-black border-t border-white/5 pt-24 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {t.footer.cta.part1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-veloce-gold to-veloce-amber">{t.footer.cta.part2}</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" className="w-full sm:w-auto text-lg py-5 px-10">
              {t.footer.button}
            </Button>
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="p-4 border border-white/10 rounded-sm text-veloce-gold hover:border-veloce-gold hover:bg-veloce-gold/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <div className="mb-4 md:mb-0">
            <span className="font-heading font-bold text-xl tracking-tighter text-white">
                VL<span className="text-veloce-gold">/</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Veloce Design. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;