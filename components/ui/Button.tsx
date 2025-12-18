import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  icon = false
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-gold-gradient text-veloce-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    outline: "border border-veloce-gold text-veloce-gold hover:bg-veloce-gold hover:text-veloce-black",
    ghost: "text-veloce-gold hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
};

export default Button;