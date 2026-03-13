'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/services#web' },
    { label: 'Mobile Apps', href: '/services#mobile' },
    { label: 'AI Calling Agents', href: '/ai-solutions#calling' },
    { label: 'AI Messaging Agents', href: '/ai-solutions#messaging' },
    { label: 'Business Automation', href: '/services#automation' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-cyber-black pt-20 pb-12 overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-[1550px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
             <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="px-3 py-1 bg-lime-400 border border-lime-400 flex items-center justify-center">
                <span className="text-black font-mono font-black text-xl tracking-tighter">JSYS</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8 font-mono uppercase tracking-wider">
              High-performance digital architecture engineered for the next generation of business scale.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono text-lime-400 mb-6 uppercase tracking-[0.3em] font-bold">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-xs font-mono uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono text-lime-400 mb-6 uppercase tracking-[0.3em] font-bold">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-xs font-mono uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono text-lime-400 mb-6 uppercase tracking-[0.3em] font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/40 text-xs font-mono uppercase tracking-widest italic">
                hello@jointsys.io
              </li>
              <li className="text-white/40 text-xs font-mono uppercase tracking-widest italic">
                +1 (888) CORE-SYS
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[9px] font-mono uppercase tracking-[0.4em]">
            © 2026 JOINT_SYSTEM_CORE. ALL_RIGHTS_RESERVED.
          </p>
          <div className="flex gap-8 font-mono text-[9px] uppercase tracking-[0.2em]">
            <Link href="#" className="text-white/20 hover:text-lime-400 transition-colors">Privacy_Protocol</Link>
            <Link href="#" className="text-white/20 hover:text-lime-400 transition-colors">Terms_Of_Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
