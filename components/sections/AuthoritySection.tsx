import SectionWrapper from '@/components/ui/SectionWrapper';
import { AUTHORITY, INSTAGRAM_LINKS } from '@/lib/constants';
import { Link2 } from 'lucide-react';

export default function AuthoritySection() {
  return (
    <SectionWrapper dark>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-brand-dark border border-white/10 flex items-center justify-center overflow-hidden">
            <span className="text-5xl font-display font-black text-brand-gold/30">RB</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">{AUTHORITY.name}</h2>
          <p className="text-brand-gray leading-relaxed mb-6">{AUTHORITY.bio}</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {AUTHORITY.credentials.map((cred, i) => (
              <span key={i} className="px-4 py-2 text-sm font-semibold text-brand-gold border border-brand-gold/30 rounded-full bg-brand-gold/5">
                {cred}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={INSTAGRAM_LINKS.eng_rander} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-gray hover:text-brand-gold transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold rounded">
              <Link2 className="w-4 h-4" /> @eng.rander
            </a>
            <a href={INSTAGRAM_LINKS.randerbruno_eng} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-gray hover:text-brand-gold transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold rounded">
              <Link2 className="w-4 h-4" /> @randerbruno.eng
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
