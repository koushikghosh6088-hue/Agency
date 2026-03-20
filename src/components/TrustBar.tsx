'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Server, Bot, Code2, Database, Lock, Layers } from 'lucide-react';

const techLogos = [
  { icon: Code2, label: 'Next.js' },
  { icon: Layers, label: 'React' },
  { icon: Database, label: 'Node.js' },
  { icon: Bot, label: 'OpenAI' },
  { icon: Shield, label: 'TypeScript' },
  { icon: Server, label: 'AWS' },
  { icon: Lock, label: 'Firebase' },
  { icon: Zap, label: 'Vercel' },
];

export default function TrustBar() {
  return (
    <section className="relative py-6 bg-black/80 border-t border-b border-white/5 overflow-hidden z-20 backdrop-blur-xl">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] gap-12 md:gap-16 items-center pr-12 md:pr-16 gpu-accelerated">
          {[...techLogos, ...techLogos].map((item, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0 opacity-40 hover:opacity-80 transition-opacity">
              <item.icon className="w-5 h-5 text-blue-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
