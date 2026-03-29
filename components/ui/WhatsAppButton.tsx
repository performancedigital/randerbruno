import { MessageCircle } from 'lucide-react';
import { WA_GROUP_LINK } from '@/lib/constants';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

export default function WhatsAppButton({
  text = 'ENTRAR NO GRUPO GRATUITO',
  className = '',
  size = 'md',
  variant = 'primary',
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: 'px-6 py-3 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  };

  return (
    <a
      href={WA_GROUP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {text}
    </a>
  );
}