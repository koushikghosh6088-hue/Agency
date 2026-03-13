'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Zap, Target, Eye, Heart, Users, Globe, Award, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically load 3D components to keep the page fast
const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });

const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });
const DynamicCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const DynamicPresentation = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const DynamicEnv = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });

const stats = [
  { value: '150+', label: 'Systems Deployed', icon: Zap },
  { value: '50+', label: 'Global Contracts', icon: Globe },
  { value: '15+', label: 'AI Engineers', icon: Users },
  { value: '5+', label: 'Years Dev', icon: Award },
];

const values = [
  { icon: Zap, title: 'Constant Innovation', desc: 'Deploying cutting-edge AI architectures ahead of market saturation.' },
  { icon: Target, title: 'Absolute Precision', desc: 'Surgical focus on delivering measurable ROI and operational efficiency.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'Open-book engineering, honest timelines, zero hidden technical debt.' },
  { icon: Heart, title: 'Partnership First', desc: 'Building enterprise infrastructure meant to generate long-term value.' },
];

const team = [
  { name: 'Alex Johnson', role: 'Chief Executive Officer' },
  { name: 'Sarah Chen', role: 'Chief Technology Officer' },
  { name: 'Michael Davis', role: 'Head of Neural Architecture' },
  { name: 'Emily Rodriguez', role: 'Lead Interface Designer' },
  { name: 'James Park', role: 'Full-Stack Lead' },
  { name: 'Lisa Wang', role: 'Director of Growth' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-lime-400/[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        {/* Background 3D element */}
        <div className="absolute inset-y-0 right-0 w-1/2 z-0 opacity-30 mix-blend-screen pointer-events-none hidden lg:block">
            <DynamicCanvas shadows dpr={[1, 2]}>
              <DynamicCamera makeDefault position={[0, 0, 5]} fov={50} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 10, 5]} intensity={2} color="#ccff00" />
              <DynamicEnv preset="studio" />
              <DynamicPresentation global rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.4, 0.4]}>
                 <DynamicCoreSphere />
              </DynamicPresentation>
            </DynamicCanvas>
        </div>

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-lime-400 font-bold">
              [ Syndicate_Profile_09 ]
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-black leading-[0.85] tracking-tighter mb-8 max-w-5xl uppercase">
              DIGITAL <br/><span className="text-lime-400 italic">SYNDICATE_</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl font-mono leading-relaxed border-l-2 border-white/10 pl-6 lowercase">
              WE ARE A SPECIALIZED STRIKE-TEAM OF ENGINEERS, DESIGNERS, AND AI ARCHITECTS DEDICATED TO CREATING TRANSFORMATIVE DIGITAL INFRASTRUCTURE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 relative z-20">
        <div className="max-w-[1550px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="p-8 cyber-frame bg-white/5 border-white/5 group hover:border-lime-400/50 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <stat.icon className="w-6 h-6 text-white/20 group-hover:text-lime-400 transition-colors" />
                    <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Data_Point_{i+1}</span>
                  </div>
                  <div className="text-[2.5rem] font-heading font-black text-white mb-2 leading-none uppercase">{stat.value}</div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32 relative bg-cyber-black mt-12 border-y border-white/5">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 mix-blend-overlay" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            <AnimatedSection className="lg:col-span-5">
              <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-lime-400 font-bold">Origin_Protocol</span>
              <h2 className="text-5xl md:text-6xl font-heading font-black mb-10 text-white uppercase leading-none">
                FROM STARTUP TO <br/><span className="text-lime-400 italic">GLOBAL_CORE_</span>
              </h2>
              <div className="space-y-8 text-white/40 text-lg font-mono leading-relaxed border-l border-white/10 pl-8">
                <p>Joint WebSolutions was forged with a singular mandate: to engineer cutting-edge AI and web architecture accessible to agile enterprises.</p>
                <p>Today, we orchestrate systems across 4 continents, helping businesses harness automation and performance to dominate their sectors.</p>
                <Link href="/contact" className="btn-primary inline-flex mt-4">
                  Connect_With_Hub
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="lg:col-span-6 lg:col-start-7">
              <div className="cyber-frame p-8 md:p-12 bg-black/40">
                <div className="space-y-6">
                  {[
                    { year: '2019', event: 'Founded Joint WebSolutions' },
                    { year: '2020', event: 'Launched AI Engineering unit' },
                    { year: '2021', event: 'Global infrastructure expansion' },
                    { year: '2022', event: 'Deployed v1 AI Voice Agents' },
                    { year: '2023', event: 'Surpassed 100+ active enterprise clusters' },
                    { year: '2024', event: 'Launched Omnichannel Automation Engine' },
                  ].map((item, i) => (
                    <div 
                      key={item.year} 
                      className="flex items-center gap-8 py-4 border-b border-white/5 last:border-0 group"
                    >
                      <div className="text-2xl font-heading font-black text-white group-hover:text-lime-400 transition-colors w-20">{item.year}</div>
                      <div className="h-px w-8 bg-white/10 group-hover:bg-lime-400 transition-colors" />
                      <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Roster */}
      <section className="py-32 bg-cyber-black relative overflow-hidden">
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <AnimatedSection className="mb-24">
            <h2 className="text-5xl md:text-[6rem] font-heading font-black tracking-tighter text-white leading-none uppercase">
              THE <span className="text-lime-400 italic">SYNDICATE_</span>
            </h2>
            <div className="cyber-line w-32 mt-6" />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group cyber-frame p-8 bg-black/40 hover:border-lime-400 transition-colors">
                  <div className="flex justify-between items-start mb-8">
                     <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-lg text-white/20 group-hover:text-lime-400 group-hover:bg-lime-400/10 transition-colors">
                        M{i+1}
                     </div>
                     <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Active_Protocol</span>
                  </div>
                  <h4 className="text-2xl font-black font-heading text-white mb-2 uppercase group-hover:text-lime-400 transition-colors">{member.name}</h4>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] font-bold italic">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footnote */}
      <section className="py-32 relative bg-cyber-black border-t border-white/5">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6 uppercase">
              ENGAGE <span className="text-lime-400 italic">SYSTEMS_</span>
            </h2>
            <p className="font-mono text-xs text-white/30 uppercase tracking-[0.3em] max-w-xl mx-auto mb-10">
              Ready to construct the next era of your enterprise?
            </p>
            <Link href="/contact" className="btn-primary">
              Establish_Contact_Link
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
