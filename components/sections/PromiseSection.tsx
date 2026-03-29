import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { PROMISE_BULLETS } from '@/lib/constants';
import { Zap } from 'lucide-react';

export default function PromiseSection() {
  return (
    <SectionWrapper grid glow="purple">
      <AnimatedSection>
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">Dentro do Grupo</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3">
            O QUE VOCÊ VAI <span className="text-gradient-mixed">DESCOBRIR</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="max-w-2xl mx-auto space-y-4 mb-12">
        {PROMISE_BULLETS.map((bullet, i) => (
          <AnimatedSection key={i} delay={i * 100} animation="fade-left">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-brand-green/20 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap className="w-4 h-4 text-brand-green" />
              </div>
              <p className="text-sm text-brand-gray leading-relaxed">
                {bullet.text.split(bullet.highlight).map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && <strong className="text-brand-white">{bullet.highlight}</strong>}
                  </span>
                ))}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <WhatsAppButton text="QUERO ACESSO AO GRUPO" size="lg" />
      </AnimatedSection>
    </SectionWrapper>
  );
}