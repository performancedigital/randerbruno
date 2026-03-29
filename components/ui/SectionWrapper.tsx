interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({ children, id, className = '', dark = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-4 py-16 md:py-24 ${dark ? 'bg-brand-navy' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
