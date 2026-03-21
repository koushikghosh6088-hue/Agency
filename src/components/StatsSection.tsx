'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed', duration: 2 },
  { value: 98, suffix: '%', label: 'Client Satisfaction', duration: 2.5 },
  { value: 24, suffix: '/7', label: 'AI Uptime', duration: 1.5 },
  { value: 70, suffix: '%+', label: 'Cost Reduction', duration: 3 },
];

function StatCounter({ value, label, suffix, duration = 2 }: { value: number, label: string, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, isInView, duration]);

  return (
    <div ref={ref} className="text-center group p-6 glass-premium rounded-3xl border-white/5 hover:border-[#0066ff]/20 transition-all duration-500">
      <div className="relative inline-block mb-3">
        <div className="text-4xl md:text-5xl font-heading font-black text-white group-hover:text-[#0066ff] transition-colors flex items-baseline justify-center">
          <span>{count}</span>
          <span className="text-[#0066ff] text-2xl ml-1">{suffix}</span>
        </div>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">
        {label}
      </div>
      <div className="w-8 h-[2px] bg-[#0066ff]/20 mx-auto mt-4 group-hover:w-16 group-hover:bg-[#0066ff]/60 transition-all duration-500" />
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1550px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <StatCounter {...stat} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
