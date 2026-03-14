'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Brain, BarChart3, Zap, Shield, Globe } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: "High-Fidelity Web Systems",
    subtitle: "Conversion Supremacy",
    description: "In the digital frontier, milliseconds are the difference between a lead and a lost opportunity. We architect sub-400ms neural ecosystems that aren't just websites—they're high-performance conversion engines designed for global dominance.",
    icon: Globe,
    stats: [
      { label: 'Avg Speed Increase', val: '320%' },
      { label: 'Conversion Lift', val: '45%+' },
    ],
    color: "from-blue-600 to-cyan-400",
    accent: "blue-400"
  },
  {
    id: 2,
    title: "Autonomous Operations",
    subtitle: "Neural Scalability",
    description: "Scale your business without the overhead. Our autonomous agents handle lead qualification, customer support, and complex logic 24/7. It's not just automation; it's an intelligent workforce that never sleeps and always learns.",
    icon: Brain,
    stats: [
      { label: 'Operating Cost', val: '-60%' },
      { label: 'Response Time', val: 'INSTANT' },
    ],
    color: "from-purple-600 to-rose-400",
    accent: "purple-400"
  },
  {
    id: 3,
    title: "Algorithmic Growth",
    subtitle: "Data-Driven Intelligence",
    description: "Ditch the guesswork. We deploy data-driven targeting protocols and viral content loops that put your brand exactly where your audience lives. Stop chasing leads; start being the destination they can't ignore.",
    icon: BarChart3,
    stats: [
      { label: 'Ad Performance', val: '+210%' },
      { label: 'ROAS Average', val: '8.4x' },
    ],
    color: "from-emerald-600 to-lime-400",
    accent: "emerald-400"
  },
  {
    id: 4,
    title: "Omnichannel Dominance",
    subtitle: "Mobile & Web Power",
    description: "Your clients are everywhere; your digital presence should be too. We create seamless, platform-agnostic experiences that adapt liquidly from a 4K desktop display to the smartphone in their pocket.",
    icon: Rocket,
    stats: [
      { label: 'Mobile Retention', val: '+185%' },
      { label: 'Cross-platform UX', val: '100%' },
    ],
    color: "from-sky-600 to-indigo-400",
    accent: "sky-400"
  },
  {
    id: 5,
    title: "Exponential ROI",
    subtitle: "Automated Lead Gen",
    description: "We don't sell websites, we install revenue plumbing. Our interconnected systems automatically capture, nurture, and route highly qualified leads straight to your calendar, turning cold traffic into booked deals.",
    icon: Zap,
    stats: [
      { label: 'Lead Volume', val: '3x-5x' },
      { label: 'System Uptime', val: '99.9%' },
    ],
    color: "from-amber-600 to-orange-400",
    accent: "amber-400"
  }
];

export default function WhyChooseUs() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Create the scroll effect linking to the container's scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal translation based on scroll progress
  // -80% translates moving exactly 4 full card widths (or viewport percentages)
  // We use -80% because there are 5 cards, we want to scroll 4 widths sideways
  // Adjust based on your sizing container constraints 
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    // Make the container tall so someone has to scroll down significantly
    // to map mapping scrollY to translateX
    <section ref={targetRef} className="relative h-[450vh] bg-black transition-colors duration-1000">
      <div className="sticky top-0 h-screen flex flex-col items-start overflow-hidden py-12 md:py-24">
        
        {/* Header stays pinned at top of viewport */}
        <div className="w-full max-w-[1550px] mx-auto px-6 mb-8 md:mb-16 shrink-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6 backdrop-blur-md"
          >
            <Zap className="w-3 h-3 text-[#0ea5e9] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0ea5e9]">Why Partner With Us?</span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[3rem] md:text-[5.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase">
              THE <span className="gradient-text italic text-[#0ea5e9]">NEW STANDARD</span><br/>OF GROWTH
            </h2>
            <p className="font-mono text-xs md:text-sm text-white/40 uppercase tracking-[0.2em] max-w-sm text-left md:text-right">
              Every system below represents a non-negotiable pillar of your digital dominance.
            </p>
          </div>
        </div>

        {/* The scrolling track of cards */}
        <div className="relative flex-1 w-full flex items-center">
          <motion.div style={{ x }} className="flex gap-6 md:gap-12 pl-6 md:pl-24 pr-[50vw]">
            {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index + 1} />
            ))}
          </motion.div>
        </div>
        
        {/* Progress bar at the bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#0ea5e9] to-blue-400"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
}

function Card({ card, index }: { card: any; index: number }) {
  return (
    <div className="w-[85vw] md:w-[600px] lg:w-[800px] h-[60vh] md:h-[550px] shrink-0 relative flex items-center justify-center">
      <div
        className="relative w-full h-full rounded-[2.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden glass-premium group will-change-transform shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between"
      >
        {/* Background Accents */}
        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-15 transition-opacity duration-700`} />
        
        {/* Top Section */}
        <div className="relative z-10 p-6 md:p-10 lg:p-12 h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6 md:mb-10">
              <div className="relative inline-block">
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-${card.accent}/20 flex items-center justify-center border border-${card.accent}/10 relative z-10`}>
                    <card.icon className={`w-6 h-6 md:w-10 md:h-10 text-${card.accent}`} />
                </div>
                <div className={`absolute -inset-4 bg-${card.accent}/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              </div>
              
              <div className="flex font-heading font-black text-white/5 text-[5rem] md:text-[8rem] leading-none absolute top-4 right-8 select-none pointer-events-none">
                0{index}
              </div>
            </div>
            
            <h3 className="text-[1.75rem] md:text-[3rem] lg:text-[4rem] font-heading font-black text-white leading-[0.9] tracking-tighter uppercase mb-2">
              {card.title}
            </h3>
            <div className={`font-mono text-xs md:text-sm text-${card.accent} uppercase tracking-widest mb-6 font-bold`}>
              {card.subtitle}
            </div>
            
            <p className="text-white/60 font-mono text-xs md:text-sm lg:text-base leading-relaxed max-w-lg">
              {card.description}
            </p>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8">
            {card.stats.map((stat: any) => (
              <div key={stat.label} className="glass-panel p-4 md:p-6 lg:p-8 rounded-[1.5rem] md:rounded-[2rem] border-white/5 group-hover:border-white/10 transition-all">
                  <div className="text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-1 md:mb-2">{stat.label}</div>
                  <div className="text-white font-heading font-black text-xl md:text-3xl lg:text-4xl tracking-tighter">{stat.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
