'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { View, PerspectiveCamera, PresentationControls, Environment } from '@react-three/drei';
import {
  ArrowRight, Globe, Smartphone, Phone, MessageSquare, Cog, TrendingUp,
  ArrowUpRight, Bot, Workflow, Users, Target, Star, Shield, Zap, Server,
  Code2, Layers, Database, Cpu, Lock, BarChart3
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { CoreSphere, CyberTorus } from '@/components/ServiceModels';
import HeroEnvironment from '@/components/HeroEnvironment';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { id: 'web', icon: Globe, title: 'Web Development', desc: 'High-performance, scalable web architectures.', span: 'col-span-1 md:col-span-2 row-span-2', graphic: Code2, color: '#0ea5e9' },
  { id: 'mobile', icon: Smartphone, title: 'Mobile Apps', desc: 'Seamless native experiences.', span: 'col-span-1 md:col-span-1 row-span-1', graphic: Layers, color: '#8b5cf6' },
  { id: 'ai-agents', icon: Phone, title: 'AI Voice Agents', desc: 'Intelligent calling agents handling leads 24/7.', span: 'col-span-1 md:col-span-1 row-span-2', accent: true, graphic: Cpu, color: '#0ea5e9' },
  { id: 'automation', icon: Cog, title: 'Automation', desc: 'End-to-end workflow elimination.', span: 'col-span-1 md:col-span-1 row-span-1', graphic: Workflow, color: '#10b981' },
  { id: 'marketing', icon: TrendingUp, title: 'Marketing', desc: 'Data-driven growth.', span: 'col-span-1 md:col-span-1 row-span-1', graphic: BarChart3, color: '#f59e0b' },
  { id: 'chat', icon: MessageSquare, title: 'AI Chat', desc: 'Smart conversion bots.', span: 'col-span-1 md:col-span-1 row-span-1', graphic: Bot, color: '#ec4899' },
];

