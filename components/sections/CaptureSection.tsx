import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { WA_GROUP_LINK } from '@/lib/constants';
import { Shield, MessageCircle, ArrowRight } from 'lucide-react';

export default function CaptureSection() {
  return (
    <SectionWrapper glow="purple" grid>
      <AnimatedSection>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Orientação Completa</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">
            DESCUBRA A ESTRATÉGIA<br />
            <span className="text-gradient-green">PARA SUA RENDA</span>
          </h2>
          <p className="text-brand-gray text-sm mb-2">
            Não existe &ldquo;falta de dinheiro&rdquo;, existe <strong className="text-brand-white">falta de método</strong>. Dezenas de pessoas na sua mesma situação já estão construindo.
          </p>
          <p className="text-brand-gray/60 text-xs mb-8">
            Entre no grupo e receba orientação personalizada baseada na sua realidade.
          </p>

          <AnimatedSection animation="scale" delay={200}>
            <div className="glass-card neon-border p-8 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-brand-green" />
                <span className="text-sm font-bold text-brand-green">ACESSO GRATUITO</span>
              </div>
              <p className="text-brand-gray text-sm mb-6">
                Clique abaixo, entre no grupo e comece a descobrir como construir o seu patrimônio — do zero.
              </p>
              <a
                href={WA_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center px-8 py-5 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                QUERO ENTRAR NO MERCADO
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[10px] text-brand-gray/40 mt-4">
                Ao entrar, você concorda em receber conteúdos sobre construção e financiamento.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}