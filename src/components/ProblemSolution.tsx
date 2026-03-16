'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Activity, Globe, Smartphone, Bot, BarChart3, ChevronRight, AlertTriangle } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import AnimatedSection from './AnimatedSection';
import SystemScanner from './SystemScanner';

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
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate index based on scroll progress
  // Optimized for 250vh height
  const scrollIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 2, 3, 3]
  );

  useEffect(() => {
    return scrollIndex.onChange((v) => {
      const index = Math.min(Math.floor(v), painPoints.length - 1);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    });
  }, [scrollIndex, activeIndex]);

  return (
    <section ref={containerRef} className="relative py-12 md:py-24 bg-black overflow-hidden border-t border-white/5 min-h-[600vh]">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black to-transparent pointer-events-none z-10" />
      
      <div className="max-w-[1550px] mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c1ff00]/20 bg-[#c1ff00]/10 mb-8 backdrop-blur-md animate-pulse">
              <Activity className="w-4 h-4 text-[#c1ff00]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c1ff00] font-bold">Deep System Scan</span>
           </div>
           
           <h2 className="text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6">
              DIAGNOSING <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c1ff00] to-emerald-500 italic">YOUR BUSINESS</span>
           </h2>
           <p className="font-mono text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed uppercase tracking-wider mb-8">
              Scroll through the automated diagnostic sequence to reveal critical failure points and their solutions.
           </p>
           <div className="flex flex-col items-center gap-2 text-[#c1ff00]/40 font-mono text-[10px] tracking-widest uppercase">
              <span>Initializing Scan Sequence</span>
              <motion.div 
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-px h-16 bg-[#c1ff00]" 
              />
           </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Sticky 3D Diagnostic Environment */}
          <div className="lg:col-span-12 h-screen sticky top-0 flex flex-col lg:flex-row items-center justify-center gap-12 py-10 pointer-events-none">
            
            {/* STAGE HUD */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 flex flex-col items-center lg:items-start gap-4 z-30 font-mono">
               <div className="text-[10px] text-[#c1ff00]/60 uppercase tracking-[0.5em] mb-2">Sequence_Progress</div>
               <div className="flex gap-2">
                  {painPoints.map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        backgroundColor: i === activeIndex ? "#c1ff00" : "rgba(255,255,255,0.1)",
                        height: i === activeIndex ? 30 : 6
                      }}
                      className="w-1 rounded-full transition-all duration-500"
                    />
                  ))}
               </div>
               <div className="text-2xl font-black text-white mt-2">
                 0{activeIndex + 1}<span className="text-[#c1ff00]/40 text-sm"> / 04</span>
               </div>
            </div>

            {/* SYSTEM STATUS BAR */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm z-30 px-6">
               <div className="bg-black/80 backdrop-blur-xl border border-[#c1ff00]/30 rounded-full p-2 flex items-center gap-4">
                  <div className="flex-1 h-1 bg-[#c1ff00]/10 rounded-full overflow-hidden">
                     <motion.div 
                        style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        className="h-full bg-[#c1ff00] shadow-[0_0_10px_#c1ff00]"
                     />
                  </div>
                  <div className="font-mono text-[9px] text-[#c1ff00] whitespace-nowrap tracking-tighter uppercase">
                    SYS_LOAD: {Math.round(activeIndex * 25 + 25)}%
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-5/12 h-[350px] md:h-[500px] lg:h-[650px] relative rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-[0_0_100px_rgba(193,255,0,0.1)] pointer-events-auto">
              <div className="absolute inset-0 z-0 opacity-100">
                 <Canvas 
                   camera={{ position: [0, 0, 8], fov: 35 }}
                   dpr={[1, 1.5]}
                   performance={{ min: 0.5 }}
                   gl={{ antialias: true, powerPreference: "high-performance" }}
                 >
                    <ambientLight intensity={1.2} />
                    <pointLight position={[10, 10, 10]} intensity={2.5} />
                    <spotLight position={[5, 10, 5]} angle={0.4} penumbra={1} intensity={15} color="#c1ff00" castShadow />
                    <SystemScanner />
                 </Canvas>
              </div>
              
              {/* Terminal Overlays */}
              <div className="absolute top-0 left-0 p-8 font-mono text-[11px] text-[#c1ff00] uppercase tracking-widest z-10 drop-shadow-[0_0_10px_rgba(193,255,0,0.5)]">
                [ SCANNING_CORE_OS ] <br/>
                TARGET: {painPoints[activeIndex].id}
              </div>
              <div className="absolute bottom-0 right-0 p-8 font-mono text-[10px] text-[#c1ff00]/60 uppercase tracking-tighter text-right z-10">
                ACTIVE_DIAGNOSIS_STREAM <br/>
                0XF402_SECTOR_{activeIndex}
              </div>
            </div>

            {/* Right: Active Card Mirror (Centered in sticky) */}
            <div className="w-full lg:w-7/12 pointer-events-auto">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={painPoints[activeIndex].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative p-1 rounded-[2.5rem] border border-white/20 bg-white/[0.05] backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  >
                     <div className="relative bg-black/80 rounded-[2.3rem] p-8 md:p-12 border border-white/5">
                        <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-${painPoints[activeIndex].color}-500/10 blur-[120px] pointer-events-none`} />
                        
                        <div className="flex items-center gap-4 mb-8">
                           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${painPoints[activeIndex].color}-500/10 border border-${painPoints[activeIndex].color}-500/20`}>
                              {(() => {
                                 const Icon = painPoints[activeIndex].icon;
                                 return <Icon className={`w-7 h-7 text-${painPoints[activeIndex].color}-400`} />;
                              })()}
                           </div>
                           <div>
                              <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 block mb-1">{painPoints[activeIndex].id}</span>
                              <h3 className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
                                 {painPoints[activeIndex].problem}
                              </h3>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                              <div className="flex items-center gap-2 mb-3">
                                 <AlertTriangle className="w-4 h-4 text-red-500" />
                                 <span className="text-xs font-mono text-red-500 uppercase tracking-widest">Diagnosis</span>
                              </div>
                              <p className="text-sm md:text-base text-white/70 leading-relaxed font-mono">
                                 {painPoints[activeIndex].details}
                              </p>
                           </div>

                           <div className={`p-6 rounded-2xl bg-${painPoints[activeIndex].color}-500/10 border border-${painPoints[activeIndex].color}-500/30`}>
                              <span className={`text-xs font-mono text-${painPoints[activeIndex].color}-400 uppercase tracking-widest mb-3 block font-bold`}>The Solution</span>
                              <p className="text-lg md:text-xl text-white font-bold leading-tight">
                                 {painPoints[activeIndex].solution}
                              </p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
