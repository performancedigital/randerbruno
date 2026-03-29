import SectionWrapper from '@/components/ui/SectionWrapper';
import { PAIN_POINTS } from '@/lib/constants';

export default function PainPointsSection() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
        Você Se <span className="text-gradient-gold">Identifica</span>?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {PAIN_POINTS.map((point, i) => (
          <div key={i} className="glass-card gold-border-left p-6">
            <span className="text-3xl mb-3 block">{point.emoji}</span>
            <p className="text-brand-gray leading-relaxed italic">&ldquo;{point.text}&rdquo;</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
