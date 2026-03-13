'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin, Send, MessageSquare, Terminal } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically load Canvas for a background element
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });
const DynamicCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const DynamicPresentation = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const DynamicEnv = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });
const DynamicCoreSphere = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CoreSphere), { ssr: false });

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex flex-col justify-center bg-cyber-black border-b border-white/5">
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-lime-400/[0.04] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-lime-400 font-bold">
              [ Secure_Link_Channel ]
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-black leading-[0.85] tracking-tighter mb-8 max-w-5xl uppercase">
              ESTABLISH <br/><span className="text-lime-400 italic">COMMUNICATION_</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl font-mono leading-relaxed border-l-2 border-white/10 pl-6">
              Establish a direct technical link to our engineering Syndicate. Request system initialization or architecture audits.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative bg-cyber-black">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 mix-blend-overlay" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Contact Info & 3D Interactive Terminal */}
            <div className="lg:col-span-5 space-y-12">
              <AnimatedSection>
                <div className="font-mono text-[10px] text-lime-400 mb-8 uppercase tracking-[0.3em] font-bold">Transmission_Vectors</div>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email_Protocol', value: 'hello@jointsys.io', href: 'mailto:hello@jointsys.io' },
                    { icon: Phone, label: 'Voice_Link', value: '+1 (888) CORE-SYS', href: 'tel:+18882673797' },
                    { icon: MapPin, label: 'Physical_Hub', value: 'Grid_Sector_9, Tech District', href: '#' },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-center gap-6 p-6 cyber-frame bg-white/5 border-white/5 group hover:border-lime-400/50 transition-colors">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-lime-400 group-hover:text-black transition-colors">
                        <item.icon className="w-4 h-4 text-white/40 transition-colors" />
                      </div>
                      <div>
                        <div className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-1">{item.label}</div>
                        <div className="text-white font-mono text-sm group-hover:text-lime-400 transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedSection>
              
              {/* 3D Decor Element */}
              <AnimatedSection delay={0.2} className="hidden lg:block relative h-[350px] cyber-frame bg-black/40 overflow-hidden group">
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-lime-400" />
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Awaiting_Input_Signal</span>
                </div>
                
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-auto grayscale group-hover:grayscale-0 transition-all duration-700">
                    <DynamicCanvas shadows dpr={[1, 2]}>
                      <DynamicCamera makeDefault position={[0, 0, 4]} fov={50} />
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[2, 5, 2]} intensity={2} color="#ccff00" />
                      <DynamicEnv preset="studio" />
                      <DynamicPresentation global rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.5, 0.5]}>
                        <DynamicCoreSphere />
                      </DynamicPresentation>
                    </DynamicCanvas>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <AnimatedSection delay={0.2} direction="right">
                <div className="cyber-frame p-8 md:p-12 bg-black/40 relative overflow-hidden group">
                  <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/5 relative z-10">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-lime-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black font-heading text-white uppercase">SYSTEM_INITIALIZATION_FORM</h2>
                      <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest mt-1">Submit parameters for system analysis.</p>
                    </div>
                  </div>

                  {formState === 'success' ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 relative z-10">
                      <div className="w-20 h-20 border border-lime-400/30 flex items-center justify-center mx-auto mb-6 bg-lime-400/5">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
                          <Send className="w-8 h-8 text-lime-400" />
                        </motion.div>
                      </div>
                      <h3 className="text-3xl font-black font-heading mb-4 text-white uppercase tracking-tighter">Transmission_Confirmed</h3>
                      <p className="text-white/40 font-mono text-xs uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                        Data packet received. SysAD will respond on secure channel.
                      </p>
                      <button onClick={() => setFormState('idle')} className="mt-12 btn-secondary py-2 px-6">
                        New_Transmission
                      </button>
                    </motion.div>
                   ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] block ml-1 font-bold">Identifier_ID</label>
                          <input
                            type="text"
                            required
                            className="w-full bg-white/5 border border-white/5 px-6 py-4 text-white font-mono text-sm focus:outline-none focus:border-lime-400 transition-all placeholder:text-white/10"
                            placeholder="USER_NAME..."
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] block ml-1 font-bold">Comm_Link</label>
                          <input
                            type="email"
                            required
                            className="w-full bg-white/5 border border-white/5 px-6 py-4 text-white font-mono text-sm focus:outline-none focus:border-lime-400 transition-all placeholder:text-white/10"
                            placeholder="EMAIL_ADDR..."
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] block ml-1 font-bold">Sys_Module_Type</label>
                        <select className="w-full bg-white/5 border border-white/5 px-6 py-4 text-white font-mono text-sm focus:outline-none focus:border-lime-400 transition-all appearance-none cursor-crosshair">
                          <option className="bg-cyber-black text-white">WEB_ARCHITECTURE</option>
                          <option className="bg-cyber-black text-white">NEURAL_AI_AGENT</option>
                          <option className="bg-cyber-black text-white">WORKFLOW_AUTOMATION</option>
                          <option className="bg-cyber-black text-white">CORE_FULLSTACK</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] block ml-1 font-bold">Parameters_Payload</label>
                        <textarea
                          required
                          rows={6}
                          className="w-full bg-white/5 border border-white/5 px-6 py-4 text-white font-mono text-sm focus:outline-none focus:border-lime-400 transition-all resize-none placeholder:text-white/10"
                          placeholder="INPUT_OPERATIONAL_REQUIREMENTS..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="btn-primary w-full py-5"
                      >
                        {formState === 'submitting' ? 'COMM_BUS_BUSY...' : 'ESTABLISH_LINK_'}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
