'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRight, Activity, ShieldAlert, Cpu, Database } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import AnimatedSection from './AnimatedSection';
import SystemScanner from './SystemScanner';

const painPoints = [
  {
    id: "NET-01",
    problem: "Conversion Hemorrhage",
    details: "Outdated architecture bleeding high-intent mobile visitors.",
    solution: "Deploy high-fidelity R3F ecosystems with sub-400ms LCP optimization.",
    icon: ShieldAlert,
    metrics: "45% Leakage Detected"
  },
  {
    id: "AI-04",
    problem: "Operational Latency",
    details: "Zero autonomous follow-up protocol. Leads going cold instantly.",
    solution: "Initialize 24/7 Neural Agents for instant conversion and routing.",
    icon: Cpu,
    metrics: "72h Response Delay"
  },
  {
    id: "DATA-09",
    problem: "Data Fragmentation",
    details: "Manual entry bottlenecks and cross-platform synchronization failure.",
    solution: "Architect unified neural automation pipelines with zero-error logic.",
    icon: Database,
    metrics: "90% Manual Overhead"
  }
];

export default function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % painPoints.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-48 bg-black overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: 3D Diagnostic Environment */}
          <div className="lg:col-span-5 h-[400px] md:h-[600px] relative order-2 lg:order-1">
            <div className="absolute inset-0 z-0">
               <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <SystemScanner />
               </Canvas>
            </div>
            
            {/* Terminal Overlays */}
            <div className="absolute top-0 left-0 p-6 font-mono text-[10px] text-red-500/60 uppercase tracking-widest z-10 animate-pulse">
              [ SECURE_SCAN_ACTIVE ] <br/>
              NODE_ID: JOINT_ENGINE_V4
            </div>
            <div className="absolute bottom-0 right-0 p-6 font-mono text-[9px] text-blue-400/40 uppercase tracking-tighter text-right z-10">
              BIT_RATE: 12.4 GBPS <br/>
              PACKET_LOSS: 0.00001%
            </div>
          </div>

          {/* Right: Diagnostic Terminal Content */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-8 backdrop-blur-md">
                <Activity className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-500 font-black">System Diagnosis Required</span>
              </div>
              
              <h2 className="text-[3rem] md:text-[5.5rem] lg:text-[7rem] font-heading font-black leading-[0.8] tracking-tighter uppercase mb-12">
                CRITICAL <br/><span className="gradient-text italic opacity-90 text-red-500">INEFFICIENCY</span> <br/> DETECTED_
              </h2>

              <div className="relative min-h-[350px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-10"
                  >
                    <div className="flex items-start gap-6 border-l-2 border-red-500/30 pl-8 relative">
                      <div className="absolute -left-1.5 top-0 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                           <span className="font-mono text-xs text-red-500/50">{painPoints[activeIndex].id}</span>
                           <h3 className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
                             {painPoints[activeIndex].problem}
                           </h3>
                        </div>
                        <p className="text-white/40 font-mono text-sm md:text-base leading-relaxed mb-4 max-w-xl">
                          {painPoints[activeIndex].details}
                        </p>
                        <div className="inline-block px-3 py-1 rounded-md bg-red-500/5 border border-red-500/20 font-mono text-[10px] text-red-400 uppercase tracking-widest">
                           {painPoints[activeIndex].metrics}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 rounded-[2rem] glass-premium border-blue-400/20 relative group overflow-hidden">
                       <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                       <div className="flex items-center gap-4 mb-4">
                          <CheckCircle2 className="w-6 h-6 text-blue-400" />
                          <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400">Resolution Applied</span>
                       </div>
                       <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                          {painPoints[activeIndex].solution}
                       </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Progress Indicators */}
                <div className="flex gap-2 mt-12">
                  {painPoints.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === activeIndex ? 'w-12 bg-blue-400' : 'w-4 bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
