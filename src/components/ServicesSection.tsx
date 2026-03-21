'use client';

import { useState, useRef, useMemo, MouseEvent } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ArrowRight, Zap, Target, Bot, Smartphone, Globe, Cog, 
  ArrowUpRight, MessageSquare, Phone, Activity, Cpu, 
  Search, BarChart3, Radio, Share2, Layers, ShieldCheck, X
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";

const services = [
  {
    id: 'web',
    title: 'Website Development',
    headline: '"Engineered for Conversion"',
    description: 'Elite web ecosystems that load in < 2s. We build high-performance storefronts and corporate hubs designed to turn cold traffic into loyal customers.',
    icon: Globe,
    accent: '#0066ff',
    secondary: '#00ccff',
    colorName: 'Cyber Blue',
    details: 'Our web tech stack includes Next.js 15, Turbopack, and high-fidelity Framer Motion animations. Every site is optimized for Core Web Vitals and accessibility.',
    metric: '< 2s',
    metricLabel: 'Load Speed',
    object3d: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <rect x="30" y="35" width="40" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M30 40 H70" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="5" fill="currentColor" className="animate-pulse" />
      </svg>
    )
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    headline: '"One Tap Away From Revenue"',
    description: 'Native iOS & Android experiences that bridge the gap between business and user mobility. Keep your brand directly in your customer\'s pockets.',
    icon: Smartphone,
    accent: '#8B5CF6',
    secondary: '#D946EF',
    colorName: 'Neon Purple',
    details: 'We specialize in React Native and Flutter for cross-platform excellence. Integrated with push notifications, biometric auth, and offline capabilities.',
    metric: 'Native',
    metricLabel: 'Cross-Platform',
    object3d: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <rect x="35" y="20" width="30" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="72" r="2" fill="currentColor" />
        <rect x="40" y="30" width="20" height="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
      </svg>
    )
  },
  {
    id: 'messaging',
    title: 'AI Chat Agent',
    headline: '"24/7 Intelligent Support"',
    description: 'Autonomous AI agents that respond instantly on WhatsApp, Web, and Socials. Qualify leads and book appointments while you sleep.',
    icon: MessageSquare,
    accent: '#10B981',
    secondary: '#34D399',
    colorName: 'Emerald AI',
    details: 'Powered by GPT-4 and custom RAG pipelines. Our agents learn your business knowledge and interact with human-like empathy and precision.',
    metric: '24/7',
    metricLabel: 'Active Engagement',
    object3d: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <path d="M20 30 H80 V70 H40 L20 90 V30" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="40" cy="50" r="2" fill="currentColor" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
        <circle cx="60" cy="50" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'calling',
    title: 'AI Voice Agent',
    headline: '"Conversational Sales Engines"',
    description: 'Human-like AI that calls leads within 60s of inquiry. It qualifies prospects and books them into your calendar without a single human touch.',
    icon: Phone,
    accent: '#F43F5E',
    secondary: '#FB7185',
    colorName: 'Ruby Logic',
    details: 'Low-latency voice synthesis with realistic prosody. Capable of handling outbound cold outreach or inbound service inquiries at scale.',
    metric: '60sec',
    metricLabel: 'Lead Response',
    object3d: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <path d="M30 50 Q 40 20, 50 50 T 70 50" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M30 60 Q 40 30, 50 60 T 70 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.2" />
      </svg>
    )
  },
  {
    id: 'automation',
    title: 'Business Automation',
    headline: '"Eradicate Repetitive Work"',
    description: 'Self-optimizing workflows for invoices, reminders, and data sync. We save our clients an average of 15–20 hours per week.',
    icon: Cog,
    accent: '#F59E0B',
    secondary: '#FBBF24',
    colorName: 'Amber Flux',
    details: 'We connect your ecosystem via custom APIs and automation tools. From CRM deep-sync to autonomous financial reporting.',
    metric: '20Hr+',
    metricLabel: 'Time Saved',
    object3d: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
        {[0, 60, 120, 180, 240, 300].map(deg => (
          <rect key={deg} x="48" y="30" width="4" height="6" fill="currentColor" transform={`rotate(${deg} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    id: 'seo',
    title: 'SEO & Growth',
    headline: '"Dominate The Search Results"',
    description: 'Data-driven marketing that puts you where the customers are. We focus on ROI-positive traffic that actually converts into revenue.',
    icon: Target,
    accent: '#06B6D4',
    secondary: '#22D3EE',
    colorName: 'Cyan Surge',
    details: 'Technical SEO audits, backlink architecture, and content clusters. We drive organic authority that lasts for years, not days.',
    metric: 'ROI+',
    metricLabel: 'Market Authority',
    object3d: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D Tilt Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  function handleMouseMove(e: MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <AnimatedSection delay={index * 0.1} className="h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
        className={`
          group relative h-full bg-[#0A0A0C] rounded-[3rem] border transition-all duration-700 flex flex-col p-10 overflow-hidden 
          ${isHovered ? `shadow-[0_40px_100px_rgba(0,0,0,0.8)]` : 'border-white/5'}
        `}
      >
        {/* Colorful Gradient Hub (Fills card on hover) */}
        <div 
          className="absolute inset-0 transition-opacity duration-1000 opacity-0 group-hover:opacity-10 pointer-events-none" 
          style={{ background: `radial-gradient(circle at center, ${service.accent}, ${service.secondary}, transparent 70%)` }}
        />
        
        {/* Dynamic Accent Border */}
        <div 
          className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none rounded-[3rem] border-[3px]" 
          style={{ borderColor: `${service.accent}66` }} 
        />
        
        {/* Intense Glow Hub (Mouse-Responsive) */}
        <div 
          className="absolute w-96 h-96 blur-[130px] rounded-full transition-opacity duration-700 opacity-0 group-hover:opacity-30 pointer-events-none" 
          style={{ 
            backgroundColor: service.secondary,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />

        <div className="relative z-10 flex flex-col h-full pointer-events-none" style={{ transform: "translateZ(60px)" }}>
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div 
              className="w-20 h-20 rounded-[2.5rem] flex items-center justify-center border-2 transition-all duration-700"
              style={{ 
                backgroundColor: isHovered ? `${service.accent}44` : 'rgba(255,255,255,0.03)',
                borderColor: isHovered ? service.secondary : 'rgba(255,255,255,0.05)',
                color: isHovered ? '#fff' : 'rgba(255,255,255,0.4)',
                boxShadow: isHovered ? `0 0 40px ${service.accent}88` : 'none'
              }}
            >
              <service.icon className="w-9 h-9" />
            </div>
            <div className="flex flex-col items-end">
               <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.5em] mb-1 font-black">PROTO_{service.id.toUpperCase()}</span>
               <div className="h-1.5 w-12 rounded-full" style={{ background: `linear-gradient(to right, ${service.accent}, ${service.secondary})` }} />
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-1000" style={{ color: service.secondary }}>
            {service.object3d}
          </div>

          <div className="flex-grow">
            <h3 
              className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-none transition-all duration-500"
              style={{ 
                textShadow: isHovered ? `0 0 20px ${service.accent}aa` : 'none'
              }}
            >
              {service.title}
            </h3>
            <p className="font-heading font-bold text-xs uppercase tracking-[0.2em] mb-8 italic" style={{ color: service.secondary }}>
              {service.headline}
            </p>
            <p className="text-white/50 font-body text-base md:text-lg leading-relaxed mb-10 group-hover:text-white/90 transition-colors duration-500 max-w-[90%]">
              {service.description}
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between mt-auto">
            <div>
               <div className="text-3xl font-heading font-black text-white leading-none mb-2" style={{ color: isHovered ? service.accent : '#fff' }}>
                 {service.metric}
               </div>
               <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-black">
                 {service.metricLabel}
               </div>
            </div>
            
            <div 
              className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-500"
              style={{
                backgroundColor: isHovered ? service.accent : 'rgba(255,255,255,0.03)',
                borderColor: isHovered ? service.secondary : 'rgba(255,255,255,0.1)',
                color: isHovered ? '#000' : 'rgba(255,255,255,0.2)',
                transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'none'
              }}
            >
               <ArrowUpRight className="w-7 h-7" />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const timelineData: TimelineItem[] = useMemo(() => services.map((s, i) => ({
    id: i + 1,
    title: s.title,
    date: s.colorName,
    content: s.headline + " - " + s.description,
    category: "PROTOCOL",
    icon: s.icon,
    relatedIds: [(i + 1) % services.length + 1, (i - 1 + services.length) % services.length + 1],
    status: "completed",
    energy: 100 - (i * 5),
    color: s.accent
  })), []);

  return (
    <section id="services" className="relative py-24 md:py-48 bg-[#040406] overflow-hidden">
      
      {/* Heavy Cyber Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.02)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_30px_rgba(255,255,255,0.05)]" />

      <div className="max-w-[1700px] mx-auto px-6 relative z-10">
        
        {/* Simplified Header */}
        <AnimatedSection className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
                <Layers className="w-4 h-4 text-[#0066ff]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 font-black">SERVICES_CATALOG_v2.0</span>
              </div>
              <h2 className="text-[3.5rem] md:text-[7rem] font-heading font-black leading-[0.8] tracking-tighter uppercase text-white italic">
                LIMITLESS <br/>
                <span className="text-[#0066ff] drop-shadow-[0_0_60px_rgba(0,102,255,0.4)]">ENGINEERING</span>
              </h2>
            </div>
            <p className="text-[#8A8A9A] text-xl md:text-2xl font-body font-light max-w-xl leading-relaxed border-l-2 border-white/10 pl-10 md:mb-4">
              We don&apos;t build projects. We build <span className="text-white font-bold">digital monopolies</span> using autonomous intelligence and elite system architecture.
            </p>
          </div>
        </AnimatedSection>

        {/* 3D Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-48">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Optimized Orbital Services Hub (Interactive Circular Animation) */}
        <AnimatedSection className="mt-32">
          <div className="relative rounded-[5rem] overflow-hidden border border-white/5 bg-black/40 backdrop-blur-3xl p-12 md:p-32 shadow-[0_100px_200px_rgba(0,0,0,0.8)]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.03)_0%,transparent_70%)] pointer-events-none" />
             
             {/* Center Labeling */}
             <div className="text-center mb-20 relative z-20">
                <h3 className="text-4xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6">
                   INTEGRATED <span className="text-[#0066ff] italic">HARMONY_</span>
                </h3>
                <p className="text-[#8A8A9A] text-xl font-mono uppercase tracking-[0.4em] font-black opacity-30">All Nodes Responsive Upon Synchronization</p>
             </div>

             <div className="relative h-[600px] flex items-center justify-center">
                <div className="scale-90 md:scale-125 lg:scale-150 transform-gpu">
                   <RadialOrbitalTimeline timelineData={timelineData} />
                </div>
             </div>
          </div>
        </AnimatedSection>

        {/* Tactical Footer CTA */}
        <AnimatedSection className="mt-48">
          <div className="flex flex-col items-center text-center">
             <Link href="#contact" className="group relative">
                <div className="absolute -inset-10 bg-[#0066ff]/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative flex flex-col items-center gap-10">
                   <div className="w-32 h-32 rounded-full bg-[#0066ff] flex items-center justify-center shadow-[0_0_80px_rgba(0,102,255,0.5)] group-hover:scale-110 transition-all duration-700">
                      <Zap className="w-14 h-14 text-black fill-current" />
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter">FINALIZE YOUR STRIKE</h4>
                      <p className="font-mono text-sm text-[#0066ff] uppercase tracking-[0.6em] font-black">SYSTEMS_READY_FOR_DEPLOYMENT</p>
                   </div>
                </div>
             </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
