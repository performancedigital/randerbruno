import { INSTAGRAM_LINKS } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="border-t border-white/[0.04] px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-gray/50">
        <p>&copy; 2026 RS Engenharia. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <a href={INSTAGRAM_LINKS.eng_rander} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors flex items-center gap-1">
            <ExternalLink className="w-3 h-3" /> @eng.rander
          </a>
          <a href={INSTAGRAM_LINKS.randerbruno_eng} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors flex items-center gap-1">
            <ExternalLink className="w-3 h-3" /> @randerbruno.eng
          </a>
        </div>
        <p>Este site não coleta dados pessoais.</p>
      </div>
    </footer>
  );
}