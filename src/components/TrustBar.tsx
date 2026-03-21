'use client';

import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Bot, MessageSquare, Cog, Database, 
  Shield, Zap, Cpu, Code2, Cloud, Terminal 
} from 'lucide-react';

const techStack = [
  { name: 'Next.js', icon: Globe },
  { name: 'React', icon: Code2 },
  { name: 'React Native', icon: Smartphone },
  { name: 'Node.js', icon: Terminal },
  { name: 'Python', icon: Cpu },
  { name: 'TypeScript', icon: Code2 },
  { name: 'OpenAI', icon: Bot },
  { name: 'LangChain', icon: MessageSquare },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Cog },
  { name: 'Stripe', icon: Shield },
  { name: 'Framer Motion', icon: Zap },
];

export default function TrustBar() {
  return (
    <section className="relative py-8 bg-black/60 backdrop-blur-xl border-y border-white/5 overflow-hidden z-20 group">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-32 bg-[#0066ff]/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-32 bg-[#0066ff]/10 blur-[80px] rounded-full pointer-events-none" />
      
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent animate-shimmer-swipe" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066ff]/20 to-transparent" />

      <div className="max-w-[1550px] mx-auto px-6 mb-4 flex items-center justify-center sm:justify-start gap-3">
        <div className="w-1 h-4 bg-[#0066ff] rounded-full" />
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40 font-black">
          Global_Technology_Stack // Protocol_Active
        </span>
      </div>

      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] items-center gap-10 sm:gap-14 py-4">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div 
              key={i} 
              className="group/item flex items-center gap-4 shrink-0 px-6 py-3 glass-premium border-white/5 hover:border-[#0066ff]/30 hover:bg-[#0066ff]/5 transition-all duration-500 rounded-2xl relative overflow-hidden"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-[#0066ff]/0 group-hover/item:bg-[#0066ff]/[0.02] transition-colors" />
              
              <tech.icon className="w-5 h-5 text-white/30 group-hover/item:text-[#0066ff] transition-all duration-500 group-hover/item:scale-110" />
              <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-[0.2em] text-white/30 group-hover/item:text-white transition-colors duration-500">
                {tech.name}
              </span>
              
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066ff] group-hover/item:w-full transition-all duration-500 shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes shimmer-swipe {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-swipe {
          animation: shimmer-swipe 4s infinite linear;
        }
      `}</style>
    </section>
  );
}
