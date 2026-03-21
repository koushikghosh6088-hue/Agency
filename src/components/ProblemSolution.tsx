'use client';

import { AlertCircle, ArrowRight, TrendingDown, ShieldAlert, MessageSquareX, Lock, Database, EyeOff, Skull, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const threats = [
  { 
    title: "LEAKING REVENUE", 
    stat: "73%",
    statLabel: "visitors leave in <3s",
    desc: "Your website loads slow, looks outdated, and fails to convert. Every second of delay costs you paying customers — competitors are stealing them right now.",
    icon: TrendingDown,
    severity: "CRITICAL"
  },
  { 
    title: "MANUAL CHAOS", 
    stat: "40hrs",
    statLabel: "wasted per month",
    desc: "You're doing invoices, follow-ups, and scheduling by hand. A single AI workflow could save your team 40+ hours every month — automatically.",
    icon: ShieldAlert,
    severity: "HIGH"
  },
  { 
    title: "GHOSTED LEADS", 
    stat: "78%",
    statLabel: "buy from first responder",
    desc: "A customer messaged you at 11pm. You replied at 9am. They already bought from your competitor. No AI agent = no after-hours sales.",
    icon: MessageSquareX,
    severity: "CRITICAL"
  },
  { 
    title: "STAGNANT GROWTH", 
    stat: "5x",
    statLabel: "slower than AI-powered rivals",
    desc: "While you debate upgrading, your competitors already deployed AI agents, automated their ops, and are scaling 5x faster than you.",
    icon: Lock,
    severity: "HIGH"
  },
  { 
    title: "DATA BLINDNESS", 
    stat: "0",
    statLabel: "data-driven decisions",
    desc: "You're guessing what works. No analytics dashboard, no customer insights, no conversion tracking. Flying blind in a data-driven world.",
    icon: Database,
    severity: "MEDIUM"
  },
  { 
    title: "ZERO VISIBILITY", 
    stat: "90%",
    statLabel: "of searches you're missing",
    desc: "Page 2 of Google is a graveyard. No SEO, no social presence, no content strategy — your ideal customers can't find you.",
    icon: EyeOff,
    severity: "HIGH"
  },
];

function SeverityBadge({ level }: { level: string }) {
  const colors = {
    CRITICAL: 'bg-[#FF2D55]/20 text-[#FF2D55] border-[#FF2D55]/40 shadow-[0_0_15px_rgba(255,45,85,0.15)]',
    HIGH: 'bg-[#FF6B00]/15 text-[#FF6B00] border-[#FF6B00]/30 shadow-[0_0_15px_rgba(255,107,0,0.1)]',
    MEDIUM: 'bg-[#FFB800]/10 text-[#FFB800] border-[#FFB800]/25',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[8px] font-mono font-black uppercase tracking-[0.25em] border ${colors[level as keyof typeof colors] || colors.MEDIUM}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {level}
    </span>
  );
}

export default function ProblemSolution() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden" id="problems">
      
      {/* Cyberpunk Grid Background — CSS only */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 45, 85, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 45, 85, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scanline Effect — CSS only */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,45,85,0.1) 2px, rgba(255,45,85,0.1) 4px)',
        }}
      />

      {/* Top Warning Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF2D55]/60 to-transparent" />
      
      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#FF2D55]/20 pointer-events-none hidden lg:block" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[#FF2D55]/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[#FF2D55]/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#FF2D55]/20 pointer-events-none hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Terminal Header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          {/* Terminal Window Bar */}
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-t-xl bg-[#FF2D55]/5 border border-b-0 border-[#FF2D55]/20">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D55] shadow-[0_0_8px_rgba(255,45,85,0.5)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="font-mono text-[9px] text-[#FF2D55]/70 uppercase tracking-[0.3em] ml-3">threat_scanner.exe</span>
            </div>
            <div className="px-6 py-3 rounded-b-xl rounded-tr-xl bg-[#FF2D55]/[0.03] border border-[#FF2D55]/20 mb-10">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#FF2D55] animate-pulse" />
                <span className="font-mono text-[10px] text-[#FF2D55] font-black uppercase tracking-[0.2em]">
                  6 Critical Vulnerabilities Detected
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-heading font-black leading-[0.95] tracking-tighter uppercase mb-6 text-white">
            IS YOUR BUSINESS <br className="md:hidden" />
            <span className="italic text-[#FF2D55] drop-shadow-[0_0_30px_rgba(255,45,85,0.3)]">BLEEDING MONEY</span> RIGHT NOW?
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Every day without AI, automation, and a modern website costs you <span className="text-[#FF2D55] font-bold">real customers and real revenue</span>. Here&apos;s what&apos;s killing your growth:
          </p>
        </AnimatedSection>

        {/* Threat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16 md:mb-20">
          {threats.map((threat, i) => (
            <AnimatedSection key={i} delay={0.08 * i}>
              <div className="group relative bg-white/[0.015] border border-white/[0.06] rounded-2xl p-7 md:p-8 hover:border-[#FF2D55]/30 transition-all duration-500 overflow-hidden h-full">
                
                {/* Hover Glow — top edge */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55]/0 to-transparent group-hover:via-[#FF2D55]/50 transition-all duration-700" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#FF2D55]/0 group-hover:border-[#FF2D55]/30 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#FF2D55]/0 group-hover:border-[#FF2D55]/30 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Header Row: Icon + Severity */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FF2D55]/[0.07] flex items-center justify-center border border-[#FF2D55]/15 group-hover:bg-[#FF2D55]/[0.12] group-hover:shadow-[0_0_25px_rgba(255,45,85,0.15)] transition-all duration-500">
                      <threat.icon className="w-5 h-5 text-[#FF2D55]" />
                    </div>
                    <SeverityBadge level={threat.severity} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-black text-white mb-2 uppercase tracking-tight group-hover:text-[#FF2D55] transition-colors duration-300">
                    {threat.title}
                  </h3>

                  {/* Stat Callout */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-heading font-black text-[#FF2D55] tracking-tighter">{threat.stat}</span>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{threat.statLabel}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/35 font-body text-[13px] leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                    {threat.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Diagnosis CTA */}
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto">
            {/* Outer Glitch Border */}
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-[#FF2D55]/20 via-[#FF2D55]/40 to-[#FF2D55]/20 opacity-60 blur-[1px]" />
            
            <div className="relative bg-black/90 backdrop-blur-sm rounded-[2rem] border border-[#FF2D55]/15 p-10 md:p-14 text-center overflow-hidden">
              {/* Inner scanline texture */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,45,85,0.15) 1px, rgba(255,45,85,0.15) 2px)',
                }}
              />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <Skull className="w-5 h-5 text-[#FF2D55]" />
                  <span className="font-mono text-[10px] text-[#FF2D55] font-black uppercase tracking-[0.25em]">System Diagnostic Available</span>
                </div>
                
                <h4 className="text-xl md:text-3xl font-heading font-black text-white mb-3 uppercase tracking-tight">
                  HOW MANY OF THESE <span className="italic text-[#FF2D55]">APPLY TO YOU?</span>
                </h4>
                <p className="text-white/40 font-body text-sm mb-8 max-w-lg mx-auto leading-relaxed">
                  Book a free 30-minute diagnosis call. We&apos;ll audit your entire digital presence and tell you 
                  <span className="text-white font-bold"> exactly</span> what&apos;s leaking revenue — and how to fix it.
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF2D55] text-white font-heading font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-xl shadow-[0_0_40px_rgba(255,45,85,0.25)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                >
                  GET FREE DIAGNOSIS <ArrowRight className="w-5 h-5" />
                </Link>
                
                <p className="mt-5 text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">
                  ⚡ Limited spots — Zero commitment — Results in 48hrs
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
