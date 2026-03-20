'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Bot, Phone, Cog, ArrowRight, Zap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Ultra-fast websites that rank on Google and convert visitors into paying customers.',
    badge: null,
    link: '/services#web',
    accent: '#0ea5e9',
    metric: '< 400ms',
    metricLabel: 'Load Time',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'iOS & Android apps that keep your brand in your customer\u2019s pocket 24/7.',
    badge: null,
    link: '/services#mobile',
    accent: '#a855f7',
    metric: '60 FPS',
    metricLabel: 'Smooth',
  },
  {
    icon: Monitor,
    title: 'Web App & Dashboard',
    description: 'Custom platforms, admin panels and CRMs built exactly for your workflow.',
    badge: null,
    link: '/services#webapp',
    accent: '#06b6d4',
    metric: 'Custom',
    metricLabel: 'Built For You',
  },
  {
    icon: Bot,
    title: 'AI Chat Agent',
    description: '24/7 AI that answers questions, qualifies leads and books appointments automatically.',
    badge: '\uD83D\uDD25 HOT',
    link: '/ai-solutions#chat',
    accent: '#f97316',
    metric: '24/7',
    metricLabel: 'Always On',
  },
  {
    icon: Phone,
    title: 'AI Calling Agent',
    description: 'AI that calls your leads, speaks naturally and books appointments on autopilot.',
    badge: '\uD83D\uDD25 HOT',
    link: '/ai-solutions#calling',
    accent: '#ef4444',
    metric: '40%',
    metricLabel: 'Lead Convert',
  },
  {
    icon: Cog,
    title: 'Business Automation',
    description: 'Automate repetitive tasks and save your team 15+ hours every single week.',
    badge: null,
    link: '/services#automation',
    accent: '#22c55e',
    metric: '15+ hrs',
    metricLabel: 'Saved/Week',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden z-10 border-t border-white/5">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{backgroundImage: `radial-gradient(#0ea5e9 1px, transparent 1px)`, backgroundSize: '40px 40px'}} />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">Our Services</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3.2rem] lg:text-[4rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6">
            EVERYTHING YOUR BUSINESS<br/>NEEDS TO <span className="gradient-text italic">DOMINATE ONLINE</span>
          </h2>
          <p className="font-mono text-sm text-white/40 uppercase tracking-[0.15em] max-w-lg mx-auto">
            One agency. Every digital solution. Zero compromises.
          </p>
        </AnimatedSection>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <Link href={service.link} className="block h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative h-full rounded-[2rem] p-[1px] group cursor-pointer overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}20, transparent 50%, ${service.accent}10)`,
                  }}
                >
                  {/* Hover glow border */}
                  <div
                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent}40, transparent 40%, transparent 60%, ${service.accent}30)`,
                    }}
                  />

                  {/* Card inner */}
                  <div className="relative h-full bg-black/90 backdrop-blur-xl rounded-[calc(2rem-1px)] p-7 md:p-8 flex flex-col overflow-hidden">
                    {/* Background glow */}
                    <div
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"
                      style={{ background: service.accent }}
                    />

                    {/* Corner decorative */}
                    <div className="absolute top-4 right-4 flex gap-1 opacity-30 group-hover:opacity-60 transition-opacity">
                      <div className="w-1 h-1 rounded-full" style={{ background: service.accent }} />
                      <div className="w-1 h-1 rounded-full" style={{ background: service.accent }} />
                      <div className="w-1 h-1 rounded-full" style={{ background: service.accent }} />
                    </div>

                    {/* Badge */}
                    {service.badge && (
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-6 right-6 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 font-mono text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                      >
                        {service.badge}
                      </motion.span>
                    )}

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_var(--glow)]"
                        style={{
                          background: `${service.accent}10`,
                          borderColor: `${service.accent}30`,
                          '--glow': `${service.accent}50`,
                        } as React.CSSProperties}
                      >
                        <service.icon className="w-7 h-7 transition-all duration-500 group-hover:scale-110" style={{ color: service.accent }} />
                      </div>
                      {/* Pulse ring on hover */}
                      <div
                        className="absolute inset-0 w-16 h-16 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity pointer-events-none"
                        style={{ background: `${service.accent}10` }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tight mb-3 group-hover:transition-colors duration-300" style={{ ['--hover-color' as string]: service.accent }}>
                      <span className="group-hover:text-[var(--hover-color)]" style={{ '--hover-color': service.accent } as React.CSSProperties}>{service.title}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 font-mono text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Bottom bar: metric + arrow */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                      <div>
                        <span className="text-2xl font-heading font-black tracking-tighter" style={{ color: service.accent }}>{service.metric}</span>
                        <span className="block font-mono text-[9px] text-white/30 uppercase tracking-widest mt-1">{service.metricLabel}</span>
                      </div>
                      <div
                        className="w-10 h-10 rounded-full border flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                        style={{ borderColor: `${service.accent}40`, background: `${service.accent}10` }}
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: service.accent }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-16">
          <p className="text-white/40 font-mono text-sm mb-4">Not sure what you need?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
