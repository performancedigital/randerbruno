import Image from 'next/image';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-4 pt-8 pb-16 overflow-hidden bg-grid">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-green" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-purple/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Copy */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-brand-green/5 border border-brand-green/20">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">Grupo Exclusivo &mdash; Vagas Abertas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 tracking-tight">
              <span className="block text-brand-white">CONSTRUA SEU</span>
              <span className="block text-gradient-green neon-text">PRIMEIRO IMÓVEL</span>
              <span className="block text-brand-white/60 text-2xl sm:text-3xl md:text-4xl mt-2">sem usar dinheiro próprio</span>
            </h1>

            <p className="text-base sm:text-lg text-brand-gray max-w-lg mx-auto md:mx-0 mb-4 leading-relaxed">
              O método que permite construir com até <strong className="text-brand-green">50% abaixo do mercado</strong> — validado em mais de <strong className="text-brand-white">200 projetos</strong> reais.
            </p>

            <p className="text-sm text-brand-gray/60 mb-8">
              Mesmo que você esteja no <strong className="text-brand-white/80">zero absoluto</strong>. Mesmo sem poupança. Mesmo sem fiador.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-8">
              <WhatsAppButton text="QUERO DESCOBRIR COMO" size="lg" />
              <a href="#diagnostico" className="btn-secondary px-6 py-4 text-sm">
                <ArrowDown className="w-4 h-4" />
                Diagnóstico Gratuito
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-brand-gray/50">
              <span>✓ 100% Gratuito</span>
              <span>✓ Sem Spam</span>
              <span>✓ Estratégia Real</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-brand-green/10 rounded-2xl blur-[60px] scale-90" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/rander-hero.jpeg"
                  alt="Engenheiro Rander Bruno"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
              {/* Floating credential */}
              <div className="absolute -bottom-4 -left-4 glass-card neon-border px-4 py-2.5 animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display font-black text-brand-green">200+</span>
                  <span className="text-[10px] text-brand-gray leading-tight">Projetos<br/>Entregues</span>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 glass-card neon-border px-3 py-2 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-green">ENGENHEIRO ATIVO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
