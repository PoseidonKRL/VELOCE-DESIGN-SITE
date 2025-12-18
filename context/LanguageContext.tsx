import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
}

const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      portfolio: 'Projetos',
      cta: 'Fale Comigo'
    },
    hero: {
      badge: 'High Authority Design',
      headline: {
        line1: 'Sua autoridade',
        line2: 'digital começa com',
        line3: 'um design de nível.'
      },
      subtext: 'Estratégia, velocidade e estética de alto padrão. O Veloce Design cria experiências digitais que posicionam sua marca no topo.',
      ctaPrimary: 'Eleve seu posicionamento',
      ctaSecondary: 'Ver Portfólio'
    },
    marquee: "VELOCE DESIGN // AUTORIDADE DIGITAL // DESIGN ESTRATÉGICO // SITES DE ALTA PERFORMANCE // VELOCE DESIGN // UX/UI PREMIUM //",
    about: {
      badge: 'Experiência',
      years: '5+ Anos',
      headline: {
        part1: 'O compromisso que seu',
        part2: 'projeto merece.'
      },
      bio: {
        part1: 'Meu nome é Gabriel Basilio Lopes, fundador da Veloce Design. Especialista em transformar marcas comuns em autoridades digitais. Minha abordagem une o minimalismo estético com estratégias de conversão agressivas.',
        part2: 'Seja no dinamismo de um delivery ou na sobriedade de um escritório corporativo, entrego interfaces que não apenas impressionam, mas vendem.'
      },
      skillsTitle: 'Skills & Expertise',
      skills: ['UI/UX Design', 'React / Webflow', 'Estratégia SEO']
    },
    services: {
      heading: {
        part1: 'Soluções de',
        part2: 'Alta Performance'
      },
      subtext: 'Não entregamos apenas sites. Entregamos ferramentas de negócio desenhadas para estabelecer sua autoridade.',
      cards: [
        {
          title: "Criação de Websites de Autoridade",
          description: "Sites institucionais para advogados, contadores e empresas que precisam passar confiança imediata e solidez."
        },
        {
          title: "Design para Gastronomia & Delivery",
          description: "Interfaces visualmente deliciosas e focadas em conversão para hamburguerias, restaurantes e dark kitchens."
        },
        {
          title: "Otimização e Performance",
          description: "Sites ultra-rápidos que posicionam sua marca no topo do Google. SEO técnico e otimização de carregamento."
        }
      ]
    },
    portfolio: {
      label: 'Case Studies',
      heading: 'Projetos Selecionados',
      button: 'Ver Projeto',
      items: [
        {
          title: "Advocacia Rocha & Associados",
          description: "Uma plataforma digital sóbria e imponente para um escritório de advocacia de alto nível. Foco total em autoridade e captação de leads qualificados.",
          tags: ["Institucional", "Autoridade", "SEO"]
        },
        {
          title: "Burger Kingdon - Dark Kitchen",
          description: "Um site vibrante com modo escuro, tipografia ousada e fotografia gastronômica que desperta desejo imediato. Integrado ao sistema de delivery.",
          tags: ["Gastronomia", "Visual Impact", "Delivery"]
        }
      ]
    },
    footer: {
      cta: {
        part1: 'Pronto para acelerar seus resultados com um',
        part2: 'design de autoridade?'
      },
      button: 'Vamos Conversar',
      rights: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Projects',
      cta: 'Let\'s Talk'
    },
    hero: {
      badge: 'High Authority Design',
      headline: {
        line1: 'Your digital',
        line2: 'authority starts with',
        line3: 'top-tier design.'
      },
      subtext: 'Strategy, speed, and high-end aesthetics. Veloce Design creates digital experiences that position your brand at the top.',
      ctaPrimary: 'Elevate Your Positioning',
      ctaSecondary: 'View Portfolio'
    },
    marquee: "VELOCE DESIGN // DIGITAL AUTHORITY // STRATEGIC DESIGN // HIGH PERFORMANCE SITES // VELOCE DESIGN // PREMIUM UX/UI //",
    about: {
      badge: 'Experience',
      years: '5+ Years',
      headline: {
        part1: 'The commitment your',
        part2: 'project deserves.'
      },
      bio: {
        part1: 'My name is Gabriel Basilio Lopes, founder of Veloce Design. I specialize in transforming common brands into digital authorities. My approach combines aesthetic minimalism with aggressive conversion strategies.',
        part2: 'Whether it\'s the dynamism of a delivery service or the sobriety of a corporate office, I deliver interfaces that not only impress but sell.'
      },
      skillsTitle: 'Skills & Expertise',
      skills: ['UI/UX Design', 'React / Webflow', 'SEO Strategy']
    },
    services: {
      heading: {
        part1: 'High Performance',
        part2: 'Solutions'
      },
      subtext: 'We don\'t just deliver websites. We deliver business tools designed to establish your authority.',
      cards: [
        {
          title: "Authority Website Creation",
          description: "Institutional sites for lawyers, accountants, and companies that need to convey immediate trust and solidity."
        },
        {
          title: "Gastronomy & Delivery Design",
          description: "Visually delicious interfaces focused on conversion for burger joints, restaurants, and dark kitchens."
        },
        {
          title: "Optimization & Performance",
          description: "Ultra-fast websites that position your brand at the top of Google. Technical SEO and loading optimization."
        }
      ]
    },
    portfolio: {
      label: 'Case Studies',
      heading: 'Selected Projects',
      button: 'View Project',
      items: [
        {
          title: "Rocha & Associates Law",
          description: "A sober and imposing digital platform for a high-level law firm. Total focus on authority and qualified lead generation.",
          tags: ["Institutional", "Authority", "SEO"]
        },
        {
          title: "Burger Kingdon - Dark Kitchen",
          description: "A vibrant site with dark mode, bold typography, and food photography that sparks immediate desire. Integrated with delivery systems.",
          tags: ["Gastronomy", "Visual Impact", "Delivery"]
        }
      ]
    },
    footer: {
      cta: {
        part1: 'Ready to accelerate your results with',
        part2: 'authority design?'
      },
      button: 'Let\'s Talk',
      rights: 'All rights reserved.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};