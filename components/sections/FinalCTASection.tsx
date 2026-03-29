import SectionWrapper from '@/components/ui/SectionWrapper';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { AlertTriangle } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <SectionWrapper dark className="text-center">
      <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
        Chega de Pagar Aluguel.<br />
        <span className="text-gradient-gold">Mude Sua Realidade Agora.</span>
      </h2>
      <p className="text-lg text-brand-gray mb-4 max-w-xl mx-auto">
        O grupo é gratuito. O conhecimento é real. As vagas são limitadas.
      </p>
      <p className="text-sm text-brand-gray/60 mb-8">
        100% gratuito &middot; Sem spam &middot; Saia quando quiser
      </p>
      <WhatsAppButton text="GARANTIR MINHA VAGA NO GRUPO" size="lg" />
      <div className="mt-8 flex items-center justify-center gap-2 text-yellow-400/80 text-sm">
        <AlertTriangle className="w-4 h-4" />
        <span>Vagas Limitadas — O grupo pode fechar a qualquer momento</span>
      </div>
    </SectionWrapper>
  );
}
