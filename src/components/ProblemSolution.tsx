'use client';

import { useState, useRef } from 'react';
import { 
  AlertCircle, ArrowRight, Ban, Smartphone, Moon, Cog, 
  AlertTriangle, Skull, ChevronDown, Zap, ShieldAlert, 
  Activity, Clock, PhoneIncoming, MousePointer2 
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const threats = [
  { 
    title: "OUTDATED OR NO WEBSITE", 
    emoji: "🚫",
    stat: "3s",
    statLabel: "to capture a lead",
    preview: "Your first impression is a digital rejection letter.",
    desc: "Someone is searching for exactly what you sell right now. If they find an outdated site or a dead link, they go to your competitor. In 2025, an ugly site is a sign of an amateur business.",
    icon: Ban,
    severity: "CRITICAL",
    color: "#FF2D55"
  },
  { 
    title: "MOBILE USERS CAN'T BUY", 
    emoji: "📵",
    stat: "80%",
    statLabel: "mobile traffic share",
    preview: "Your storefront is locked for 80% of your audience.",
    desc: "If your site isn't perfectly responsive, you're ghosting your customers. Tiny buttons and broken layouts on mobile are the #1 reason leads abandon their journey.",
    icon: Smartphone,
    severity: "CRITICAL",
    color: "#0066ff"
  },
  { 
    title: "MISSING LEADS WHILE YOU SLEEP", 
    emoji: "💸",
    stat: "24/7",
    statLabel: "leads lost after-hours",
    preview: "Every night is a silent revenue leak.",
    desc: "Leads don't wait until 9am. If you don't have an AI agent replying instantly at 2am, those customers are gone by breakfast. Answering 'whenever you see it' is too late.",
    icon: Moon,
    severity: "ULTRA",
    color: "#ccff00"
  },
  { 
    title: "TEAM WASTES HOURS ON LOOPS", 
    emoji: "⚙️",
    stat: "60h",
    statLabel: "wasted per staff/mo",
    preview: "Repetitive tasks are killing your innovation.",
    desc: "Manual invoicing, copy-pasting, and repetitive follow-ups are a 1990s problem. If your team isn't automated, you're paying expert salaries for robot-level work.",
    icon: Cog,
    severity: "HIGH",
    color: "#FF2D55"
  },
  { 
    title: "SLOW LOADING SPEED (EXIT)", 
    emoji: "⚡",
    stat: "300%",
    statLabel: "higher bounce rate",
    preview: "Every second of delay costs you 10% conversion.",
    desc: "Speed is the new luxury. If your page takes more than 2 seconds to load, Google punishes you and users exit before they even see your logo. Efficiency is mandatory.",
    icon: Activity,
    severity: "HIGH",
    color: "#0066ff"
  },
  { 
    title: "MISSED CALLS = LOST MONEY", 
    emoji: "📞",
    stat: "62%",
    statLabel: "calls go unanswered",
    preview: "Your phone is ringing, but nobody is selling.",
    desc: "Missed calls are missed revenue. Our AI Voice Agents ensure every call is answered immediately, queries resolved, and appointments booked without you lifting a finger.",
    icon: PhoneIncoming,
    severity: "CRITICAL",
    color: "#ccff00"
  },
];

function SeverityBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    ULTRA: 'bg-[#FF2D55] text-black border-transparent shadow-[0_0_20px_#FF2D55]',
    CRITICAL: 'bg-white/5 text-[#FF2D55] border-[#FF2D55]/30',
    HIGH: 'bg-white/5 text-white/50 border-white/10',
  };
  return (
    <span className={`px-2 py-0.5 rounded-sm text-[7px] font-mono font-black uppercase tracking-[0.2em] border ${colors[level] || colors.HIGH}`}>
      {level}_DETECTION
    </span>
  );
}

