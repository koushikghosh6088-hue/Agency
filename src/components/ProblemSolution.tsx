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
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
    scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    setIsAutoScrolling(false);
  };

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;
    
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background HUD Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6 backdrop-blur-md">
              <Activity className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-500 font-bold">Deep System Scan // Protocol 0A</span>
            </div>
            <h2 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] font-heading font-black leading-[0.8] tracking-tighter uppercase">
              <span className="text-white">DIAGNOSING</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500 italic">FAILURE_POINTS</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="flex gap-4 mb-4">
             <button 
               onClick={() => scroll('left')}
               className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all hover:scale-110 active:scale-95 group"
             >
                <AlertTriangle className="w-5 h-5 text-white/40 group-hover:text-red-500 transition-colors rotate-[-90deg]" />
             </button>
             <button 
               onClick={() => scroll('right')}
               className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all hover:scale-110 active:scale-95 group"
             >
                <AlertTriangle className="w-5 h-5 text-white/40 group-hover:text-red-500 transition-colors rotate-[90deg]" />
             </button>
          </AnimatedSection>
        </div>

        {/* Cinematic Horizontal Slider */}
        <div className="relative group">
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-12 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {painPoints.map((point) => (
              <div 
                key={point.id}
                className="shrink-0 w-[85vw] md:w-[500px] snap-center"
              >
                <div className="glass-premium h-full rounded-[2.5rem] p-8 md:p-10 border-white/10 hover:border-red-500/40 group/card transition-all duration-700 relative overflow-hidden flex flex-col min-h-[480px]">
                  {/* Card Background Visuals */}
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover/card:opacity-30 transition-opacity">
                    <point.icon className="w-32 h-32 text-red-500" />
                  </div>
                  
                  {/* Header */}
                  <div className="relative z-10 mb-auto">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                        <point.icon className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-red-500/50 block font-bold">{point.id}</span>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{point.problem}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">Diagnostic_Data</span>
                        </div>
                        <p className="text-white/60 font-mono text-sm leading-relaxed">{point.details}</p>
                      </div>

                      <div className="px-6 py-2 border-l-2 border-red-500/30">
                         <span className="text-[10px] font-mono text-red-500/60 uppercase tracking-widest block mb-1">Impact_Metric</span>
                         <span className="text-xl font-black text-white tracking-tight">{point.metrics}</span>
                      </div>
                    </div>
                  </div>

                  {/* Solution - High Contrast Footer */}
                  <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
                     <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-500 font-mono text-[9px] uppercase tracking-widest mb-4 font-black">
                       Recommended_Action
                     </div>
                     <p className="text-lg md:text-xl font-heading font-black text-white leading-tight uppercase group-hover/card:text-red-500 transition-colors">
                       {point.solution}
                     </p>
                  </div>

                  {/* Hover scanline effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-[50%] w-full animate-scan" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
        </div>

        {/* System Scanner Visual Replacement - Lightweight & High Performance */}
        <AnimatedSection delay={0.4} className="mt-20 flex flex-col items-center">
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full font-mono">
               {[
                 { label: 'Neural_Throughput', val: '84.2 TB/S', status: 'Optimal' },
                 { label: 'System_Latency', val: '0.004 MS', status: 'Stable' },
                 { label: 'Breach_Risk', val: '0.00%', status: 'Secure' },
               ].map((stat) => (
                 <div key={stat.label} className="text-center p-6 border border-white/5 rounded-3xl group hover:border-red-500/30 transition-all">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-2">{stat.label}</div>
                    <div className="text-3xl font-black text-white mb-2">{stat.val}</div>
                    <div className="text-[9px] text-red-500 uppercase flex items-center justify-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                      {stat.status}
                    </div>
                 </div>
               ))}
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
