'use client';

import Link from 'next/link';
import { ArrowRight, MessageSquare, Zap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden z-10 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">Take Action</span>
          </div>
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.8rem] font-heading font-black leading-none tracking-tighter uppercase mb-6">
            READY TO STOP LOSING CUSTOMERS TO <span className="gradient-text italic">COMPETITORS?</span>
          </h2>
          <p className="font-mono text-sm md:text-base text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Every day you wait is another day they win. Let&apos;s build your digital system this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
              <span>📞</span> BOOK FREE CALL <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/917003383676" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto">
              <MessageSquare className="w-4 h-4" /> WHATSAPP US NOW
            </a>
          </div>
          <p className="mt-6 text-blue-400/60 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
            <Zap className="w-3 h-3" /> We respond within 2 hours
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
