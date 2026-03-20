'use client';

import AnimatedSection from '@/components/AnimatedSection';
import PricingSection from '@/components/PricingSection';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden min-h-[50vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-blue-400/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-400/5 mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#0ea5e9]">Transparent Pricing</span>
            </div>
            <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-heading font-extrabold leading-[0.85] tracking-tighter mb-6 text-white uppercase">
              SIMPLE <br/><span className="gradient-text italic">HONEST PRICING</span>
            </h1>
            <p className="text-white/50 text-lg font-mono font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              No hidden fees. No surprises. Pick a plan that fits your business and let&apos;s build something amazing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reuse existing PricingSection */}
      <PricingSection />

      {/* Bottom CTA */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-6 text-white">
              NOT SURE WHICH <span className="gradient-text italic">PLAN</span> IS RIGHT?
            </h2>
            <p className="text-white/50 font-mono text-sm mb-10 leading-relaxed">
              Book a free 30-minute call. We&apos;ll tell you exactly what your business needs — no pressure, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/917003383676" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
