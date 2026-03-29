interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  glow?: 'green' | 'purple' | 'none';
  grid?: boolean;
}

export default function SectionWrapper({ children, id, className = '', glow = 'none', grid = false }: SectionWrapperProps) {
  const glowClass = glow === 'green' ? 'bg-radial-green' : glow === 'purple' ? 'bg-radial-purple' : '';
  return (
    <section
      id={id}
      className={`relative px-4 py-16 md:py-24 overflow-hidden ${glowClass} ${grid ? 'bg-grid' : ''} ${className}`}
    >
      <div className="relative max-w-6xl mx-auto">{children}</div>
    </section>
  );
}