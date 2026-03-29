import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { PAIN_POINTS } from '@/lib/constants';

export default function PainPointsSection() {
  return (
    <SectionWrapper glow="purple" grid>
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black">
            ISSO É <span className="text-gradient-purple">VOCÊ</span>?
          </h2>
        </div>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-5">
        {PAIN_POINTS.map((point, i) => (
          <AnimatedSection key={i} delay={i * 150} animation="scale">
            <div className="glass-card-hover p-7 h-full">
              <span className="text-4xl mb-4 block">{point.emoji}</span>
              <h3 className="font-bold text-lg mb-2 text-brand-white">{point.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{point.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection className="text-center mt-10">
        <p className="text-brand-green font-bold text-lg">
          Se você se identificou com pelo menos um... <span className="text-brand-white">continue lendo.</span>
        </p>
      </AnimatedSection>
    </SectionWrapper>
  );
}