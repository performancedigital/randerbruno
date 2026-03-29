import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-8 pb-16 overflow-hidden bg-grid">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-green" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-purple/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-brand-green/5 border border-brand-green/20">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">Grupo Exclusivo &mdash; Vagas Abertas</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] mb-6 tracking-tight">
          <span className="block text-brand-white">CONSTRUA SEU</span>
          <span className="block text-gradient-green neon-text">PRIMEIRO IMÓVEL</span>
          <span className="block text-brand-white/60 text-3xl sm:text-4xl md:text-5xl mt-2">sem usar dinheiro próprio</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-4 leading-relaxed">
          O método que permite construir com até <strong className="text-brand-green">50% abaixo do mercado</strong> — validado em mais de <strong className="text-brand-white">200 projetos</strong> reais.
        </p>

        <p className="text-sm text-brand-gray/60 mb-8">
          Mesmo que você esteja no <strong className="text-brand-white/80">zero absoluto</strong>. Mesmo sem poupança. Mesmo sem fiador.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <WhatsAppButton text="QUERO DESCOBRIR COMO" size="lg" />
          <a href="#diagnostico" className="btn-secondary px-6 py-4 text-sm">
            <ArrowDown className="w-4 h-4" />
            Fazer Diagnóstico Gratuito
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-gray/50">
          <span>✓ 100% Gratuito</span>
          <span>✓ Sem Spam</span>
          <span>✓ Saia Quando Quiser</span>
          <span>✓ Estratégia Real</span>
        </div>
      </div>
    </section>
  );
}