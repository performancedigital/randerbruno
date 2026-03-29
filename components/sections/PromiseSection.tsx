import SectionWrapper from '@/components/ui/SectionWrapper';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { PROMISE_BULLETS } from '@/lib/constants';
import { CheckCircle } from 'lucide-react';

export default function PromiseSection() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
        O Que Você Vai <span className="text-gradient-gold">Descobrir</span> no Grupo
      </h2>
      <div className="max-w-2xl mx-auto space-y-5 mb-12">
        {PROMISE_BULLETS.map((bullet, i) => (
          <div key={i} className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
            <p className="text-lg text-brand-gray leading-relaxed">{bullet}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <WhatsAppButton text="QUERO DESCOBRIR AGORA" />
      </div>
    </SectionWrapper>
  );
}
