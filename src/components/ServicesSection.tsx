'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Zap, Target, Bot, Smartphone, Globe, Cog, 
  CheckCircle, ArrowUpRight, MessageSquare, Phone, TrendingUp,
  Activity, Layers, Database, Cpu
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";

const services = [
  {
    id: 'web',
    title: 'Website Development',
    headline: '"A Website That Turns Visitors Into Paying Customers"',
    description: 'Your website is your #1 salesperson. We build fast, stunning websites that load in under 2 seconds, look perfect on every device, and are designed to convert — not just look pretty.',
    icon: Globe,
    link: '/services#web',
    accent: '#0066ff',
    metric: '< 2s',
    metricLabel: 'Load Speed',
    pattern: 'nodes',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    headline: '"Put Your Business Directly In Your Customers\' Pockets"',
    description: 'Keep your customers one tap away. We build apps for both iPhone and Android that drive repeat business, enable easy booking or ordering, and make you look like the most professional option in your market.',
    icon: Smartphone,
    link: '/services#mobile',
    accent: '#0066ff',
    metric: 'iOS/Android',
    metricLabel: 'Native Core',
    pattern: 'grid',
  },
  {
    id: 'messaging',
    title: 'AI Chat Agent',
    headline: '"Never Miss A Lead — Even At 2am"',
    description: 'Our AI replies to customer messages instantly on your website, WhatsApp and Instagram — 24/7. It answers questions, captures lead details and books appointments automatically. Like a salesperson who never sleeps.',
    icon: MessageSquare,
    link: '/ai-solutions#messaging',
    accent: '#0066ff',
    metric: '24/7',
    metricLabel: 'Active Engagement',
    pattern: 'chat',
  },
  {
    id: 'calling',
    title: 'AI Voice Agent',
    headline: '"An AI That Calls Your Leads And Books Appointments — Automatically"',
    description: 'New lead comes in? Our AI calls them within 60 seconds, has a natural conversation, qualifies them and books them straight into your calendar. Your sales pipeline runs itself.',
    icon: Phone,
    link: '/ai-solutions#calling',
    accent: '#0066ff',
    metric: '60sec',
    metricLabel: 'Lead Response',
    pattern: 'wave',
  },
  {
    id: 'automation',
    title: 'Business Automation',
    headline: '"Stop Doing The Same Tasks Over And Over"',
    description: 'Invoices, follow-ups, reminders, data entry — all running on autopilot. We automate the repetitive work so your team can focus on what actually grows the business. Most clients save 15–20 hours every week.',
    icon: Cog,
    link: '/ai-solutions#automation',
    accent: '#0066ff',
    metric: '20Hr+',
    metricLabel: 'Weekly Saved',
    pattern: 'cog',
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    headline: '"Get Found By Customers Already Searching For You"',
    description: 'People are searching Google for exactly what you sell right now. We make sure they find you first — not your competitor. More visibility, more clicks, more paying customers.',
    icon: Target,
    link: '/services#seo',
    accent: '#0066ff',
    metric: 'Top 3',
    metricLabel: 'Google Rank',
    pattern: 'target',
  },
];

