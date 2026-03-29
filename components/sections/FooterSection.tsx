import { INSTAGRAM_LINKS } from '@/lib/constants';
import { Link2 } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="border-t border-white/5 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-gray">
        <p>&copy; 2026 RS Engenharia. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <a href={INSTAGRAM_LINKS.eng_rander} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded">
            <Link2 className="w-5 h-5" />
          </a>
          <a href={INSTAGRAM_LINKS.randerbruno_eng} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded">
            <Link2 className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-brand-gray/50">Este site não coleta dados pessoais.</p>
      </div>
    </footer>
  );
}
