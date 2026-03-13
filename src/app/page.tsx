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

  return (
    <main className="bg-cyber-black min-h-screen text-white relative overflow-hidden">
      {/* Global Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* ── HERO SECTION ── */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6">
        <div className="max-w-[1550px] mx-auto">
          <div className="cyber-frame p-4 md:p-8 lg:p-12 min-h-[85vh] flex flex-col justify-end relative overflow-hidden group">
            {/* Hero Image Background */}
            <div className="absolute inset-0 z-0">
               <img 
                 src="/hero-bg.png" 
                 alt="Cyberpunk City" 
                 className="w-full h-full object-cover opacity-60 grayscale-[0.5] group-hover:scale-105 transition-transform duration-[2s] ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/40 to-transparent" />
               <div className="scanline" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 space-y-8 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-4 bg-lime-400 text-black px-4 py-1 font-mono font-bold text-xs uppercase tracking-widest"
              >
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                Autonomous System 01
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-8xl lg:text-[10rem] font-heading font-black leading-[0.85] tracking-tighter uppercase"
              >
                CORE<br />
                <span className="text-lime-400 italic">AUTOMATION</span><br />
                ENGINEERED.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/60 font-mono max-w-xl leading-relaxed bg-black/40 backdrop-blur-sm p-4 border-l-2 border-lime-400"
              >
                High-performance web architectures and AI voice agents built to scale your business into the digital future.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link href="/contact" className="btn-primary">
                  Connect_Wallet
                </Link>
                <Link href="/services" className="btn-secondary">
                  System_Specs
                </Link>
              </motion.div>
            </div>

            {/* Navigation Indicators Sidebar */}
            <div className="absolute right-8 bottom-12 hidden lg:flex flex-col gap-8 items-center">
              <div className="flex flex-col gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-1 h-8 ${i === 1 ? 'bg-lime-400' : 'bg-white/10'}`} />
                ))}
              </div>
              <span className="font-mono text-[10px] text-white/40 rotate-90 whitespace-nowrap uppercase tracking-[0.5em]">Phase_Initialization</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS SECTION ── */}
      <section className="py-12 border-y border-white/5 bg-black/20">
        <div className="max-w-[1550px] mx-auto px-6 overflow-hidden">
          <div className="flex items-center gap-12">
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.3em] text-lime-400 font-bold">Our_Partners &gt;</span>
            <div className="flex gap-20 items-center animate-scroll">
              {['Bloomberg', 'WIRED', 'The Guardian', 'TechCrunch', 'Forbes', 'Reuters'].map((partner) => (
                <span key={partner} className="text-2xl font-heading font-black text-white/20 whitespace-nowrap uppercase italic hover:text-white transition-colors cursor-crosshair">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS SECTION ── */}
      <section className="py-32 px-6">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-heading font-black leading-[0.9] mb-8 uppercase">
              WHAT IS <br />
              <span className="text-lime-400 text-6xl md:text-8xl italic pr-6">JOINT_SYS?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-xl text-white/50 font-mono leading-relaxed">
              <p>
                Joint Sys is enabling next-generation digital infrastructure for everyone. We build custom web platforms and AI-driven voice agents that eliminate operational friction and scale productivity.
              </p>
              <div className="pt-6">
                <div className="cyber-line mb-8" />
                <Link href="/about" className="text-lime-400 font-mono text-sm uppercase tracking-widest flex items-center gap-4 hover:gap-6 transition-all">
                  Process_Blueprint <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ROADMAP SECTION ── */}
      <section className="py-32 px-6 bg-black/40">
        <div className="max-w-[1550px] mx-auto">
          <AnimatedSection className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-4">ROADMAP_</h2>
            <div className="cyber-line w-32 mx-auto" />
          </AnimatedSection>

          <div className="relative">
            {/* The Path Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { phase: '01', title: 'Connect', desc: 'Integration with existing data layers and user workflows.', status: 'Active' },
                { phase: '02', title: 'System_Init', desc: 'Deploying custom AI models and high-performance frontends.', status: 'Pending' },
                { phase: '03', title: 'Core_Scale', desc: 'Broadening capability grid to include multi-channel support.', status: 'Locked' },
                { phase: '04', title: 'Total_Sync', desc: 'Full autonomous operations across all digital touchpoints.', status: 'Locked' },
              ].map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="relative z-10">
                  <div className={`p-8 cyber-frame group hover:border-lime-400 transition-colors ${i === 0 ? 'border-lime-400/50' : ''}`}>
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-12 h-12 flex items-center justify-center font-mono font-bold text-xl border ${i === 0 ? 'bg-lime-400 text-black border-lime-400' : 'bg-white/5 text-white/20 border-white/10'}`}>
                        {step.phase}
                      </div>
                      <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 ${i === 0 ? 'bg-lime-400 text-black' : 'bg-white/5 text-white/40'}`}>
                        {step.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4 uppercase">{step.title}</h3>
                    <p className="font-mono text-sm text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GET EARLY ACCESS SECTION ── */}
      <section className="py-32 px-6">
        <div className="max-w-[1550px] mx-auto">
          <div className="cyber-frame relative overflow-hidden p-12 lg:p-24 min-h-[500px] flex items-center">
             <div className="absolute inset-0 z-0 opacity-40 grayscale group">
               <img src="/cta-bg.png" alt="Futuristic Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
               <div className="absolute inset-0 bg-cyber-black/60" />
             </div>

             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                <div>
                  <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-6 leading-none">
                    GET EARLY <br />
                    <span className="text-lime-400 italic">ACCESS_</span>
                  </h2>
                  <p className="font-mono text-white/50 max-w-sm mb-12">
                    Initialize your terminal to receive early technical specifications and deployment invitations.
                  </p>
                </div>
                <div className="flex items-center lg:justify-end">
                   <div className="flex w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 p-2">
                     <input 
                       type="email" 
                       placeholder="Enter_User_Email..." 
                       className="bg-transparent border-none outline-none flex-1 px-4 font-mono text-sm text-lime-400 placeholder:text-white/20"
                     />
                     <button className="btn-primary py-2 px-6 text-xs whitespace-nowrap">
                       Submit_Query
                     </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
