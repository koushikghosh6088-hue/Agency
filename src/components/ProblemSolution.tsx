'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Globe, Smartphone, Bot, BarChart3, ArrowRight, Zap, Target, LineChart, ShieldCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const businessCases = [
  {
    id: "WEB_ARCHITECTURE",
    icon: Globe,
    clientProblem: "Our website is slow, looks outdated, or we don't even have one.",
    solutionTitle: "High-Performance Web Architecture",
    solutionDesc: "We don't build brochures; we build conversion engines. We engineer sub-400ms loading, high-fidelity platforms that instantly establish your authority and turn visitors into secured revenue.",
    bgGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    benefits: ["Zero-Latency Load Times", "Premium UI/UX Design", "Conversion-Optimized Flow"],
    metric: "99.9%",
    metricLabel: "Uptime SLA",
    metricSecondary: "<400ms",
    metricSecondaryLabel: "Load Speed",
    accentIcon: Zap,
    theme: {
      activeBorderBase: "bg-blue-400",
      activeShadowBase: "shadow-[0_0_15px_rgba(56,189,248,0.5)]",
      activeBgIcon: "bg-blue-500/20",
      activeBorderIcon: "border-blue-500/40",
      activeText: "text-blue-400",
      bgBlur: "bg-blue-500/20",
      pillBg: "bg-blue-500/10",
      pillBorder: "border-blue-500/30",
      pillShadow: "shadow-[0_0_20px_rgba(56,189,248,0.2)]",
      pillHoverBorder: "hover:border-blue-500/50"
    }
  },
  {
    id: "MOBILE_ECOSYSTEM",
    icon: Smartphone,
    clientProblem: "We are losing returning customers because we have absolutely zero mobile presence.",
    solutionTitle: "Seamless Native Apps",
    solutionDesc: "In a mobile-first world, lacking an app means renting your audience. We build seamless, omnichannel native applications for iOS and Android, putting your brand and services directly into your customers' pockets 24/7.",
    bgGradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    benefits: ["iOS & Android Native", "Push Notification Retention", "Offline Capabilities"],
    metric: "3x",
    metricLabel: "Higher Retention",
    metricSecondary: "24/7",
    metricSecondaryLabel: "Pocket Access",
    accentIcon: Target,
    theme: {
      activeBorderBase: "bg-purple-400",
      activeShadowBase: "shadow-[0_0_15px_rgba(192,132,252,0.5)]",
      activeBgIcon: "bg-purple-500/20",
      activeBorderIcon: "border-purple-500/40",
      activeText: "text-purple-400",
      bgBlur: "bg-purple-500/20",
      pillBg: "bg-purple-500/10",
      pillBorder: "border-purple-500/30",
      pillShadow: "shadow-[0_0_20px_rgba(192,132,252,0.2)]",
      pillHoverBorder: "hover:border-purple-500/50"
    }
  },
  {
    id: "NEURAL_AGENTS",
    icon: Bot,
    clientProblem: "We miss hot leads because our team is asleep, off the clock, or just too busy to reply instantly.",
    solutionTitle: "Autonomous AI Agents",
    solutionDesc: "Eliminate the human bottleneck. We deploy custom Neural Voice and Chat Agents trained on your private data. They intercept leads, qualify them, and book appointments instantly, 24 hours a day, 365 days a year.",
    bgGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    benefits: ["Zero Response Delay", "Infinite Scalability", "Human-Like Voice & Chat"],
    metric: "100%",
    metricLabel: "Lead Coverage",
    metricSecondary: "<1s",
    metricSecondaryLabel: "Response Time",
    accentIcon: ShieldCheck,
    theme: {
      activeBorderBase: "bg-emerald-400",
      activeShadowBase: "shadow-[0_0_15px_rgba(52,211,153,0.5)]",
      activeBgIcon: "bg-emerald-500/20",
      activeBorderIcon: "border-emerald-500/40",
      activeText: "text-emerald-400",
      bgBlur: "bg-emerald-500/20",
      pillBg: "bg-emerald-500/10",
      pillBorder: "border-emerald-500/30",
      pillShadow: "shadow-[0_0_20px_rgba(52,211,153,0.2)]",
      pillHoverBorder: "hover:border-emerald-500/50"
    }
  },
  {
    id: "GROWTH_LOOPS",
    icon: BarChart3,
    clientProblem: "We are burning thousands on digital ads but not seeing any actual return on investment (ROI).",
    solutionTitle: "Algorithmic Digital Marketing",
    solutionDesc: "Stop guessing with your ad spend. We implement data-driven, algorithmic growth loops. We track every click, optimize for the lowest Customer Acquisition Cost (CAC), and put your brand exactly where the highest-intent buyers are.",
    bgGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    benefits: ["Laser-Targeted Audiences", "A/B Multivariate Testing", "Data-Backed Scaling"],
    metric: "+314%",
    metricLabel: "Avg. ROI Increase",
    metricSecondary: "Data",
    metricSecondaryLabel: "Driven Decisions",
    accentIcon: LineChart,
    theme: {
      activeBorderBase: "bg-amber-400",
      activeShadowBase: "shadow-[0_0_15px_rgba(251,191,36,0.5)]",
      activeBgIcon: "bg-amber-500/20",
      activeBorderIcon: "border-amber-500/40",
      activeText: "text-amber-400",
      bgBlur: "bg-amber-500/20",
      pillBg: "bg-amber-500/10",
      pillBorder: "border-amber-500/30",
      pillShadow: "shadow-[0_0_20px_rgba(251,191,36,0.2)]",
      pillHoverBorder: "hover:border-amber-500/50"
    }
  }
];

