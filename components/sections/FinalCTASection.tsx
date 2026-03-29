import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function FinalCTASection() {
  return (
    <SectionWrapper className="section-glow bg-brand-dark-2" glow="green">
      <AnimatedSection className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-2">
          PARE DE SONHAR.
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6">
          <span className="text-gradient-green neon-text">COMECE A CONSTRUIR.</span>
        </h2>
        <p className="text-brand-gray text-sm md:text-base max-w-xl mx-auto mb-3">
          O grupo é gratuito. A estratégia é real. E as vagas são limitadas.
        </p>
        <p className="text-brand-gray/50 text-xs mb-8">
          100% gratuito · Sem spam · Saia quando quiser · Estratégia validada em 200+ projetos
        </p>
        <WhatsAppButton text="GARANTIR MINHA VAGA AGORA" size="lg" />
      </AnimatedSection>
    </SectionWrapper>
  );
}