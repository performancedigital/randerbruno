'use client';

import { MessageCircle } from 'lucide-react';
import { WA_GROUP_LINK } from '@/lib/constants';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-green/95 backdrop-blur-sm p-3 shadow-[0_-4px_20px_rgba(37,211,102,0.3)]">
      <a
        href={WA_GROUP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 bg-white text-brand-green font-bold rounded-full text-sm
          focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        <MessageCircle className="w-5 h-5" />
        ENTRAR NO GRUPO AGORA
      </a>
    </div>
  );
}
