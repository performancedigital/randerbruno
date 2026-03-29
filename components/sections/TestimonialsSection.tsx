import SectionWrapper from '@/components/ui/SectionWrapper';

export default function TestimonialsSection() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
        O Que Dizem <span className="text-gradient-gold">Nossos Alunos</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-6 relative">
            <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold border border-brand-gold/20 rounded bg-brand-gold/5">
              Em breve
            </span>
            <div className="w-12 h-12 rounded-full bg-brand-navy mb-4" />
            <div className="h-3 w-3/4 bg-white/5 rounded mb-2" />
            <div className="h-3 w-1/2 bg-white/5 rounded" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
