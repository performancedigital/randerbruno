import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function HeroSection() {
  return (
    <SectionWrapper className="pt-20 md:pt-32 pb-8 md:pb-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-brand-gold border border-brand-gold/30 rounded-full bg-brand-gold/5">
            Engenheiro Civil | 17+ Anos de Experiência
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Descubra Como Conquistar Seu Primeiro Imóvel{' '}
            <span className="text-gradient-gold">SEM Usar Dinheiro Próprio</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray mb-8 leading-relaxed">
            Engenheiro com 17+ anos revela o método que permite construir com até{' '}
            <strong className="text-white">50% abaixo do mercado</strong> — mesmo saindo do zero absoluto
          </p>
          <WhatsAppButton size="lg" />
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-80 md:w-80 md:h-[28rem] rounded-2xl bg-brand-navy border border-white/10 flex items-center justify-center overflow-hidden">
            <span className="text-6xl font-display font-black text-brand-gold/30">RB</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
