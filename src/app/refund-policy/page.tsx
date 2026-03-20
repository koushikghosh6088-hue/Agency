import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Refund Policy | Vedastra AI Labs',
  description: 'Refund policy for Vedastra AI Labs — our fair and transparent refund and revision guidelines.',
};

export default function RefundPolicyPage() {
  return (
    <section className="relative pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-4 text-white">
            Refund <span className="gradient-text italic">Policy</span>
          </h1>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-12">Last updated: March 2026</p>
        </AnimatedSection>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/70 font-mono text-sm leading-relaxed">
          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">Our Commitment</h2>
            <p>At Vedastra AI Labs, client satisfaction is our top priority. We work with you through unlimited revisions until you are completely happy with the result. Our refund policy is designed to be fair and transparent for both parties.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">Payment Structure</h2>
            <div className="space-y-4">
              <div className="glass-panel p-6 rounded-2xl border-white/10">
                <h3 className="text-white font-bold mb-2">50% Upfront Deposit</h3>
                <p className="text-white/60 text-sm">Required before work begins. This deposit is <strong className="text-red-400">non-refundable</strong> once the project has commenced, as it covers initial research, planning, and design work.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border-white/10">
                <h3 className="text-white font-bold mb-2">50% On Delivery</h3>
                <p className="text-white/60 text-sm">The remaining balance is due upon project completion and your final approval. Payment is required before final assets and source code are transferred.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">Revisions Policy</h2>
            <p>We offer <strong className="text-blue-400">unlimited revisions</strong> during the design and development phase until you are 100% satisfied. We never move forward until you have approved every detail. This ensures you get exactly what you want — every time.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">When Refunds Apply</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Before work begins:</strong> Full refund of the deposit if the project has not yet started.</li>
              <li><strong className="text-white">During the project:</strong> The upfront deposit is non-refundable. If you choose to cancel mid-project, any completed work will be delivered to you.</li>
              <li><strong className="text-white">After delivery:</strong> No refunds after final delivery and approval. We ensure satisfaction through our unlimited revision policy before delivery.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">Scope Changes</h2>
            <p>If the project scope changes significantly after work has begun, we will provide a revised quote. Additional work beyond the original scope will require separate payment terms.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">Contact Us</h2>
            <p>If you have any concerns about your project or need to discuss a refund, please reach out to us directly:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Email: hello@vedastraai.com</li>
              <li>Phone: +91 70033 83676 / +91 80176 83428</li>
              <li>WhatsApp: wa.me/917003383676</li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
