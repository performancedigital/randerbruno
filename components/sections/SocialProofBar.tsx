'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';
import { Calendar, Building2, TrendingUp, ArrowDownCircle } from 'lucide-react';

const icons = [Calendar, Building2, TrendingUp, ArrowDownCircle];

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
    <div ref={ref} className="relative section-glow bg-brand-dark-2/80 border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Icon className="w-5 h-5 text-brand-green/60 mx-auto mb-2" />
              <div className="text-2xl md:text-4xl font-display font-black text-brand-green neon-text">{stat.value}</div>
              <div className="text-[11px] md:text-xs text-brand-gray mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}