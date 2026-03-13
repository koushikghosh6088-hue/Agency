'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import {
  ArrowRight, Globe, Smartphone, Phone, MessageSquare, Cog, TrendingUp,
  ArrowUpRight, Bot, Workflow, Users, Target, Star
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { CoreSphere, CyberTorus } from '@/components/ServiceModels';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { id: 'web', icon: Globe, title: 'Web Development', desc: 'High-performance, scalable web architectures.', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 'mobile', icon: Smartphone, title: 'Mobile Apps', desc: 'Seamless native experiences.', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 'ai-agents', icon: Phone, title: 'AI Voice Agents', desc: 'Intelligent calling agents handling leads 24/7.', span: 'col-span-1 md:col-span-1 row-span-2', accent: true },
  { id: 'automation', icon: Cog, title: 'Automation', desc: 'End-to-end workflow elimination.', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 'marketing', icon: TrendingUp, title: 'Marketing', desc: 'Data-driven growth.', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 'chat', icon: MessageSquare, title: 'AI Chat', desc: 'Smart conversion bots.', span: 'col-span-1 md:col-span-1 row-span-1' },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <>
      {/* ═══════════ CINEMATIC HERO ═══════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 cursor-default"
      >
        {/* Deep Atmosphere */}
        <div className="absolute inset-0 bg-obsidian z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="bg-grain opacity-10" />

        {/* 3D Centerpiece Background */}
        <div className="absolute inset-0 z-10">
          <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#0ea5e9" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
            <Environment preset="city" />
            <PresentationControls 
              global 
              rotation={[0, 0, 0]} 
              polar={[-0.2, 0.2]} 
              azimuth={[-0.4, 0.4]}
              snap={true}
            >
              <CoreSphere />
            </PresentationControls>
          </Canvas>
        </div>

        <div className="relative z-20 max-w-[1550px] mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-premium border-blue-400/20 mb-4 magnetic-wrap">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400/80">
                Nexus Core v3.0 // Active
              </span>
            </div>

            <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-heading font-extrabold leading-[0.8] tracking-tighter mb-8 max-w-6xl mx-auto">
              WE ENGINEER<br />
              <span className="gradient-text italic">PREMIUM</span> VOIDS.
            </h1>

            <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto font-mono font-light leading-relaxed mb-12">
              Bespoke digital architecture for high-stakes enterprises. 
              <br/>Where logic meets immersive design.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
              <div className="magnetic-wrap">
                <Link href="/contact" className="btn-primary">
                  Deploy System <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="magnetic-wrap">
                <Link href="/portfolio" className="text-blue-400/60 hover:text-blue-400 font-mono text-sm uppercase tracking-widest underline underline-offset-8 transition-all">
                  Access Archive
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-blue-400/50 to-transparent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 rotate-90 origin-left ml-2">Scroll</span>
        </motion.div>
      </motion.section>

      {/* ═══════════ SERVICES BENTO GRID ═══════════ */}
      <section className="relative py-32 bg-obsidian z-10 rounded-[4rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1550px] mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 className="text-[3rem] md:text-[5rem] font-heading font-bold leading-none tracking-tighter mb-4">
              CAPABILITIES_<br/><span className="text-blue-400 italic">GRID</span>
            </h2>
            <p className="font-mono text-sm text-white/40 uppercase tracking-widest max-w-xl">
              Comprehensive architectural components engineered to scale operations through logic and design.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {services.map((svc, i) => (
              <AnimatedSection 
                key={svc.id} 
                className={`${svc.span} group perspective-1200`}
                delay={i * 0.1}
              >
                <div className={`w-full h-full rounded-[2.5rem] border overflow-hidden relative transition-all duration-700 hover-3d glass-premium ${
                  svc.accent 
                    ? 'bg-blue-400 border-blue-400 text-black shadow-[0_20px_50px_rgba(14,165,233,0.3)]' 
                    : 'border-white/10 text-white hover:border-blue-400/40'
                }`}>
                  
                  {/* Background Accents based on sizing */}
                  {svc.accent && (
                    <div className="absolute inset-0 bg-grain opacity-50 mix-blend-overlay pointer-events-none" />
                  )}

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 w-full h-full">
                    <div className="flex justify-between items-start">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                        svc.accent ? 'bg-black text-blue-400' : 'bg-white/5 text-blue-400 border border-white/10 group-hover:bg-blue-400 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]'
                      }`}>
                        <svc.icon className="w-6 h-6" />
                      </div>
                      <div className={`magnetic-wrap w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 scale-0 group-hover:scale-100 ${
                        svc.accent ? 'border-black/20 text-black bg-black/10' : 'border-blue-400/30 text-blue-400 bg-blue-400/10'
                      }`}>
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                      </div>
                    </div>
                    
                    <div className="mt-8 relative z-20 pointer-events-none">
                      {/* 3D secondary Interactive element inside large cards */}
                      {svc.span.includes('row-span-2') && !svc.accent && (
                        <div className="h-40 w-full mb-8 opacity-40 mix-blend-screen pointer-events-auto group-hover:opacity-100 transition-opacity duration-700">
                           <Canvas shadows dpr={[1, 2]}>
                            <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 5, 2]} intensity={2} color="#0ea5e9" />
                            <PresentationControls 
                              global 
                              rotation={[0, 0, 0]} 
                              polar={[-0.2, 0.2]} 
                              azimuth={[-0.5, 0.5]} 
                            >
                              <CyberTorus />
                            </PresentationControls>
                          </Canvas>
                        </div>
                      )}

                      <h3 className={`text-2xl font-bold font-heading mb-2 ${svc.accent ? 'text-black' : 'text-white'}`}>
                        {svc.title}
                      </h3>
                      <p className={`text-sm ${svc.accent ? 'text-black/80 font-medium' : 'text-white/50'} font-mono leading-relaxed`}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Light */}
                  <div className="absolute -inset-20 bg-blue-400/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ METHODOLOGY CONTRAST ═══════════ */}
      <section className="relative py-32 bg-[#e5e5e5] text-black rounded-t-[4rem] -mx-4 md:mx-0 px-6 mt-32 z-20 mb-32">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/5 mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-black/60">Execution Framework</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-12">
                HOW WE BUILD <br/><span className="italic font-light text-blue-400">SYSTEMS</span>
              </h2>

              <div className="space-y-12">
                {[
                  { num: '01', title: 'Architecture Planning', desc: 'Blueprint generation focused on scaling potential, AI integration points, and component hierarchy.' },
                  { num: '02', title: 'Agile Implementation', desc: 'Rapid prototyping and deployment using Next.js, Node.js, and specialized AI models.' },
                  { num: '03', title: 'System Validation', desc: 'Rigorous conversion tracking and load testing before public access is granted.' },
                ].map((step, i) => (
                  <div key={step.num} className="flex gap-6 group cursor-default">
                    <div className="font-mono text-2xl font-bold text-black/20 group-hover:text-black transition-colors shrink-0 pt-1">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold font-heading mb-3">{step.title}</h4>
                      <p className="text-black/60 text-lg leading-relaxed max-w-md">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="relative h-[600px] w-full items-center justify-center hidden lg:flex">
             {/* 3D secondary Interactive element */}
             <div className="w-[500px] h-[500px] bg-black rounded-full overflow-hidden flex items-center justify-center shadow-2xl relative">
                <Canvas shadows dpr={[1, 2]}>
                  <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 5, 2]} intensity={3} color="#ffffff" />
                  <Environment preset="studio" />
                  <PresentationControls 
                    global 
                    rotation={[0.13, 0.1, 0]} 
                    polar={[-0.4, 0.2]} 
                    azimuth={[-1, 0.75]} 
                  >
                    <CyberTorus />
                  </PresentationControls>
                </Canvas>

                {/* Glass testimonial overlay */}
                <div className="absolute -bottom-10 -left-10 bg-white/20 backdrop-blur-2xl border border-white/40 p-6 rounded-3xl w-80 shadow-2xl transform rotate-3 animate-float border-white/20 z-30">
                  <div className="flex gap-1 mb-4">
                     {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-black text-black" />)}
                  </div>
                  <p className="font-heading font-medium text-black leading-snug mb-4">
                    "Total architectural overhaul. The AI pipelines saved 40 hours a week."
                  </p>
                  <p className="font-mono text-xs text-black/60 uppercase">System Admin - TechFlow</p>
                </div>
             </div>
          </div>

        </div>
      </section>
    </>
  );
}