function PatternBackground({ type }: { type: string }) {
  if (type === 'nodes') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700" viewBox="0 0 100 100">
        <circle cx="20" cy="20" r="1" fill="currentColor" />
        <circle cx="80" cy="20" r="1" fill="currentColor" />
        <circle cx="50" cy="50" r="1" fill="currentColor" />
        <circle cx="20" cy="80" r="1" fill="currentColor" />
        <circle cx="80" cy="80" r="1" fill="currentColor" />
        <line x1="20" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" />
        <line x1="80" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" />
        <line x1="20" y1="80" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" />
        <line x1="80" y1="80" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" />
      </svg>
    );
  }
  if (type === 'grid') {
    return (
      <div className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700" 
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
    );
  }
  if (type === 'chat') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700" viewBox="0 0 100 100">
        <rect x="10" y="20" width="30" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="60" y="40" width="30" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="20" y="60" width="30" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    );
  }
  if (type === 'wave') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700" viewBox="0 0 100 100">
        <path d="M0 50 Q 25 20, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M0 60 Q 25 30, 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M0 40 Q 25 10, 50 40 T 100 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    );
  }
  if (type === 'cog') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <rect key={deg} x="48" y="30" width="4" height="8" fill="currentColor" transform={`rotate(${deg} 50 50)`} />
        ))}
      </svg>
    );
  }
  if (type === 'target') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    );
  }
  return null;
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        className="group relative h-full glass-premium rounded-[3rem] border-white/5 hover:border-[#0066ff]/50 transition-all duration-500 flex flex-col p-10 overflow-hidden shadow-2xl"
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Patterns & Effects */}
        <div className="absolute inset-0 z-0 text-[#0066ff]">
          <PatternBackground type={service.pattern} />
        </div>

        {/* Dynamic Scanning Beam */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066ff]/10 to-transparent z-0 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Glow Foundation */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#0066ff]/5 blur-[100px] rounded-full group-hover:bg-[#0066ff]/20 transition-all duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Card Identifier */}
          <div className="absolute top-8 right-8 font-mono text-[8px] text-white/20 uppercase tracking-[0.4em]">
            Protocol_S-{String(index + 1).padStart(2, '0')}
          </div>

          {/* Icon Section */}
          <div className="mb-10 relative inline-block">
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 text-white/50 group-hover:bg-[#0066ff] group-hover:text-black transition-all duration-500 shadow-xl"
              animate={isHovered ? { rotate: [0, 10, -10, 0], scale: 1.1 } : {}}
            >
              <service.icon className="w-7 h-7" />
            </motion.div>
            
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute -inset-2 bg-[#0066ff]/20 blur-xl rounded-full z-0"
                />
              )}
            </AnimatePresence>
          </div>

          <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter mb-2 leading-tight group-hover:text-glow transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-[#0066ff] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-6 italic leading-relaxed group-hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.6)] transition-all">
              {service.headline}
            </p>
            <p className="text-white/40 font-body text-sm md:text-base leading-relaxed mb-10 group-hover:text-white/70 transition-colors duration-500">
              {service.description}
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-2xl font-heading font-black text-white group-hover:text-[#0066ff] transition-colors leading-none">
                {service.metric}
              </div>
              <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] font-bold">
                {service.metricLabel}
              </div>
            </div>
            
            <Link href={service.link} className="relative group/btn">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 group-hover/btn:bg-[#0066ff] group-hover/btn:text-black transition-all duration-500 group-hover/btn:scale-110 shadow-lg">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              {/* Secondary Pulse Ring */}
              <motion.div 
                className="absolute inset-0 border border-[#0066ff] rounded-2xl pointer-events-none"
                animate={isHovered ? { scale: [1, 1.3], opacity: [0.5, 0] } : { opacity: 0 }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </Link>
          </div>
        </div>

        {/* Shimmer Border Overlay */}
        <div className="absolute inset-0 border border-white/5 rounded-[3rem] group-hover:border-[#0066ff]/30 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </AnimatedSection>
  );
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Web Architecture",
    date: "Core",
    content: "High-speed web ecosystems engineered for conversion and absolute performance.",
    category: "Web",
    icon: Globe,
    relatedIds: [2, 3],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Mobile Edge",
    date: "Core",
    content: "Native experiences that bridge the gap between business and user mobility.",
    category: "Mobile",
    icon: Smartphone,
    relatedIds: [1, 5],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "Neural Agents",
    date: "AI",
    content: "Autonomous intelligence handling customer inquiries and sales 24/7.",
    category: "AI",
    icon: Bot,
    relatedIds: [1, 4],
    status: "completed",
    energy: 95,
  },
  {
    id: 4,
    title: "Flow Logic",
    date: "Automation",
    content: "Self-optimizing business engines that handle your repetitive workflows.",
    category: "Systems",
    icon: Cog,
    relatedIds: [3, 2],
    status: "in-progress",
    energy: 85,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden z-10">
      {/* Background Radiance */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#0066ff]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#0066ff]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,102,255,0.1)]">
            <Zap className="w-4 h-4 text-[#0066ff]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0066ff] font-black">Performance Protocols</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[4.5rem] font-heading font-black leading-[0.9] tracking-tighter uppercase mb-8 text-white">
            WE ENGINEER <br className="hidden md:block" />
            <span className="text-[#0066ff] italic drop-shadow-[0_0_30px_rgba(0,102,255,0.3)]">LIMITLESS GROWTH</span>
          </h2>
          <p className="text-[#8A8A9A] text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
            High-converting digital ecosystems, autonomous AI agents, and intelligent automation built for those who demand elite performance.
          </p>
        </AnimatedSection>

        {/* Services Grid (Premium Overhauled Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 relative z-10">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Neural Ecosystem Visual */}
        <AnimatedSection className="mb-32">
          <div className="glass-premium rounded-[4rem] border-white/5 overflow-hidden p-12 md:p-24 relative bg-black/40 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      Protocol: Ecosystem_Harmony
                   </div>
                   <h3 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-[0.85]">
                      OUR <span className="text-[#0066ff] italic">AI-DRIVEN</span> <br/>ECOSYSTEM
                   </h3>
                   <p className="text-[#8A8A9A] text-xl leading-relaxed font-light">
                      We don't just build separate tools. We build integrated digital ecosystems where every node communicates and optimizes your business in real-time.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Real-time Data Sync', 'Autonomous Decision Nodes', 'Cross-Platform Harmony', 'Neural Processing'].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-white/60 font-mono uppercase text-[10px] tracking-wider border border-white/5 bg-white/[0.02] p-4 rounded-2xl hover:border-[#0066ff]/30 transition-all cursor-default group/item">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shadow-[0_0_10px_rgba(0,102,255,0.5)] group-hover/item:scale-150 transition-transform" /> {item}
                        </div>
                      ))}
                   </div>
                </div>
                <div className="relative h-[500px] flex items-center justify-center">
                   <RadialOrbitalTimeline timelineData={timelineData} />
                </div>
             </div>
          </div>
        </AnimatedSection>

        {/* High-Impact Bottom CTA */}
        <AnimatedSection className="text-center">
          <div className="max-w-4xl mx-auto p-12 md:p-20 bg-gradient-to-br from-[#0066ff]/10 to-transparent border border-[#0066ff]/20 rounded-[4rem] relative overflow-hidden group">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             
             <div className="relative z-10 space-y-8">
               <h4 className="text-2xl md:text-4xl font-heading font-black text-white uppercase italic leading-[1] tracking-tighter">
                  NOT SURE WHAT YOU NEED?<br/>
                  <span className="text-[#0066ff]">BOOK A FREE 30-MIN CALL</span>
               </h4>
               <p className="text-[#8A8A9A] text-lg font-body max-w-xl mx-auto">
                 We'll look at your business and tell you exactly what digital tools will make you the most money. No strings attached.
               </p>
               <div className="pt-4">
                 <Link 
                    href="#booking"
                    className="inline-flex items-center gap-4 px-12 py-6 bg-[#0066ff] text-black font-heading font-black text-sm uppercase tracking-widest hover:bg-white transition-all rounded-[2rem] shadow-[0_15px_40px_rgba(0,102,255,0.4)] hover:shadow-[0_20px_60px_rgba(0,102,255,0.6)]"
                 >
                    BOOK STRATEGY CALL <ArrowRight className="w-5 h-5" />
                 </Link>
               </div>
               <p className="text-[#8A8A9A] font-mono text-[10px] uppercase tracking-[0.4em]">
                  ⚡ Protocol // Strategy_Audit_2026
               </p>
             </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
