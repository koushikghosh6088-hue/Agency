'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  Globe, Smartphone, Phone, MessageSquare, Cog, TrendingUp,
  CheckCircle2, ArrowRight, ArrowUpRight, BarChart3, Database, Shield
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically load 3D components to keep the page fast
const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });
const DynamicCyberTorus = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CyberTorus), { ssr: false });

// We also need Canvas for the models
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });
const DynamicCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const DynamicPresentation = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const DynamicEnv = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web Architecture',
    desc: 'High-performance, cutting-edge web platforms engineered for scale using modern frameworks like React, Next.js, and Node.js.',
    accent: false,
    features: ['Custom Web Apps', 'SaaS Platforms', 'Dashboard & Admin Panels', 'API Development'],
    benefits: ['Lightning-fast performance', 'Obsidian & Lime Design Systems', 'Scalable infra'],
    has3D: false
  },
  {
    id: 'calling',
    icon: Phone,
    title: 'AI Voice Agents',
    desc: 'Intelligent voice agents that handle inbound and outbound calls, qualify leads, and provide customer support 24/7.',
    accent: true, // Lime accented
    features: ['Inbound Call Handling', 'Lead Qualification', 'Appointment Booking', 'CRM Integration'],
    benefits: ['24/7 availability', '70% cost reduction', 'Instant response times'],
    has3D: true,
    model: 'sphere'
  },
  {
    id: 'automation',
    icon: Cog,
    title: 'Business Automation',
    desc: "End-to-end workflow automation that eliminates repetitive tasks, streamlines operations, and multiplies your team's productivity.",
    accent: false,
    features: ['Workflow Automation', 'Data Integration', 'Invoice Processing', 'Custom APIs'],
    benefits: ['40+ hours saved/week', 'Zero human errors', 'Real-time visibility'],
    has3D: true,
    model: 'torus'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Eng',
    desc: 'Cross-platform mobile applications that deliver smooth, native-feeling experiences on iOS and Android.',
    accent: true,
    features: ['iOS & Android Apps', 'React Native', 'Push Notifications', 'In-App Payments'],
    benefits: ['Cross-platform efficiency', 'Native performance', 'Seamless updates'],
    has3D: false
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex flex-col justify-center text-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime-400/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-lime-400 font-bold">
              [ Service_Protocol_04 ]
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-black leading-[0.85] tracking-tighter mb-8 uppercase">
              SYSTEM<br />
              <span className="text-lime-400 italic">ARCHITECTURES</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl font-mono leading-relaxed mx-auto border-y border-white/10 py-6">
              Industrial-grade digital infrastructure. From autonomous neural agents to high-performance operational cores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Alternating split blocks) */}
      <div className="bg-cyber-black relative z-20 overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 mix-blend-overlay" />
        
        {services.map((service, i) => (
          <section key={service.id} id={service.id} className="py-24 relative">
            <div className="max-w-[1550px] mx-auto px-6 relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <AnimatedSection 
                  direction={i % 2 === 0 ? 'left' : 'right'} 
                  className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div className="font-mono text-[10px] text-lime-400 mb-8 uppercase tracking-[0.3em] font-bold">
                    Module_ID: 0x0{i+1}
                  </div>
                  
                  <h2 className={`text-5xl md:text-6xl font-heading font-black mb-6 uppercase ${service.accent ? 'text-lime-400' : 'text-white'}`}>
                    {service.title}
                  </h2>
                  <p className="text-white/40 text-xl leading-relaxed mb-10 font-mono italic">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5">
                        <div className={`w-2 h-2 shrink-0 ${service.accent ? 'bg-lime-400' : 'bg-white/20'}`} />
                        <span className="text-white/60 font-mono text-xs uppercase tracking-widest">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-primary">
                    Initiate_Deployment
                  </Link>
                </AnimatedSection>

                {/* Visual / 3D Content */}
                <AnimatedSection 
                  direction={i % 2 === 0 ? 'right' : 'left'} 
                  delay={0.2} 
                  className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <div className={`cyber-frame p-4 md:p-8 relative overflow-hidden group min-h-[550px] flex flex-col justify-end ${
                    service.accent ? 'border-lime-400/50' : ''
                  }`}>
                    
                    {/* Background Noise */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* 3D Canvas Context */}
                    {service.has3D && (
                      <div className="absolute inset-x-0 top-0 bottom-40 z-10 opacity-70 mix-blend-screen pointer-events-auto">
                        <DynamicCanvas shadows dpr={[1, 2]}>
                          <DynamicCamera makeDefault position={[0, 0, 5]} fov={45} />
                          <ambientLight intensity={service.accent ? 0.5 : 1} />
                          <directionalLight position={[5, 5, 2]} intensity={2} color={service.accent ? '#ccff00' : '#ffffff'} />
                          <DynamicEnv preset="studio" />
                          <DynamicPresentation 
                            global 
                            rotation={[0.1, 0, 0]} 
                            polar={[-0.2, 0.2]} 
                            azimuth={[-0.5, 0.5]} 
                          >
                            {service.model === 'sphere' ? <DynamicCoreSphere /> : <DynamicCyberTorus />}
                          </DynamicPresentation>
                        </DynamicCanvas>
                      </div>
                    )}

                    {/* Features list overlay at bottom */}
                    <div className="relative z-20 bg-black/80 backdrop-blur-md p-6 border border-white/10 w-full">
                      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                        <h3 className="text-[10px] font-mono uppercase text-lime-400 tracking-[0.3em] font-bold">Specs_Sheet</h3>
                        <service.icon className={`w-4 h-4 ${service.accent ? 'text-lime-400' : 'text-white/40'}`} />
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={feature} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-white/50">
                            <span className="text-lime-400">&gt;</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Scanning Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-lime-400/10 animate-scan pointer-events-none" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Divider lines between sections */}
            {i < services.length - 1 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1550px] h-px bg-white/5" />
            )}
          </section>
        ))}
      </div>

      {/* CTA Footnote */}
      <section className="py-32 relative bg-cyber-black">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6 uppercase">
              CONNECT <span className="text-lime-400 italic">CORE_</span>
            </h2>
            <p className="font-mono text-xs text-white/30 uppercase tracking-[0.3em] max-w-xl mx-auto mb-10">
              Establish technical link to begin system integration and deployment.
            </p>
            <Link href="/contact" className="btn-primary">
              Initialize_Start_Sequence
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
