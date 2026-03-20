import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Terms of Service | Vedastra AI Labs',
  description: 'Terms of service for Vedastra AI Labs — the rules and guidelines for using our services.',
};

export default function TermsOfServicePage() {
  return (
    <section className="relative pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-4 text-white">
            Terms of <span className="gradient-text italic">Service</span>
          </h1>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-12">Last updated: March 2026</p>
        </AnimatedSection>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/70 font-mono text-sm leading-relaxed">
          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">1. Services</h2>
            <p>Vedastra AI Labs provides web development, mobile app development, AI solutions, business automation, and related digital services. All projects are governed by a separate project agreement or proposal accepted by the client.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">2. Project Timeline</h2>
            <p>Timelines are estimated and communicated before project commencement. Delays caused by client-side feedback, content delivery, or scope changes may extend the timeline. We will communicate any changes proactively.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">3. Payment Terms</h2>
            <p>A 50% deposit is required before work begins. The remaining 50% is due upon project completion and before final delivery. All payments are non-refundable once work has commenced, except as outlined in our Refund Policy.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">4. Revisions</h2>
            <p>We offer unlimited revisions during the design phase until you are 100% satisfied. Once development begins, major scope changes may incur additional costs, which will be communicated and approved before proceeding.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">5. Intellectual Property</h2>
            <p>Upon full payment, all project deliverables (code, design files, assets) become the client&apos;s property. We retain the right to showcase the work in our portfolio unless otherwise agreed in writing.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">6. Confidentiality</h2>
            <p>We treat all client information, business strategies, and project details as strictly confidential. We will never share your information with third parties without your explicit consent.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">7. Limitation of Liability</h2>
            <p>Vedastra AI Labs is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the total amount paid by the client for the specific project.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">8. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be resolved through mutual discussion first, and if necessary, through the appropriate courts in India.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">9. Contact</h2>
            <p>For any questions about these terms, contact us at hello@vedastraai.com or call +91 70033 83676.</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
