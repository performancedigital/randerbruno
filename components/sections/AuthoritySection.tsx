import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { AUTHORITY, INSTAGRAM_LINKS } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export default function AuthoritySection() {
  return (
    <SectionWrapper glow="green" className="section-glow">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
        <AnimatedSection animation="fade-left" className="md:col-span-2">
          <div className="relative max-w-xs mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-brand-green/10 rounded-2xl blur-[40px] scale-90" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.06]">
              <Image
                src="/images/rander-authority.jpeg"
                alt="Engenheiro Rander Bruno"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card neon-border px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-bold text-brand-green">17+ ANOS NO MERCADO</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-right" className="md:col-span-3">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">Quem é</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-2">{AUTHORITY.name}</h2>
          <p className="text-brand-green font-semibold text-sm mb-4">{AUTHORITY.title}</p>
          
          <blockquote className="text-lg md:text-xl italic text-brand-white/80 border-l-2 border-brand-green/40 pl-4 mb-6">
            {AUTHORITY.quote}
          </blockquote>

          <p className="text-brand-gray text-sm leading-relaxed mb-6">{AUTHORITY.bio}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {AUTHORITY.credentials.map((cred, i) => (
              <span key={i} className="px-3 py-1.5 text-xs font-bold text-brand-green border border-brand-green/20 rounded-full bg-brand-green/5">
                {cred}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href={INSTAGRAM_LINKS.eng_rander} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-brand-gray hover:text-brand-green transition-colors text-xs font-semibold">
              <ExternalLink className="w-3.5 h-3.5" /> @eng.rander
            </a>
            <a href={INSTAGRAM_LINKS.randerbruno_eng} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-brand-gray hover:text-brand-green transition-colors text-xs font-semibold">
              <ExternalLink className="w-3.5 h-3.5" /> @randerbruno.eng
            </a>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
