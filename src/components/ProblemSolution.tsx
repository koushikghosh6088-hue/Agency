'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Activity, Globe, Smartphone, Bot, BarChart3, AlertTriangle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const painPoints = [
  {
    id: "SYS-01: WEB",
    problem: "Invisible or Outdated Web Presence",
    details: "You either don't have a website, or your current one is slow, outdated, and actively bleeding potential customers.",
    solution: "We build sub-400ms High-Fidelity Conversion Engines. Dominate your niche with a modern, ultra-fast web architecture.",
    icon: Globe,
    metrics: "40% Visitor Bounce Rate",
    color: "blue"
  },
  {
    id: "SYS-02: MOBILE",
    problem: "Zero Mobile Strategy",
    details: "In a mobile-first world, lacking a native app means you are losing daily engagement and retention to competitors.",
    solution: "Deploy Seamless Omnichannel Native Apps. Keep your brand in your customers' pockets 24/7.",
    icon: Smartphone,
    metrics: "Lost Daily Active Users",
    color: "purple"
  },
  {
    id: "SYS-03: AI",
    problem: "Leads Going Cold",
    details: "Human support is too slow. Leads inquire after hours and go cold before your team can ever respond.",
    solution: "Initialize 24/7 Autonomous Neural Agents. Intercept, qualify, and book leads instantly, at any hour.",
    icon: Bot,
    metrics: "72h Avg. Response Delay",
    color: "emerald"
  },
  {
    id: "SYS-04: GROWTH",
    problem: "Burning Ad Spend",
    details: "Pouring money into generic marketing campaigns that generate clicks but fail to deliver actual ROI.",
    solution: "Implement Algorithmic Growth Loops. Data-driven targeting that puts your brand exactly where it needs to be.",
    icon: BarChart3,
    metrics: "Declining ROAS",
    color: "amber"
  }
];

export default function ProblemSolution() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Triple the items for seamless infinite scroll
  const extendedPoints = [...painPoints, ...painPoints, ...painPoints];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollerRef.current) return;
    const scrollAmount = 524; // Card width + gap
    const currentScroll = scrollerRef.current.scrollLeft;
    const targetScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
    
    scrollerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    // Briefly pause auto-scroll on manual interaction
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Cinematic HUD Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        {/* Fine grid lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="px-6 mb-20 flex flex-col md:flex-row items-end justify-between gap-10">
          <AnimatedSection className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-500/30 bg-red-500/5 mb-8 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-red-500/90 font-bold">System Diagnostics // Node_Alpha</span>
            </div>
            <h2 className="text-[4rem] md:text-[6.5rem] lg:text-[8.5rem] font-heading font-black leading-[0.75] tracking-tighter uppercase">
              <span className="text-white block">REVEALING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-400 italic">SYSTEM_FLOOD</span>
            </h2>
          </AnimatedSection>

          <div className="flex gap-4 pb-4">
            <button 
              onClick={() => scroll('left')}
              className="group w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 hover:bg-red-500/10 hover:border-red-500/40 transition-all active:scale-95"
            >
              <AlertTriangle className="w-6 h-6 text-white/50 group-hover:text-red-500 transition-colors -rotate-90" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 hover:bg-red-500/10 hover:border-red-500/40 transition-all active:scale-95"
            >
              <AlertTriangle className="w-6 h-6 text-white/50 group-hover:text-red-500 transition-colors rotate-90" />
            </button>
          </div>
        </div>

        <div 
          className="relative py-12 overflow-hidden mask-fade-horizontal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollerRef}
            className={`flex gap-6 animate-marquee-left ${isPaused ? 'pause-animation' : ''}`}
            style={{ width: 'fit-content' }}
          >
            {extendedPoints.map((point, idx) => (
              <div 
                key={`${point.id}-${idx}`}
                className="shrink-0 w-[85vw] md:w-[500px]"
              >
                <div className="group/card relative h-full flex flex-col p-8 md:p-12 rounded-[3rem] bg-[#080808] border border-white/5 overflow-hidden transition-all duration-700 hover:border-red-500/30 hover:shadow-[0_0_100px_rgba(239,68,68,0.1)]">
                  {/* Obsidian Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  
                  {/* Border Beam Animation (on hover) */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none overflow-hidden">
                    <div className="absolute inset-[-100%] animate-border-beam" />
                    <div className="absolute inset-0 border border-red-500/20 rounded-[3rem]" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600/20 to-orange-600/10 border border-red-500/30 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500">
                        <point.icon className="w-8 h-8 text-red-500" />
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-red-500/40 block mb-1">Status_Check</span>
                        <span className="px-3 py-1 rounded-full border border-red-500/40 text-red-500 font-mono text-[9px] uppercase tracking-widest font-bold">Critical</span>
                      </div>
                    </div>

                    {/* Problem Section */}
                    <div className="mb-10 min-h-[140px]">
                      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-3">{point.id}</span>
                      <h3 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter leading-[0.9] group-hover/card:text-red-500 transition-colors duration-500">
                        {point.problem}
                      </h3>
                      <p className="mt-6 text-white/50 font-mono text-sm leading-relaxed max-w-[90%]">
                        {point.details}
                      </p>
                    </div>

                    {/* Stats HUD Block */}
                    <div className="mt-auto p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl group-hover/card:bg-red-500/[0.03] transition-colors">
                       <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Diagnostic_Metric</span>
                          <span className="text-red-500 font-mono text-xs font-bold leading-none">{point.metrics}</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-red-600 w-2/3 animate-pulse" />
                       </div>
                    </div>

                    {/* Solution Reveal */}
                    <div className="mt-10 overflow-hidden">
                       <div className="flex items-center gap-3 mb-4">
                          <div className="h-px flex-1 bg-red-500/20" />
                          <span className="text-[9px] font-mono text-red-500/60 uppercase tracking-[0.3em] font-black">Resolution_Protocol</span>
                          <div className="h-px flex-1 bg-red-500/20" />
                       </div>
                       <p className="text-lg md:text-xl font-heading font-black text-white italic uppercase tracking-tight text-center leading-tight">
                         {point.solution}
                       </p>
                    </div>
                  </div>

                  {/* Top-Right Decorative Scan Lines */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-red-500/10 rounded-full group-hover/card:scale-150 transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global System Stats HUD */}
        <div className="mt-24 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: 'Network_Integrity', val: '99.99%', color: 'text-red-500' },
             { label: 'Data_Encryption', val: '256-Bit', color: 'text-white' },
             { label: 'Active_Nodes', val: '4,281', color: 'text-white' },
             { label: 'Threat_Level', val: 'Zero', color: 'text-red-500' },
           ].map((stat) => (
             <div key={stat.label} className="border-l-2 border-white/10 pl-6 group hover:border-red-500 transition-colors">
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mb-2">{stat.label}</div>
                <div className={`text-3xl font-black italic tracking-tighter ${stat.color}`}>{stat.val}</div>
             </div>
           ))}
        </div>
      </div>

      <style jsx>{`
        .mask-fade-horizontal {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
