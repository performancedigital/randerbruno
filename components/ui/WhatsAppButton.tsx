import { MessageCircle } from 'lucide-react';
import { WA_GROUP_LINK } from '@/lib/constants';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function WhatsAppButton({
  text = 'ENTRAR NO GRUPO GRATUITO',
  className = '',
  size = 'md',
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <a
      href={WA_GROUP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-brand-green text-white font-bold rounded-full 
        hover:brightness-110 transition-all duration-300 animate-pulse-glow
        focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark
        ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {text}
    </a>
  );
}