export default function ProblemSolution() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-24 md:py-40 bg-black overflow-hidden" id="problems">
      
      {/* Cyberpunk Ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,45,85,0.05)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent" />

      {/* Matrix Text Rain (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[8px] overflow-hidden whitespace-nowrap text-[#FF2D55] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
        {Array.from({length: 20}).map((_, i) => (
          <div key={i} className="animate-matrix" style={{ animationDelay: `${i * 0.5}s`, left: `${i * 5}%`, position: 'absolute' }}>
            01011100101010110101010111101010101011101010<br/>SYSTEM_INFECTED_BY_INEFFICIENCY<br/>REVENUE_LEAK_DETECTED
          </div>
        ))}
      </div>

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        
        <AnimatedSection className="text-center mb-20 lg:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-8">
            <ShieldAlert className="w-3 h-3 text-[#FF2D55]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40">Diagnostic Protocol v41.0</span>
          </div>
          
          <h2 className="text-[2.2rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white italic">
            YOUR BUSINESS IS <br/>
            <span className="text-[#FF2D55] drop-shadow-[0_0_40px_rgba(255,45,85,0.5)]">BLEEDING REVENUE</span>
          </h2>
          <p className="text-[#8A8A9A] text-lg md:text-xl font-body font-light max-w-2xl mx-auto">
            6 System Critical Vulnerabilities Detected. Every 24 hours without remediation costs you 15% in potential conversion.
          </p>
        </AnimatedSection>

        {/* Swipeable Container (Mobile) / Grid (PC) */}
        <div className="relative group">
          {/* Mobile Swiper Indicator */}
          <div className="flex md:hidden items-center justify-between mb-6 px-2">
            <div className="flex gap-2">
              {threats.map((_, i) => (
                <div key={i} className={`h-1 transition-all duration-300 rounded-full ${activeIdx === i ? 'w-8 bg-[#FF2D55]' : 'w-2 bg-white/10'}`} />
              ))}
            </div>
            <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest flex items-center gap-1">
              Swipe to Audit <ArrowRight className="w-2 h-2" />
            </span>
          </div>

          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-12 transition-all"
            onScroll={(e) => {
              const el = e.currentTarget;
              setActiveIdx(Math.round(el.scrollLeft / el.offsetWidth));
            }}
          >
            {threats.map((threat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="min-w-[85vw] md:min-w-0 snap-center"
              >
                <div className={`relative h-full bg-white/[0.01] border border-white/5 group/card transition-all duration-500 p-8 lg:p-10 rounded-[2.5rem] overflow-hidden hover:bg-[#FF2D55]/[0.02] hover:border-[#FF2D55]/30 shadow-2xl`}>
                  
                  {/* Glitch Overlay */}
                  <div className="absolute inset-0 bg-[#FF2D55]/5 opacity-0 group-hover/card:opacity-20 mix-blend-overlay transition-opacity pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover/card:scale-110 transition-transform duration-500 shadow-inner">
                        {threat.emoji}
                      </div>
                      <SeverityBadge level={threat.severity} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-tight group-hover/card:text-[#FF2D55] transition-colors">
                      {threat.title}
                    </h3>
                    
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl lg:text-5xl font-heading font-black text-[#FF2D55] tracking-tighter drop-shadow-[0_0_15px_rgba(255,45,85,0.3)]">
                        {threat.stat}
                      </span>
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{threat.statLabel}</span>
                    </div>

                    <p className="text-[#8A8A9A] text-sm leading-relaxed mb-8 flex-grow">
                      {threat.desc}
                    </p>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                       <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]">Risk_Factor: {i + 1}0%</span>
                       <Zap className="w-3 h-3 text-[#FF2D55] animate-pulse" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover/card:opacity-100 transition-opacity">
                    <motion.div animate={{ rotate: 90 }}>
                      <Zap className="w-4 h-4 text-[#FF2D55]" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Controls (Arrows) - Hidden on mobile */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-20 group-hover:left-4 transition-all opacity-0 group-hover:opacity-100 items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md cursor-pointer hover:bg-[#FF2D55] hover:text-white"
            onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
          </div>
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-20 group-hover:right-4 transition-all opacity-0 group-hover:opacity-100 items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md cursor-pointer hover:bg-[#FF2D55] hover:text-white"
            onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
          >
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Final Trigger */}
        <AnimatedSection className="mt-20 lg:mt-32">
          <div className="max-w-4xl mx-auto glass-premium rounded-[3rem] p-10 lg:p-20 text-center border-[#FF2D55]/20 hover:border-[#FF2D55]/40 transition-all group overflow-hidden relative">
            {/* Animated Glow behind CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D55]/[0.05] rounded-full blur-[120px] pointer-events-none group-hover:bg-[#FF2D55]/[0.1] transition-all" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/20">
                <Skull className="w-4 h-4 text-[#FF2D55]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF2D55] font-black">STRIKE PROTOCOL ACTIVE</span>
              </div>
              
              <h3 className="text-2xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                STOP THE BLEEDING. <br/>
                <span className="italic text-[#FF2D55]">INITIATE AUDIT NOW.</span>
              </h3>
              
              <Link 
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-7 bg-[#FF2D55] text-white font-heading font-black text-base uppercase tracking-widest rounded-2xl shadow-[0_20px_60px_rgba(255,45,85,0.4)] hover:shadow-[0_25px_80px_rgba(255,45,85,0.6)] hover:scale-105 transition-all group"
              >
                <span>Launch Free Diagnostic</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <div className="mt-10 flex flex-wrap justify-center gap-8 opacity-40">
                {['No Commitment', '48hr Results', 'Direct Founder Lead'].map(t => (
                  <span key={t} className="font-mono text-[8px] uppercase tracking-[0.3em] text-white underline underline-offset-4">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes matrix {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-matrix {
          animation: matrix 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
