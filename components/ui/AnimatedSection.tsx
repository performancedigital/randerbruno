'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
}

export default function AnimatedSection({ children, className = '', animation = 'fade-up', delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animClass = {
    'fade-up': visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    'fade-left': visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    'fade-right': visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    'scale': visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
  }[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}