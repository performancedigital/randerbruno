import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { RESULTS } from '@/lib/constants';
import { TrendingUp } from 'lucide-react';

export default function ResultsSection() {
  return (
    <SectionWrapper glow="green" className="section-glow">
      <AnimatedSection>
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Resultados Reais</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3">
            CONSTRUÇÕES <span className="text-gradient-green">VS</span> TRADICIONAIS
          </h2>
          <p className="text-brand-gray mt-3 text-sm max-w-xl mx-auto">
            Veja o que muda quando você usa a estratégia certa — números reais de projetos executados.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {RESULTS.map((result, i) => (
          <AnimatedSection key={i} delay={i * 150} animation="fade-up">
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-bold rounded-bl-xl">
                {result.timeframe}
              </div>
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-wider text-red-400/70 font-bold">Antes</span>
                <p className="text-sm text-brand-gray line-through decoration-red-400/30 mt-1">{result.before}</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-gradient-to-r from-red-400/20 via-brand-green/40 to-brand-green/20" />
                <TrendingUp className="w-4 h-4 text-brand-green" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-brand-green font-bold">Depois</span>
                <p className="text-sm text-brand-white font-semibold mt-1">{result.after}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}