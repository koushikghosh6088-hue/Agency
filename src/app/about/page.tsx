'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Heart, Award, Users, Eye } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import BenefitStats from '@/components/BenefitStats';

const values = [
  { icon: Zap, title: 'Speed Without Compromise', desc: 'We deliver in weeks not months — without cutting a single corner.' },
  { icon: Target, title: 'Results Over Aesthetics', desc: 'Pretty websites that don\u2019t convert are worthless — everything we build is designed to bring you more customers.' },
  { icon: Heart, title: 'Partners Not Vendors', desc: 'We don\u2019t disappear after launch — we stay with you and grow with you long term.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'Honest timelines, honest pricing, no hidden fees and no surprises — ever.' },
];

const honestStats = [
  { value: '1\u20132 Weeks', label: 'Average Delivery Time' },
  { value: 'AI-Powered', label: 'Every Single Build' },
  { value: '24/7', label: 'Support Available' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex flex-col justify-center cursor-default">
        <div className="absolute inset-0 bg-obsidian z-0" />
        <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-blue-400/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-premium border-blue-400/20 mb-8 magnetic-wrap">
                <span className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse-glow" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00ff9d]">
                  Who We Are // Active
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5.2rem] font-heading font-black leading-[0.95] tracking-tighter mb-8 text-white uppercase glow-white">
                WE ARE <br />
                <span className="glow-green italic">VEDASTRA AI LABS</span>
              </h1>
              <p className="mb-6 text-lg md:text-xl text-white/80 font-body font-medium leading-relaxed max-w-2xl">
                Built by builders. Obsessed with results.
              </p>
              <p className="mb-10 text-sm md:text-base text-[#888888] font-body leading-relaxed max-w-2xl">
                A lean AI-powered digital agency that builds websites, mobile apps and intelligent automation systems for businesses serious about growth.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 h-[500px] relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[450px]">
                <Image
                  src="/3d-icons/about_hero.png"
                  alt="Vedastra AI Labs"
                  fill
                  loading="lazy"
                  sizes="450px"
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,102,255,0.4)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Honest Stats */}
      <section className="py-20 relative z-20 bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {honestStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="glass-panel rounded-2xl p-6 md:p-8 text-center border-white/10 hover:border-[#0066ff]/30 transition-all">
                  <div className="text-2xl md:text-3xl font-heading font-black text-white mb-2 tracking-tighter glow-white uppercase">{stat.value}</div>
                  <div className="font-mono text-[0.7rem] text-[#888888] uppercase tracking-[0.1em]">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 relative bg-obsidian border-t border-white/10 rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase block mb-6 text-[#888888]">Our Story // Origin</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-8 text-white uppercase tracking-tighter">
                HOW WE <span className="glow-cyan italic">STARTED</span>
              </h2>
              <div className="space-y-6 text-[#888888] text-base md:text-lg font-body leading-relaxed">
                <p>Vedastra AI Labs was founded with one mission — to give every business access to the kind of digital systems that only big corporations could afford.</p>
                <p>We are not a massive faceless agency. We are a focused team of developers, designers and AI specialists who genuinely care about your results.</p>
                <p>We build fast, we build smart and we stay with you after launch. We don&apos;t disappear after delivery — we stay, support and grow with you.</p>
              </div>
              <div className="mt-8 p-6 rounded-2xl bg-blue-400/5 border border-blue-400/10">
                <p className="font-mono text-[0.7rem] text-[#00ff9d] uppercase tracking-[0.1em] leading-relaxed">
                  Mission_Statement: Help every business compete and win in the digital world — regardless of size.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="glass-panel border-white/10 rounded-[2rem] p-8 md:p-10">
                <h3 className="text-xl font-heading font-black text-white mb-8 uppercase tracking-[0.05em] glow-white">What Makes Us Different</h3>
                <div className="space-y-6">
                  {[
                    { title: 'AI-Assisted Building', detail: 'We use the latest AI tools to deliver faster without sacrificing quality. What takes other agencies months, we do in weeks.' },
                    { title: 'No Bloated Overhead', detail: 'We are a lean team with no unnecessary layers. This means lower costs and faster communication for you.' },
                    { title: 'Unlimited Revisions', detail: 'We do unlimited revisions until you are 100% happy. We never move forward until you have approved every detail.' },
                    { title: 'Post-Launch Support', detail: 'We offer ongoing maintenance, updates, security patches and priority support. Your project never gets abandoned.' },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.title} 
                      initial={{ opacity: 0, x: 20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: i * 0.1 }} 
                      className="border-b border-white/5 last:border-0 pb-6 last:pb-0 group"
                    >
                      <h4 className="text-[0.8rem] font-heading font-bold text-white uppercase tracking-[0.05em] mb-2 group-hover:text-[#0066ff] transition-colors">{item.title}</h4>
                      <p className="text-[0.7rem] font-mono text-[#888888] leading-relaxed uppercase tracking-wide">{item.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 relative bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 className="text-[2.2rem] md:text-[3.5rem] font-heading font-black tracking-tighter text-white leading-none uppercase glow-white">
              CORE <span className="glow-cyan italic">VALUES</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="glass-premium border-white/10 rounded-[2.5rem] p-10 h-full group hover-3d transition-all duration-700 hover:border-[#0066ff]/30 relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0066ff] group-hover:text-black group-hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-3 text-white group-hover:glow-cyan transition-colors uppercase tracking-tight">{value.title}</h3>
                  <p className="text-[#888888] text-sm font-body leading-relaxed">{value.desc}</p>
                  <div className="absolute -inset-20 bg-[#0066ff]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section — Redesigned with Founders */}
      <section className="py-24 md:py-40 bg-obsidian relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ccff00]/[0.03] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <AnimatedSection className="mb-20">
            <h2 className="text-[3rem] md:text-[5rem] font-heading font-black tracking-tighter text-white leading-none uppercase glow-white mb-6">
              THE <span className="glow-green italic text-[#ccff00]">VISIONARIES</span>
            </h2>
            <p className="text-[#888888] font-body text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Meet the minds behind Vedastra AI Labs. We don't just build software — we architect digital futures.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center justify-center">
            {/* Founder 1: Koushik Ghosh */}
            <AnimatedSection delay={0.2}>
              <div className="group relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
                  {/* Outer Glow Ring */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#ccff00] to-[#0066ff] opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700 animate-pulse-slow" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden glass-premium group-hover:border-[#ccff00]/50 transition-colors duration-500 shadow-2xl">
                    <Image 
                      src="/team/koushik.png" 
                      alt="Koushik Ghosh - Founder & CEO" 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-black/80 border border-white/10 backdrop-blur-xl z-20 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ccff00]">CEO // FOUNDER</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter mb-2 glow-white">
                  KOUSHIK <span className="text-[#ccff00] italic">GHOSH</span>
                </h3>
                <p className="font-body text-white/40 text-sm uppercase tracking-widest font-medium">Chief Architect & Visionary</p>
              </div>
            </AnimatedSection>

            {/* Founder 2: Anirban */}
            <AnimatedSection delay={0.4}>
              <div className="group relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
                  {/* Outer Glow Ring */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tl from-[#0066ff] to-[#ccff00] opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700 animate-pulse-slow" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden glass-premium group-hover:border-[#0066ff]/50 transition-colors duration-500 shadow-2xl">
                    <Image 
                      src="/team/anirban.png" 
                      alt="Anirban - Co-Founder & CTO" 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-black/80 border border-white/10 backdrop-blur-xl z-20 shadow-[0_0_20px_rgba(0,102,255,0.2)]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0066ff]">CTO // CO-FOUNDER</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter mb-2 glow-white">
                  ANIR<span className="text-[#0066ff] italic">BAN</span>
                </h3>
                <p className="font-body text-white/40 text-sm uppercase tracking-widest font-medium">Head of AI Research & Dev</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative bg-black border-t border-white/10">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[2.5rem] md:text-[3.8rem] font-heading font-black tracking-tighter mb-6 uppercase glow-white">
              READY TO <span className="glow-cyan italic">WORK WITH US?</span>
            </h2>
            <p className="font-mono text-[0.7rem] text-[#888888] uppercase tracking-[0.15em] max-w-xl mx-auto mb-10">
              Let&apos;s build something that actually grows your business.
            </p>
            <Link href="/contact" className="btn-primary group px-10 py-5 font-heading font-bold uppercase tracking-[0.1em] text-[0.8rem]">
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
