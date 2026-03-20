'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Bot, Layers, Check, X, Shield, Cpu } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const advantagePoints = [
  { 
    label: "Design", 
    vedastra: "Premium / High-Fidelity", 
    others: "Generic / Template-based",
    icon: Layers,
    color: "text-cyan-400"
  },
  { 
    label: "Code", 
    vedastra: "100% Bespoke / Scalable", 
    others: "Bloated / Rigid / Plugin-heavy",
    icon: Cpu,
    color: "text-[#C1FF00]"
  },
  { 
    label: "Strategy", 
    vedastra: "Problem-Solver First", 
    others: "Order-Taker Only",
    icon: Target,
    color: "text-purple-400"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden z-10 border-t border-white/5">
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-16 md:mb-24">
          <AnimatedSection className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1FF00]/10 border border-[#C1FF00]/20 mb-6">
              <Shield className="w-3 h-3 text-[#C1FF00]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C1FF00] font-bold">The Vedastra Advantage</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-heading font-black leading-none tracking-tighter uppercase">
              NOT JUST BETTER.<br/>
              <span className="gradient-text italic opacity-90">GENUINELY DIFFERENT.</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection className="hidden lg:block">
            <p className="font-mono text-sm text-white/30 uppercase tracking-[0.1em] max-w-xs text-right">
              We eliminate the waste of traditional agency cycles.
            </p>
          </AnimatedSection>
        </div>

        {/* Graphical Superiority Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: The "Others" (Smaller, Dimmer) */}
          <div className="lg:col-span-4 space-y-4 opacity-40">
            <div className="flex items-center gap-3 mb-6 px-4">
               <X className="w-5 h-5 text-red-500" />
               <span className="font-heading font-bold text-lg uppercase tracking-tight text-white/60 text-red-500/80">Standard Agency</span>
            </div>
            {advantagePoints.map((point, i) => (
              <div key={i} className="glass-panel p-5 rounded-2xl border-white/5 bg-white/[0.01]">
                <div className="text-[10px] font-mono text-white/30 uppercase mb-2">{point.label}</div>
                <div className="text-sm font-medium text-white/60 line-through">{point.others}</div>
              </div>
            ))}
          </div>

          {/* Center: Graphical Connection */}
          <div className="hidden lg:flex lg:col-span-1 h-full items-center justify-center">
             <div className="w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                   <div className="w-1 h-1 rounded-full bg-blue-500 animate-ping" />
                </div>
             </div>
          </div>

          {/* Right Side: Vedastra (Elite, Vibrant, Detailed) */}
          <div className="lg:col-span-7 space-y-6">
             <div className="flex items-center gap-3 mb-8 px-4">
                <Check className="w-6 h-6 text-[#C1FF00]" />
                <span className="font-heading font-black text-2xl uppercase tracking-tighter text-[#C1FF00] drop-shadow-[0_0_10px_rgba(193,255,0,0.3)]">Vedastra AI Labs</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantagePoints.map((point, i) => (
                  <AnimatedSection key={i} delay={i * 0.1} className={i === 2 ? "md:col-span-2" : ""}>
                    <div className="group relative glass-panel-premium p-6 md:p-8 rounded-[2rem] border-white/10 hover:border-[#C1FF00]/30 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]">
                      <div className={`absolute top-6 right-6 ${point.color} opacity-20 group-hover:opacity-100 transition-all duration-500`}>
                        <point.icon className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="font-mono text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.3em] mb-3">{point.label} EXCELLENCE</div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#C1FF00] transition-colors">
                          {point.vedastra}
                        </h3>
                        <p className="text-white/40 font-mono text-[10px] md:text-xs leading-relaxed max-w-sm">
                          Engineered for maximum business impact and zero technical debt.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
             </div>
          </div>
        </div>

        {/* Bottom Graphic Metric Bar */}
        <AnimatedSection className="mt-20 md:mt-32">
           <div className="glass-panel p-6 md:p-8 rounded-[2.5rem] border-white/5 flex flex-wrap items-center justify-around gap-8 md:gap-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
              {[
                { val: '2X', label: 'Faster Load', icon: Zap },
                { val: '0', label: 'Templates Used', icon: Bot },
                { val: '100%', label: 'Ownership', icon: Shield },
                { val: 'Infinity', label: 'Scalability', icon: Layers },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#C1FF00]/10 transition-colors">
                     <m.icon className="w-5 h-5 text-white/40 group-hover:text-[#C1FF00]" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-heading font-black text-white">{m.val}</div>
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{m.label}</div>
                  </div>
                </div>
              ))}
           </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
