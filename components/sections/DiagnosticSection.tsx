'use client';

import { useState } from 'react';
import { INCOME_RANGES, WA_GROUP_LINK } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DiagnosticSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SectionWrapper id="diagnostico" glow="green" className="section-glow">
      <AnimatedSection>
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">Diagnóstico Gratuito</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">
            QUAL SUA RENDA <span className="text-gradient-green">MENSAL BRUTA</span>?
          </h2>
          <p className="text-brand-gray max-w-lg mx-auto text-sm">
            Descubra em segundos qual a melhor estratégia de financiamento para o seu momento. Selecione sua faixa:
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-lg mx-auto space-y-3 mb-8">
        {INCOME_RANGES.map((range, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <button
              onClick={() => setSelected(i)}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-xl border transition-all duration-300 text-left group
                ${selected === i 
                  ? 'border-brand-green bg-brand-green/10 shadow-[0_0_20px_rgba(0,255,136,0.1)]' 
                  : 'border-white/[0.06] bg-white/[0.02] hover:border-brand-green/30 hover:bg-white/[0.04]'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                  ${selected === i ? 'border-brand-green bg-brand-green' : 'border-brand-gray/30'}`}>
                  {selected === i && <CheckCircle2 className="w-4 h-4 text-brand-dark" />}
                </div>
                <span className="font-semibold text-sm">{range.label}</span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full
                ${selected === i ? 'bg-brand-green/20 text-brand-green' : 'bg-white/5 text-brand-gray/60'}`}>
                {range.tag}
              </span>
            </button>
          </AnimatedSection>
        ))}
      </div>

      {selected !== null && (
        <AnimatedSection animation="scale" className="text-center">
          <div className="glass-card neon-border p-6 max-w-lg mx-auto">
            <p className="text-brand-green font-bold text-lg mb-2">
              Ótimo! Existe uma estratégia perfeita para você.
            </p>
            <p className="text-brand-gray text-sm mb-5">
              No grupo, vou mostrar exatamente como pessoas na sua faixa de renda estão construindo o primeiro imóvel — sem entrada.
            </p>
            <a
              href={WA_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-sm"
            >
              VER MINHA ESTRATÉGIA
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      )}
    </SectionWrapper>
  );
}