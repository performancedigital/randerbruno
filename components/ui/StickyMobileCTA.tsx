'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';
import { WA_GROUP_LINK } from '@/lib/constants';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent pt-6 pb-3 px-3">
        <a
          href={WA_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 bg-brand-green text-brand-dark font-extrabold rounded-xl text-sm animate-pulse-glow"
        >
          <MessageCircle className="w-5 h-5" />
          ENTRAR NO GRUPO AGORA
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}