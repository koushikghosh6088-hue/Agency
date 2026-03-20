'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Bot, Phone, Cog, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  { icon: Globe, title: 'Website Development', description: 'Fast modern websites that rank on Google and convert visitors into paying customers', badge: null, link: '/services#web' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'iOS and Android apps that keep your brand in your customer\u2019s pocket 24/7', badge: null, link: '/services#mobile' },
  { icon: Monitor, title: 'Web App & Dashboard', description: 'Custom platforms, admin panels and CRMs built exactly for your workflow', badge: null, link: '/services#webapp' },
  { icon: Bot, title: 'AI Chat Agent', description: '24/7 AI that answers questions, qualifies leads and books appointments automatically', badge: '\uD83D\uDD25 Hot', link: '/ai-solutions#chat' },
  { icon: Phone, title: 'AI Calling Agent', description: 'AI that calls your leads, speaks naturally and books appointments on autopilot', badge: '\uD83D\uDD25 Hot', link: '/ai-solutions#calling' },
  { icon: Cog, title: 'Business Automation', description: 'Automate repetitive tasks and save your team 15+ hours every single week', badge: null, link: '/services#automation' },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden z-10 border-t border-white/5">
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">Our Services</span>
          </div>
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.8rem] font-heading font-black leading-none tracking-tighter uppercase mb-4">
            EVERYTHING YOUR BUSINESS NEEDS TO <span className="gradient-text italic">DOMINATE ONLINE</span>
          </h2>
          <p className="font-mono text-sm text-white/40 uppercase tracking-[0.15em] max-w-lg mx-auto">
            One agency. Every digital solution. Zero compromises.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <Link href={service.link} className="block h-full">
                <div className="glass-panel h-full rounded-3xl p-8 border-white/10 hover:border-blue-400/30 transition-all duration-500 group relative overflow-hidden">
                  {service.badge && (
                    <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-mono text-[10px] font-bold uppercase tracking-widest">
                      {service.badge}
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-400 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500">
                    <service.icon className="w-6 h-6 text-blue-400 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 font-mono text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-blue-400/50 font-mono text-xs uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                    Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
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
