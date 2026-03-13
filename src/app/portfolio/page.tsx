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
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex flex-col justify-center border-b border-white/5 bg-cyber-black">
        <div className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-lime-400/[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        {/* Background 3D element */}
        <div className="absolute inset-y-0 right-10 w-1/3 z-0 opacity-20 mix-blend-screen pointer-events-none hidden lg:block">
            <DynamicCanvas shadows dpr={[1, 2]}>
              <DynamicCamera makeDefault position={[0, 0, 8]} fov={50} />
              <ambientLight intensity={0.2} />
              <directionalLight position={[5, 10, 5]} intensity={2} color="#ccff00" />
              <DynamicEnv preset="studio" />
              <DynamicPresentation global rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.4, 0.4]}>
                 <DynamicCyberTorus />
              </DynamicPresentation>
            </DynamicCanvas>
        </div>

        <div className="max-w-[1550px] mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-6 text-lime-400 font-bold">
              [ Archive_Access_07 ]
            </span>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-heading font-black leading-[0.85] tracking-tighter mb-8 max-w-5xl uppercase">
              PROJECT <br/><span className="text-lime-400 italic">REPOSITORY_</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl font-mono leading-relaxed border-l-2 border-white/10 pl-6">
              Deployed architectures across high-performance web systems and autonomous neural networks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sticky top-20 z-30 bg-black/60 backdrop-blur-3xl border-b border-white/5">
        <div className="max-w-[1550px] mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mr-4">Filter_Protocol:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 border font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-lime-400 text-black border-lime-400 shadow-[0_0_20px_rgba(204,255,0,0.1)]'
                    : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cyber-black relative min-h-screen">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 mix-blend-overlay" />
        <div className="max-w-[1550px] mx-auto px-6 relative z-10">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`${project.size?.includes('md:col-span-2') ? 'md:col-span-2' : 'col-span-1'} ${project.size?.includes('row-span-2') ? 'row-span-2' : ''}`}
                >
                  <div className="group cyber-frame p-8 bg-black/40 h-full flex flex-col justify-between hover:border-lime-400 transition-colors duration-500">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <span className="font-mono text-[9px] text-lime-400/50 uppercase tracking-widest">Sys_Node_{i+1}</span>
                        <FolderGit2 className="w-4 h-4 text-white/10 group-hover:text-lime-400 transition-colors" />
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-white/5 border border-white/5 text-[9px] font-mono text-white/40 uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl font-black font-heading text-white mb-4 uppercase group-hover:text-lime-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/40 text-sm font-mono leading-relaxed italic mb-8">
                        {project.desc}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center gap-2 text-lime-400 text-[10px] font-mono uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all">
                      [ ACCESS ARCHIVE_ ] <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Footnote */}
      <section className="py-32 relative bg-cyber-black border-t border-white/5">
        <div className="max-w-[1550px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-[4rem] md:text-[5rem] font-heading font-black tracking-tighter mb-6 uppercase">
              READY TO <span className="text-lime-400 italic">DEPLOY?</span>
            </h2>
            <p className="font-mono text-xs text-white/30 uppercase tracking-[0.3em] max-w-xl mx-auto mb-10">
              Initiate technical build for your organization.
            </p>
            <Link href="/contact" className="btn-primary">
              Initialize_Build_Sequence
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
