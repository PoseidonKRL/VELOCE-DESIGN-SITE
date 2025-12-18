import { Monitor, Smartphone, Rocket, Instagram, Mail, MessageCircle } from 'lucide-react';
import { SocialLink } from './types';

// We just keep the structure here, text is now handled by LanguageContext
export const NAV_LINKS = [
  { href: '#hero', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#services', key: 'services' },
  { href: '#portfolio', key: 'portfolio' },
];

export const SERVICE_ICONS = [Monitor, Smartphone, Rocket];

export const PROJECT_IMAGES = [
  "https://picsum.photos/id/48/1200/800", // Authority project
  "https://picsum.photos/id/437/1200/800"  // Visual project
];

export const SOCIALS: SocialLink[] = [
  { name: 'WhatsApp', url: '#', icon: MessageCircle },
  { name: 'Instagram', url: '#', icon: Instagram },
  { name: 'Email', url: 'mailto:contato@veloce.design', icon: Mail },
];