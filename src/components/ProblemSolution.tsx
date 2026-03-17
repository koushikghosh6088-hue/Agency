'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Activity, Globe, Smartphone, Bot, BarChart3, AlertTriangle, Users, Cpu, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCard = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % painPoints.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + painPoints.length) % painPoints.length);
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-white/5 perspective-container">
      {/* Immersive HUD Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Field Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 blur-[150px]" />
        
        {/* Tactical Grid */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-red-500/10 to-transparent opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Rotating technical lines */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full rotate-45 opacity-20" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-red-500/5 rounded-full -rotate-12" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20 md:mb-32">
          <AnimatedSection className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-red-500/30 bg-red-500/5 mb-8 backdrop-blur-3xl group cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-red-500 font-black">Scanning_Protocol_Active</span>
            </div>
            
            <h2 className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-heading font-black leading-[0.75] tracking-tighter uppercase mb-2">
              <span className="text-white block">REVEALING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-400 italic">SYSTEM_FLOOD</span>
            </h2>
            <div className="flex items-center gap-4 font-mono text-red-500/40 text-[10px] tracking-[0.4em] uppercase font-bold">
               <div className="w-12 h-px bg-red-500/20" />
               Critical Breach Analysis Stage 04
            </div>
          </AnimatedSection>

          {/* Nav Controls */}
          <div className="flex gap-4 pb-4">
            <div className="flex flex-col items-end gap-2 mr-4 hidden md:flex">
               <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Manual_Override</span>
               <div className="flex items-center gap-1.5">
                  {painPoints.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-8 bg-red-500' : 'w-2 bg-white/10'}`} 
                    />
                  ))}
               </div>
            </div>
            <button 
              onClick={prevCard}
              className="group w-16 h-16 md:w-20 md:h-20 rounded-3xl border border-white/5 bg-white/5 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/30 transition-all active:scale-90"
            >
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-white/30 group-hover:text-red-500 transition-colors -rotate-90" />
            </button>
            <button 
              onClick={nextCard}
              className="group w-16 h-16 md:w-20 md:h-20 rounded-3xl border border-white/5 bg-white/5 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/30 transition-all active:scale-90"
            >
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-white/30 group-hover:text-red-500 transition-colors rotate-90" />
            </button>
          </div>
        </div>

        {/* 3D Perspective Carousel Stage */}
        <div className="relative h-[600px] md:h-[750px] flex items-center justify-center py-12">
            <AnimatePresence mode="popLayout" custom={direction}>
                <div className="relative w-full h-full flex items-center justify-center preserve-3d">
                    {painPoints.map((point, index) => {
                        const isCenter = index === activeIndex;
                        const isPrev = index === (activeIndex - 1 + painPoints.length) % painPoints.length;
                        const isNext = index === (activeIndex + 1) % painPoints.length;
                        
                        if (!isCenter && !isPrev && !isNext) return null;

                        let x = 0;
                        let z = 0;
                        let rotateY = 0;
                        let opacity = 0;
                        let scale = 0.8;

                        if (isCenter) {
                            x = 0; z = 0; rotateY = 0; opacity = 1; scale = 1;
                        } else if (isPrev) {
                            x = -450; z = -200; rotateY = 35; opacity = 0.4;
                        } else if (isNext) {
                            x = 450; z = -200; rotateY = -35; opacity = 0.4;
                        }

                        return (
                            <motion.div
                                key={point.id}
                                className="absolute w-[90vw] md:w-[600px] h-[500px] md:h-[600px] z-10"
                                initial={false}
                                animate={{
                                    x, z, rotateY, opacity, scale,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className={`group/card relative h-full flex flex-col p-10 md:p-14 rounded-[4rem] border transition-all duration-700 ${isCenter ? 'bg-[#0a0a0a] border-red-500/40 shadow-[0_0_120px_rgba(239,68,68,0.15)]' : 'bg-black/80 border-white/5'}`}>
                                    
                                    {/* Holographic Border Beam (Active Only) */}
                                    {isCenter && (
                                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[4rem]">
                                            <div className="absolute inset-[-100%] animate-border-beam" />
                                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                                        </div>
                                    )}

                                    {/* HUD Decorative Elements */}
                                    <div className="absolute top-10 right-10 flex flex-col items-end gap-1 opacity-20">
                                        <div className="w-12 h-px bg-red-500" />
                                        <div className="w-6 h-px bg-red-500" />
                                        <div className="w-18 h-px bg-red-500" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-16">
                                            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center transition-all duration-700 ${isCenter ? 'bg-red-600/10 border border-red-500/30 scale-110 shadow-[0_0_40px_rgba(239,68,68,0.2)]' : 'bg-white/5 border border-white/10'}`}>
                                                <point.icon className={`w-10 h-10 md:w-12 md:h-12 transition-colors duration-700 ${isCenter ? 'text-red-500' : 'text-white/20'}`} />
                                            </div>
                                            <div className="text-right flex flex-col items-end">
                                                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-red-500/40 block mb-2">Diagnostic_Report</span>
                                                <div className="px-4 py-1.5 rounded-full border border-red-500/40 text-red-500 font-mono text-[10px] uppercase tracking-[0.3em] font-black italic">
                                                    Level_Critical
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-12">
                                            <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/20 block mb-4">Node_ID // {point.id}</span>
                                            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter leading-[0.85] transition-colors duration-700 ${isCenter ? 'text-white' : 'text-white/20'}`}>
                                                {point.problem}
                                            </h3>
                                            <p className={`mt-8 font-mono text-sm md:text-base leading-relaxed max-w-[90%] transition-opacity duration-700 ${isCenter ? 'text-white/50' : 'opacity-0'}`}>
                                                {point.details}
                                            </p>
                                        </div>

                                        <div className={`mt-auto space-y-8 transition-all duration-700 transform ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex items-center justify-between">
                                                <div>
                                                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] block mb-2">Failure_Impact</span>
                                                    <span className="text-2xl md:text-3xl font-black text-white italic tracking-tighter">{point.metrics}</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map((s) => (
                                                        <div key={s} className={`w-1.5 h-8 rounded-full ${s <= 4 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-white/10'}`} />
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="relative group/btn overflow-hidden rounded-[2rem] bg-red-600 p-px">
                                                <div className="relative bg-black group-hover/btn:bg-red-600 transition-colors duration-500 rounded-[2rem] px-8 py-5 md:py-7 text-center">
                                                    <span className="text-[10px] font-mono text-red-500 group-hover/btn:text-white uppercase tracking-[0.3em] block mb-2 font-black">Initiate_Resolution</span>
                                                    <span className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tight">{point.solution}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scanning Motion Grid Overlay */}
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.05] group-hover/card:opacity-[0.15] transition-opacity">
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_4px] animate-scan" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </AnimatePresence>
        </div>

        {/* Global HUD Stats Footer */}
        <div className="mt-20 md:mt-32 border-t border-white/5 pt-16 grid grid-cols-2 md:grid-cols-4 gap-12">
           {[
             { label: 'Core_Throughput', val: '984.2 GB/S', icon: Activity },
             { label: 'Threat_Detection', val: 'Active', icon: Lock },
             { label: 'Leads_Intercepted', val: '2.4M+', icon: Users },
             { label: 'System_Latency', val: '0.002ms', icon: Cpu },
           ].map((stat) => (
             <div key={stat.label} className="group relative">
                <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-red-500/50 to-white/10 group-hover:via-red-500 transition-all duration-700" />
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mb-4 flex items-center gap-2">
                   <stat.icon className="w-3 h-3 text-red-500/40" />
                   {stat.label}
                </div>
                <div className="text-3xl md:text-5xl font-black text-white tracking-tighter italic group-hover:text-red-500 transition-colors duration-500">{stat.val}</div>
             </div>
           ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes border-beam {
          0% {
            top: 0%;
            left: -100%;
            transform: rotate(-45deg);
          }
          50% {
            top: 100%;
            left: 0%;
            transform: rotate(-45deg);
          }
          100% {
            top: 0%;
            left: -100%;
            transform: rotate(-45deg);
          }
        }
        .animate-border-beam {
          background: linear-gradient(
            to right,
            transparent,
            rgba(239, 68, 68, 0.5),
            transparent
          );
          animation: border-beam 4s linear infinite;
        }
        @keyframes scan {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