const projects = [
  { title: 'NeuralFlow', category: 'AI Infrastructure', image: 'https://images.unsplash.com/photo-1639762681485-359997ed782e?auto=format&fit=crop&q=80&w=800', tech: ['React', 'Python', 'TensorFlow'] },
  { title: 'Nexus UI', category: 'Design System', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', tech: ['Next.js', 'Figma', 'Storybook'] },
  { title: 'Quantum App', category: 'Mobile Solution', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800', tech: ['React Native', 'Firebase', 'Swift'] },
  { title: 'Aether OS', category: 'Web Ecosystem', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', tech: ['Vue', 'Node.js', 'AWS'] },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  useEffect(() => {
    if (headlineRef.current && subheadlineRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(headlineRef.current, 
        { y: 100, opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.out', delay: 0.5 }
      );
      
      tl.fromTo(subheadlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.8"
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* ═══════════ SCROLL PROGRESS BAR ═══════════ */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* ═══════════ CINEMATIC HERO ═══════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 cursor-default"
      >
        <div className="absolute inset-0 bg-obsidian z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1)_0%,transparent_80%)] pointer-events-none" />
        <div className="bg-grain opacity-[0.05]" />

        <div className="absolute inset-0 z-10 pointer-events-none">
          <View className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#0ea5e9" />
            <Environment preset="city" />
            <HeroEnvironment />
            <PresentationControls global rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.4, 0.4]} snap={true}>
              <group scale={1.2}><CoreSphere /></group>
            </PresentationControls>
          </View>
        </div>

        <div className="relative z-20 max-w-[1550px] mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium border-blue-400/20 mb-6 magnetic-wrap hover:border-blue-400/40 transition-colors">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-shimmer">
                Neural Hub // Protocol 8.42
              </span>
            </div>

            <div className="relative overflow-visible">
              <h1 
                ref={headlineRef}
                className="text-[4rem] md:text-[7rem] lg:text-[9.5rem] font-heading font-black leading-[0.8] tracking-tighter mb-10 max-w-7xl mx-auto uppercase"
              >
                ARCHITECTING<br />
                <span className="gradient-text italic opacity-90">DIGITAL</span> FRONTIERS.
              </h1>
            </div>

            <p 
              ref={subheadlineRef}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-mono font-light leading-relaxed mb-16 tracking-wide"
            >
              Engineering mission-critical digital infrastructure for the next generation of autonomous AI and high-performance enterprises.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
              <div className="magnetic-wrap">
                <Link href="/contact" className="btn-primary px-10 py-5">
                  INITIALIZE PROJECT <ArrowUpRight className="ml-2 w-5 h-5" />
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

      {/* ═══════════ STATS COUNTER BAR ═══════════ */}
      <section className="relative py-16 bg-black z-20 border-t border-b border-white/5">
        <div className="max-w-[1550px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Projects Deployed', suffix: '' },
              { value: '50+', label: 'Global Clients', suffix: '' },
              { value: '99.9', label: 'Uptime SLA', suffix: '%' },
              { value: '4.9', label: 'Client Rating', suffix: '/5' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.15}>
                <div className="text-center group cursor-default py-4">
                  <div className="text-[3.5rem] md:text-[5rem] font-heading font-black leading-none tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-500">
                    {stat.value}<span className="text-blue-400 text-[2rem] md:text-[3rem]">{stat.suffix}</span>
                  </div>
                  <div className="font-mono text-[10px] md:text-xs text-white/30 uppercase tracking-[0.3em] mt-3">
                    {stat.label}
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mx-auto mt-4 group-hover:w-24 transition-all duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES BENTO GRID ═══════════ */}
      <section className="relative py-32 bg-obsidian z-10 rounded-t-[4rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
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
                <Link href={svc.id === 'ai-agents' || svc.id === 'chat' ? '/ai-solutions' : '/services'}>
                  <div 
                    className={`w-full h-full rounded-[2.5rem] border overflow-hidden relative transition-all duration-700 hover-3d glass-premium ${
                      svc.accent 
                        ? 'bg-blue-400 border-blue-400 text-black shadow-[0_20px_50px_rgba(14,165,233,0.3)]' 
                        : 'border-white/10 text-white hover:border-blue-400/40'
                    }`}
                    data-cursor-text="EXPLORE"
                  >
                    {svc.accent && (
                      <div className="absolute inset-0 bg-grain opacity-50 mix-blend-overlay pointer-events-none" />
                    )}

                    {/* Decorative background graphic */}
                    <div className={`absolute top-0 right-0 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden ${svc.accent ? 'opacity-10' : 'opacity-[0.04]'} group-hover:opacity-[0.12] transition-opacity duration-700`}>
                      <svc.graphic className="w-[60%] h-[60%] max-w-[200px] max-h-[200px]" strokeWidth={0.5} />
                    </div>

                    {/* Animated corner accent */}
                    {!svc.accent && (
                      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none z-0">
                        <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-white/5 group-hover:border-blue-400/20 transition-colors duration-700" />
                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/5 group-hover:border-blue-400/30 transition-colors duration-700" />
                      </div>
                    )}

                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 w-full h-full">
                      <div className="flex justify-between items-start">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                          svc.accent ? 'bg-black text-blue-400' : 'bg-white/5 text-blue-400 border border-white/10 group-hover:bg-blue-400 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]'
                        }`}>
                          <svc.icon className="w-6 h-6" />
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 scale-0 group-hover:scale-100 ${
                          svc.accent ? 'border-black/20 text-black bg-black/10' : 'border-blue-400/30 text-blue-400 bg-blue-400/10'
                        }`}>
                          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                        </div>
                      </div>
                      <div className="mt-auto relative z-20 pointer-events-none">
                        <h3 className={`text-2xl font-bold font-heading mb-2 ${svc.accent ? 'text-black' : 'text-white'}`}>{svc.title}</h3>
                        <p className={`text-sm ${svc.accent ? 'text-black/80 font-medium' : 'text-white/50'} font-mono leading-relaxed`}>{svc.desc}</p>
                      </div>
                    </div>
                    <div className="absolute -inset-20 bg-blue-400/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SOCIAL PROOF / TESTIMONIALS ═══════════ */}
      <section className="relative py-32 bg-black overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <Star className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">Client Transmissions</span>
            </div>
            <h2 className="text-[3rem] md:text-[5rem] font-heading font-black tracking-tighter leading-none mb-6">
              TRUSTED BY <span className="gradient-text italic">LEADERS</span>
            </h2>
            <p className="font-mono text-sm text-white/30 uppercase tracking-widest max-w-lg mx-auto">
              Feedback from enterprise partners across 4 continents.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Joint WebSolutions completely reimagined our digital infrastructure. Their AI agents now handle 70% of our lead qualification autonomously.", name: "Sarah Chen", role: "CTO, Nexus Dynamics", rating: 5 },
              { quote: "The performance optimization they delivered was insane — our platform went from 3s load times to under 400ms. Revenue jumped 34% in Q1.", name: "Marcus Rivera", role: "Head of Product, FlowStack", rating: 5 },
              { quote: "We've worked with 6 agencies before Joint. None delivered this level of engineering precision. They don't just build — they architect.", name: "Elena Kowalski", role: "Founder, AetherLabs", rating: 5 },
            ].map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.15}>
                <div className="glass-panel rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col justify-between group hover:border-blue-400/30 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute -inset-20 bg-blue-400/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-blue-400 fill-blue-400" />
                      ))}
                    </div>
                    <p className="text-white/60 text-lg leading-relaxed font-mono font-light mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-white/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{testimonial.name}</div>
                      <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY JOINT — DIFFERENTIATORS ═══════════ */}
      <section className="relative py-32 bg-obsidian overflow-hidden z-10 border-t border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/5 mb-8">
                <Target className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400/80">Why Joint</span>
              </div>
              <h2 className="text-[3rem] md:text-[5rem] font-heading font-black tracking-tighter leading-[0.85] mb-8">
                NOT ANOTHER<br/><span className="text-blue-400 italic">AGENCY.</span>
              </h2>
              <p className="text-white/40 text-lg font-mono leading-relaxed max-w-md">
                We engineer digital infrastructure with the precision of a defense contractor and the aesthetics of a design studio.
              </p>
            </AnimatedSection>

            <div className="lg:col-span-7 space-y-6">
              {[
                { icon: Zap, title: 'Sub-400ms Performance', desc: 'Every system we build loads in under 400ms. We obsess over Core Web Vitals, Lighthouse scores, and real-world TTFB.', metric: '400ms' },
                { icon: Shield, title: 'Military-Grade Security', desc: 'SOC2-compliant architecture with end-to-end encryption, rate-limiting, and DDoS protection baked into every deploy.', metric: 'SOC2' },
                { icon: Bot, title: 'AI-Native Architecture', desc: 'Every platform ships with embedded AI — from voice agents to predictive analytics. Not bolted on. Built in.', metric: 'AI-1st' },
                { icon: Workflow, title: 'Zero-Downtime Deploys', desc: 'Blue-green deployments, automated rollbacks, and real-time monitoring ensure your infrastructure never sleeps.', metric: '99.99%' },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1} direction="right">
                  <div className="glass-panel rounded-[2rem] p-8 md:p-10 group hover:border-blue-400/30 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute -inset-20 bg-blue-400/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-400 group-hover:text-black group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-heading font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                          <span className="font-mono text-xs text-blue-400/60 bg-blue-400/5 px-3 py-1 rounded-full border border-blue-400/10 hidden md:block">{item.metric}</span>
                        </div>
                        <p className="text-white/40 font-mono text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED ARCHIVE — VERTICAL GRID ═══════════ */}
      <section className="relative py-32 bg-black overflow-hidden z-10 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <AnimatedSection className="mb-16 flex items-end justify-between flex-wrap gap-6">
            <div>
              <h2 className="text-[3rem] md:text-[5rem] font-heading font-black tracking-tighter leading-none mb-4">
                FEATURED_<br/><span className="text-blue-400 italic">ARCHIVE</span>
              </h2>
              <p className="font-mono text-sm text-white/30 uppercase tracking-widest max-w-lg">
                Selected case studies from our engineering portfolio.
              </p>
            </div>
            <Link href="/portfolio" className="btn-secondary px-8 py-4 shrink-0">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer" data-cursor-text="VIEW">
                  <img 
                    src={project.image} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" 
                    alt={project.title}
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Project number watermark */}
                  <div className="absolute top-6 right-8 font-heading text-[6rem] md:text-[8rem] font-black text-white/[0.03] leading-none pointer-events-none">
                    0{i + 1}
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-10">
                    <div className="flex gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">{project.category}</p>
                    <h3 className="text-4xl md:text-5xl font-heading font-black text-white group-hover:text-blue-400 transition-colors duration-500">{project.title}</h3>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-blue-400 group-hover:border-blue-400">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TECH PROCESS SECTION ═══════════ */}
      <section className="relative py-40 bg-mesh-dark overflow-hidden z-10">
        <div className="absolute inset-0 bg-[#080808]/80 z-0" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400/80">Protocol Framework</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter leading-[0.8] mb-12 uppercase">
                ENGINEERING <br/><span className="italic font-light text-blue-400">SOLID</span> LOGIC.
              </h2>
              <div className="space-y-12 mt-16">
                {[
                  { num: '01', title: 'Neural Blueprints', desc: 'Generating complex digital architectures with AI-driven scaling foundations.', icon: Cpu },
                  { num: '02', title: 'System Hardening', desc: 'Stress-testing infrastructure against ultra-high concurrency loads.', icon: Shield },
                  { num: '03', title: 'Deployment Zero', desc: 'Final initialization of mission-critical systems across global clusters.', icon: Server },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 group cursor-default items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-400 group-hover:border-blue-400 group-hover:text-black transition-all duration-500">
                      <step.icon className="w-6 h-6 text-blue-400 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-mono text-sm font-bold text-blue-400/40">{step.num}</span>
                        <h4 className="text-xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">{step.title}</h4>
                      </div>
                      <p className="text-white/40 text-base leading-relaxed max-w-md font-mono">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            {/* Right side: Tech visual instead of 3D */}
            <AnimatedSection delay={0.3}>
              <div className="relative">
                {/* Code block visual */}
                <div className="glass-panel rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute -inset-20 bg-blue-400/5 blur-[100px] pointer-events-none" />
                  
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="font-mono text-[10px] text-white/30 ml-3">joint_protocol.ts</span>
                  </div>

                  {/* Code content */}
                  <div className="font-mono text-sm leading-7 relative z-10">
                    <div><span className="text-blue-400">const</span> <span className="text-white">protocol</span> = <span className="text-blue-400">await</span> <span className="text-green-400">initialize</span>({`{`}</div>
                    <div className="pl-6"><span className="text-white/40">engine:</span> <span className="text-amber-400">&apos;neural-v8&apos;</span>,</div>
                    <div className="pl-6"><span className="text-white/40">clusters:</span> <span className="text-cyan-400">42</span>,</div>
                    <div className="pl-6"><span className="text-white/40">latency:</span> <span className="text-cyan-400">&apos;sub-400ms&apos;</span>,</div>
                    <div className="pl-6"><span className="text-white/40">security:</span> <span className="text-amber-400">&apos;soc2-grade&apos;</span>,</div>
                    <div className="pl-6"><span className="text-white/40">ai:</span> <span className="text-purple-400">true</span>,</div>
                    <div>{`}`});</div>
                    <div className="mt-4"><span className="text-white/30">// Deploy across global edge nodes</span></div>
                    <div><span className="text-blue-400">await</span> protocol.<span className="text-green-400">deploy</span>({`{`}</div>
                    <div className="pl-6"><span className="text-white/40">regions:</span> [<span className="text-amber-400">&apos;us-east&apos;</span>, <span className="text-amber-400">&apos;eu-west&apos;</span>, <span className="text-amber-400">&apos;ap-south&apos;</span>],</div>
                    <div className="pl-6"><span className="text-white/40">rollback:</span> <span className="text-purple-400">true</span>,</div>
                    <div className="pl-6"><span className="text-white/40">monitoring:</span> <span className="text-purple-400">true</span>,</div>
                    <div>{`}`});</div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-green-400/60">System online — 99.99% uptime guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Floating metrics */}
                <div className="absolute -top-6 -right-4 glass-premium px-5 py-3 rounded-2xl border-blue-400/20 animate-float pointer-events-none">
                  <p className="font-mono text-[10px] text-blue-400/60 mb-1">LATENCY</p>
                  <p className="text-white font-bold tracking-tight text-lg">42ms <span className="text-green-400 text-xs">↓</span></p>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-premium px-5 py-3 rounded-2xl border-blue-400/20 animate-float [animation-delay:2s] pointer-events-none">
                  <p className="font-mono text-[10px] text-blue-400/60 mb-1">UPTIME</p>
                  <p className="text-white font-bold tracking-tight text-lg">99.99%</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════ TECH INFRASTRUCTURE MARQUEE ═══════════ */}
      <section className="relative py-20 bg-black overflow-hidden border-t border-white/5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite] gap-20 items-center pr-20">
            {[
              { icon: Shield, text: "ENCRYPTED PROTOCOLS" },
              { icon: Zap, text: "LOW-LATENCY EDGE" },
              { icon: Server, text: "NODE NEURAL SYNC" },
              { icon: Bot, text: "AUTONOMOUS LOGIC" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <item.icon className="w-8 h-8 text-blue-400" />
                <span className="text-4xl md:text-6xl font-heading font-black text-white/20 uppercase tracking-tighter">{item.text}</span>
                <span className="text-blue-400">•</span>
              </div>
            ))}
            {[
              { icon: Shield, text: "ENCRYPTED PROTOCOLS" },
              { icon: Zap, text: "LOW-LATENCY EDGE" },
              { icon: Server, text: "NODE NEURAL SYNC" },
              { icon: Bot, text: "AUTONOMOUS LOGIC" },
            ].map((item, i) => (
              <div key={i+"dup"} className="flex items-center gap-6">
                <item.icon className="w-8 h-8 text-blue-400" />
                <span className="text-4xl md:text-6xl font-heading font-black text-white/20 uppercase tracking-tighter">{item.text}</span>
                <span className="text-blue-400">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CINEMATIC CTA ═══════════ */}
      <section className="relative py-40 bg-obsidian overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-400/20 bg-blue-400/5 mb-10">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400/80">Ready to Deploy</span>
            </div>
            
            <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-heading font-black tracking-tighter leading-[0.8] mb-10 uppercase">
              LET&apos;S BUILD<br/>
              <span className="gradient-text italic">SOMETHING</span><br/>
              EXTRAORDINARY.
            </h2>
            
            <p className="text-white/40 text-lg md:text-xl font-mono font-light max-w-2xl mx-auto mb-14 leading-relaxed">
              Initiate contact protocols and let our engineering syndicate architect your next digital masterpiece.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary px-12 py-6 text-base">
                START PROJECT <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary px-10 py-5">
                Explore Services
              </Link>
            </div>

            <div className="flex items-center justify-center gap-12 mt-20">
              {[
                { label: 'Response Time', value: '< 2hrs' },
                { label: 'Free Consultation', value: '60 min' },
                { label: 'Project Kickoff', value: '48 hrs' },
              ].map((item) => (
                <div key={item.label} className="text-center hidden md:block">
                  <div className="text-lg font-bold text-white/70">{item.value}</div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
