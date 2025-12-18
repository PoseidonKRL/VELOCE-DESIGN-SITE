import React from 'react';
import { Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Marquee: React.FC = () => {
  const { t } = useLanguage();
  // Create an array to repeat the text enough times to fill screens smoothly
  const content = Array(6).fill(t.marquee);

  return (
    <div className="relative py-6 bg-veloce-charcoal border-y border-white/5 overflow-hidden flex items-center">
      <div className="flex animate-scroll whitespace-nowrap">
        {content.map((text, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="font-heading font-bold text-2xl md:text-3xl text-white/10 uppercase tracking-widest hover:text-veloce-gold/40 transition-colors duration-300 select-none">
              {text}
            </span>
            <Zap className="text-veloce-gold/30 mx-4 w-6 h-6" fill="currentColor" />
          </div>
        ))}
      </div>
      
      {/* CSS for custom animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;