export default function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-cycle through the cases until the user interacts
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % businessCases.length);
    }, 6000); // 6 seconds per card
    return () => clearInterval(timer);
  }, [isAutoScrolling]);

  const activeCase = businessCases[activeIndex];
  const ActiveIcon = activeCase.icon;
  const AccentIcon = activeCase.accentIcon;

  return (
    <section className="relative py-24 md:py-40 bg-black overflow-hidden border-t border-white/5">
      {/* Soft unified background glow */}
      <div className="absolute inset-x-0 -top-40 h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1550px] mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 backdrop-blur-md">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">Growth & Infrastructure Diagnosis</span>
           </div>
           
           <h2 className="text-[2.8rem] md:text-[5rem] lg:text-[6rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6">
              STOP BLEEDING <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">REVENUE</span>
           </h2>
           <p className="font-mono text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wider">
              We identify the exact bottlenecks holding your business back and deploy elite engineering to turn them into your greatest advantages.
           </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
          
          {/* Left Column: Client Problems (Plain English) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            {businessCases.map((buildCase, i) => {
               const isActive = i === activeIndex;
               const CaseIcon = buildCase.icon;
               
               return (
                 <div 
                   key={buildCase.id}
                   onClick={() => {
                     setActiveIndex(i);
                     setIsAutoScrolling(false); // Stop auto-cycle when user clicks
                   }}
                   className={`relative cursor-pointer transition-all duration-500 overflow-hidden rounded-[2rem] border backdrop-blur-xl group ${
                     isActive 
                       ? `bg-white/[0.08] border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] scale-[1.02]` 
                       : 'bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                   }`}
                 >
                    {/* Active Gradient Border Accent */}
                    {isActive && (
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${buildCase.theme.activeBorderBase} ${buildCase.theme.activeShadowBase}`} />
                    )}

                    <div className="p-6 md:p-8 flex items-start gap-5">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors duration-500 ${
                         isActive ? `${buildCase.theme.activeBgIcon} ${buildCase.theme.activeBorderIcon}` : 'bg-white/5 border-white/10 group-hover:bg-white/10'
                       }`}>
                           <CaseIcon className={`w-6 h-6 transition-colors duration-500 ${isActive ? buildCase.theme.activeText : 'text-white/40'}`} />
                       </div>
                       
                       <div className="flex-1">
                           <span className={`font-mono text-[10px] uppercase tracking-widest block mb-2 font-bold transition-colors duration-500 ${isActive ? buildCase.theme.activeText : 'text-white/30'}`}>
                             The Problem
                           </span>
                           <h3 className={`text-lg md:text-xl font-medium tracking-tight leading-snug transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                               "{buildCase.clientProblem}"
                           </h3>
                       </div>
                    </div>
                 </div>
               );
            })}
          </div>

          {/* Right Column: The "Wow" Lucrative Solution Display */}
          <div className="lg:col-span-7 relative h-full min-h-[500px] lg:min-h-0">
             <div className="sticky top-32 h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full rounded-[3rem] border border-white/10 overflow-hidden flex flex-col justify-between"
                  >
                     {/* Dynamic Background Gradients (Zero Lag styling) */}
                     <div className="absolute inset-0 bg-[#050505] z-0" />
                     <div className={`absolute inset-0 bg-gradient-to-br ${activeCase.bgGradient} z-0 opacity-50`} />
                     <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${activeCase.theme.bgBlur} blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none z-0`} />
                     
                     {/* Premium Glassmorphic Overlay */}
                     <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[2px] z-10" />

                     {/* Top Section: Graphical Impact */}
                     <div className="relative z-20 p-10 md:p-14 pb-0 flex-1">
                        <div className="flex items-center justify-between mb-10">
                           <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${activeCase.theme.pillBorder} ${activeCase.theme.pillBg} backdrop-blur-md ${activeCase.theme.pillShadow}`}>
                              <span className={`w-2 h-2 rounded-full ${activeCase.theme.activeBorderBase} animate-pulse`} />
                              <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${activeCase.theme.activeText} font-black`}>Joint_Engine Fix</span>
                           </div>
                           <ActiveIcon className={`w-16 h-16 ${activeCase.theme.activeText} opacity-20`} />
                        </div>

                        <h3 className="text-[2.5rem] md:text-[3.5rem] font-heading font-black leading-[0.9] tracking-tighter text-white uppercase mb-6">
                           {activeCase.solutionTitle}
                        </h3>
                        <p className="text-white/70 font-mono text-sm md:text-base leading-relaxed max-w-lg mb-10">
                           {activeCase.solutionDesc}
                        </p>

                        {/* Features List */}
                        <div className="space-y-4">
                           {activeCase.benefits.map((benefit, idx) => (
                             <div key={idx} className="flex items-center gap-4">
                               <div className={`w-6 h-6 rounded-full flex items-center justify-center ${activeCase.theme.activeBgIcon} border ${activeCase.theme.activeBorderIcon}`}>
                                 <ArrowRight className={`w-3 h-3 ${activeCase.theme.activeText}`} />
                               </div>
                               <span className="font-mono text-sm text-white/90 uppercase tracking-widest">{benefit}</span>
                             </div>
                           ))}
                        </div>
                     </div>

                     {/* Bottom Section: Floating "Lucrative" Metrics */}
                     <div className="relative z-20 mt-12 p-8 md:p-10 border-t border-white/5 bg-black/40 backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Primary Metric Pill */}
                            <div className={`flex items-center gap-6 glass-panel p-5 rounded-3xl border ${activeCase.theme.pillBorder} relative overflow-hidden group ${activeCase.theme.pillHoverBorder} transition-colors`}>
                               <div className={`absolute top-0 right-0 w-32 h-32 ${activeCase.theme.pillBg} blur-[40px] pointer-events-none group-hover:opacity-100 transition-opacity`} />
                               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${activeCase.theme.pillBg} border ${activeCase.theme.pillBorder} shrink-0`}>
                                  <AccentIcon className={`w-6 h-6 ${activeCase.theme.activeText}`} />
                               </div>
                               <div>
                                  <div className={`text-3xl font-heading font-black tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
                                    {activeCase.metric}
                                  </div>
                                  <div className={`font-mono text-[10px] uppercase tracking-widest ${activeCase.theme.activeText} mt-1 opacity-80`}>
                                    {activeCase.metricLabel}
                                  </div>
                               </div>
                            </div>

                            {/* Secondary Metric Pill */}
                            <div className="flex items-center gap-6 glass-panel p-5 rounded-3xl border border-white/5 relative overflow-hidden">
                               <div>
                                  <div className="text-3xl font-heading font-black tracking-tighter text-white/80">
                                    {activeCase.metricSecondary}
                                  </div>
                                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">
                                    {activeCase.metricSecondaryLabel}
                                  </div>
                               </div>
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
