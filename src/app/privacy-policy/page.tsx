import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Privacy Policy | Vedastra AI Labs',
  description: 'Privacy policy for Vedastra AI Labs — how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-4 text-white">
            Privacy <span className="gradient-text italic">Policy</span>
          </h1>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-12">Last updated: March 2026</p>
        </AnimatedSection>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/70 font-mono text-sm leading-relaxed">
          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">1. Information We Collect</h2>
            <p>When you contact us through our website forms, WhatsApp, or email, we may collect your name, email address, phone number, and project details. We do not collect any data without your explicit action.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">2. How We Use Your Information</h2>
            <p>We use the information you provide solely to respond to your inquiries, provide project quotes, deliver our services, and communicate project updates. We never sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">3. Cookies and Analytics</h2>
            <p>Our website may use basic analytics tools to understand traffic patterns and improve user experience. These tools may use cookies. You can disable cookies in your browser settings at any time.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">5. Third-Party Services</h2>
            <p>We may use third-party services such as hosting providers, analytics tools, and communication platforms. These services have their own privacy policies and we encourage you to review them.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. Contact us at hello@vedastraai.com to exercise these rights.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">8. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Email: hello@vedastraai.com</li>
              <li>Phone: +91 70033 83676 / +91 80176 83428</li>
              <li>Location: India</li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
