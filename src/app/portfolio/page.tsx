'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowUpRight, FolderGit2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically load Canvas for a background element
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });
const DynamicCamera = dynamic(() => import('@react-three/drei').then(mod => mod.PerspectiveCamera), { ssr: false });
const DynamicPresentation = dynamic(() => import('@react-three/drei').then(mod => mod.PresentationControls), { ssr: false });
const DynamicEnv = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false });
const DynamicCyberTorus = dynamic(() => import('@/components/ServiceModels').then(mod => mod.CyberTorus), { ssr: false });

const categories = ['All', 'Web', 'Mobile', 'AI', 'Automation'];

const projects = [
  { title: 'AI Sales Dashboard', desc: 'Real-time AI analytics platform with predictive insights and automated reporting.', tags: ['React', 'Node.js', 'TensorFlow'], category: 'AI', size: 'col-span-1 md:col-span-2 row-span-2' },
  { title: 'E-Commerce Marketplace', desc: 'Full-stack marketplace with multi-vendor support and recommendation engine.', tags: ['Next.js', 'MongoDB', 'Stripe'], category: 'Web', size: 'col-span-1' },
  { title: 'Health & Fitness App', desc: 'Cross-platform mobile app with workout tracking and social features.', tags: ['React Native', 'Firebase'], category: 'Mobile', size: 'col-span-1' },
  { title: 'Workflow Automation Suite', desc: 'Enterprise automation platform integrating 50+ tools.', tags: ['Python', 'Node.js', 'APIs'], category: 'Automation', size: 'col-span-1 md:col-span-2' },
  { title: 'AI Customer Support Bot', desc: 'Intelligent chatbot with NLP and seamless human handoff.', tags: ['Python', 'OpenAI', 'React'], category: 'AI', size: 'col-span-1' },
  { title: 'FinTech Mobile Banking', desc: 'Secure mobile banking app with biometric auth and investment tools.', tags: ['Flutter', 'Dart', 'Node.js'], category: 'Mobile', size: 'col-span-1' },
  { title: 'SaaS Analytics Platform', desc: 'Custom analytics dashboard with real-time data visualization.', tags: ['Next.js', 'PostgreSQL', 'D3.js'], category: 'Web', size: 'col-span-1 md:col-span-2 row-span-2' },
  { title: 'Invoice Automation System', desc: 'End-to-end invoice processing with OCR and accounting integration.', tags: ['Python', 'React', 'AWS'], category: 'Automation', size: 'col-span-1' },
  { title: 'Enterprise Resource Portal', desc: 'Internal resource management and tracking for a logistics corporation.', tags: ['Vue.js', 'Django', 'Redis'], category: 'Web', size: 'col-span-1' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex flex-col justify-center cursor-default">
        {/* Immersive Atmosphere */}
        <div className="absolute inset-0 bg-obsidian z-0" />
        <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-blue-400/[0.05] rounded-full blur-[150px] pointer-events-none" />
        <div className="bg-grain opacity-10" />

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-premium border-blue-400/20 mb-8 magnetic-wrap">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400/80">
                  Project Archive // Active
                </span>
              </div>
              <h1 className="text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] font-heading font-extrabold leading-[0.8] tracking-tighter mb-8 text-white">
                DIGITAL<br />
                <span className="gradient-text italic">FUTURES</span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl font-mono leading-relaxed mb-10">
                Explore our repository of mission-critical architectures across high-performance web, scaleable mobile, and autonomous AI systems.
              </p>
            </motion.div>

            {/* Interactive 3D Sidepiece */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 h-[500px] relative hidden lg:block"
            >
              <DynamicCanvas shadows dpr={[1, 2]}>
                <DynamicCamera makeDefault position={[0, 0, 5]} fov={45} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#0ea5e9" />
                <DynamicEnv preset="city" />
                <DynamicPresentation 
                  global 
                  rotation={[0, 0, 0]} 
                  polar={[-0.3, 0.3]} 
                  azimuth={[-0.6, 0.6]}
                  snap={true}
                >
                  <DynamicCyberTorus />
                </DynamicPresentation>
              </DynamicCanvas>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 sticky top-20 z-30 bg-black/80 backdrop-blur-3xl border-b border-white/10">
        <div className="max-w-[1550px] mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-white/40 hidden md:block mr-4" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-blue-400 text-black shadow-[0_0_20px_rgba(14,165,233,0.2)] font-bold'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-obsidian relative min-h-screen">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-50 mix-blend-overlay" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`${project.size || 'col-span-1'} h-full perspective-1200`}
                >
                  <div className="group glass-premium border-white/5 rounded-[2.5rem] overflow-hidden cursor-pointer h-full relative flex flex-col justify-end hover-3d transition-all duration-700">
                    
                    {/* Hover Glow Light */}
                    <div className="absolute -inset-20 bg-blue-400/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

                    <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                      <div className="flex justify-between items-start mb-6 w-full">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-white/50 uppercase tracking-widest backdrop-blur-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="magnetic-wrap w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white/40 group-hover:bg-blue-400 group-hover:text-black group-hover:border-blue-400 transition-all duration-500 scale-0 group-hover:scale-100">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <h3 className={`font-heading font-black mb-3 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tighter ${
                        project.size?.includes('row-span-2') ? 'text-4xl' : 'text-2xl'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className="text-white/40 text-xs font-mono leading-relaxed max-w-lg line-clamp-3 uppercase tracking-wider">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Footnote */}
      <section className="py-32 relative bg-black border-t border-white/5">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6">
              READY TO <span className="text-blue-400 italic">DEPLOY?</span>
            </h2>
            <p className="font-mono text-sm text-white/40 uppercase tracking-widest max-w-xl mx-auto mb-10">
              Let's engineer a custom architecture for your organization.
            </p>
            <Link href="/contact" className="btn-primary group">
              Initiate Project Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
