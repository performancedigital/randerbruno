'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';

export default function SocialProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-brand-navy/80 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-3 gap-4 text-center">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="text-3xl md:text-5xl font-display font-black text-brand-gold">{stat.value}</div>
            <div className="text-xs md:text-sm text-brand-gray mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
