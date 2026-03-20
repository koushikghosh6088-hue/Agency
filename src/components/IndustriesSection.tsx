'use client';

import AnimatedSection from '@/components/AnimatedSection';

const industries = [
  { icon: '\uD83C\uDF55', label: 'Restaurants & Food' },
  { icon: '\uD83C\uDFE0', label: 'Real Estate' },
  { icon: '\uD83D\uDC86', label: 'Salons & Spas' },
  { icon: '\uD83C\uDFE5', label: 'Clinics & Healthcare' },
  { icon: '\uD83C\uDFCB\uFE0F', label: 'Fitness & Wellness' },
  { icon: '\uD83D\uDED2', label: 'eCommerce & Retail' },
  { icon: '\uD83C\uDF93', label: 'Education & Coaching' },
  { icon: '\uD83D\uDD27', label: 'Local Services' },
  { icon: '\uD83C\uDFE8', label: 'Hotels & Hospitality' },
  { icon: '\uD83D\uDCBC', label: 'Startups & SaaS' },
  { icon: '\uD83D\uDE97', label: 'Auto & Transport' },
  { icon: '\u2696\uFE0F', label: 'Legal & Finance' },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden z-10">
      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">Industries We Serve</span>
          </div>
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.8rem] font-heading font-black leading-none tracking-tighter uppercase mb-4">
            WE&apos;VE BUILT FOR <span className="gradient-text italic">EVERY INDUSTRY</span>
          </h2>
          <p className="font-mono text-sm text-white/40 uppercase tracking-[0.15em] max-w-lg mx-auto">
            Whatever your business — we know your world
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.label} delay={i * 0.05}>
              <div className="glass-panel rounded-2xl p-5 border-white/10 hover:border-blue-400/30 transition-all duration-300 group cursor-default text-center">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{industry.icon}</span>
                <span className="text-white/70 font-mono text-xs md:text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                  {industry.label}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
