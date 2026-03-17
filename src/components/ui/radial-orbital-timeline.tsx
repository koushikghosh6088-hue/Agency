"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { ArrowRight, Link, Zap, Cpu, Activity, ShieldCheck, ZapIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: any;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(Math.min((window.innerWidth / 2) - 40, 160));
      } else if (window.innerWidth < 1024) {
        setRadius(170);
      } else {
        setRadius(200);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { [id]: !prev[id] };
      if (newState[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const nodeIndex = timelineData.findIndex(i => i.id === id);
        const totalNodes = timelineData.length;
        const targetAngle = (nodeIndex / totalNodes) * 360;
        setRotationAngle(270 - targetAngle);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
      }
      return newState;
    });
  };

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (autoRotate) {
        const deltaTime = time - lastTime;
        const deltaAngle = (4 / 1000) * deltaTime;
        setRotationAngle((prev) => (prev + deltaAngle) % 360);
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  return (
    <div
      className="w-full h-full min-h-[500px] lg:min-h-[650px] flex items-center justify-center bg-transparent overflow-visible"
      ref={containerRef}
      onClick={() => {
        setExpandedItems({});
        setActiveNodeId(null);
        setAutoRotate(true);
      }}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        
        {/* SVG Area for connectivity lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <AnimatePresence>
            {activeNodeId && timelineData.find(i => i.id === activeNodeId)?.relatedIds.map(relId => {
              const activeIndex = timelineData.findIndex(i => i.id === activeNodeId);
              const relIndex = timelineData.findIndex(i => i.id === relId);
              const p1 = calculateNodePosition(activeIndex, timelineData.length);
              const p2 = calculateNodePosition(relIndex, timelineData.length);
              
              // Center point adjustment for SVG coordinates
              const cx = containerRef.current?.offsetWidth ? containerRef.current.offsetWidth / 2 : 0;
              const cy = containerRef.current?.offsetHeight ? containerRef.current.offsetHeight / 2 : 0;

              return (
                <motion.path
                  key={`line-${activeNodeId}-${relId}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  d={`M ${cx + p1.x} ${cy + p1.y} Q ${cx} ${cy} ${cx + p2.x} ${cy + p2.y}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  strokeDasharray="10 5"
                  className="animate-[marquee_20s_linear_infinite]"
                />
              );
            })}
          </AnimatePresence>
        </svg>

        {/* Neural Core */}
        <div className="absolute flex items-center justify-center z-10 scale-75 md:scale-100">
          <div className="absolute w-40 h-40 rounded-full bg-blue-400/5 border border-blue-400/20 animate-glow-scan" 
               style={{ background: 'conic-gradient(from 0deg, transparent, rgba(14,165,233,0.2), transparent 40%)' }} />
          <div className="absolute w-32 h-32 rounded-full border border-white/5 animate-reverse-spin duration-[15s]" />
          
          <div className="relative w-24 h-24 rounded-full flex items-center justify-center glass-premium border-blue-400/30 glow-blue overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-500/20 animate-pulse" />
            <Cpu className="w-10 h-10 text-blue-400 animate-float" />
            
            {/* Spinning inner data ring */}
            <div className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
          </div>
          
          {/* External pulse ripples */}
          <div className="absolute w-32 h-32 rounded-full border border-blue-500/20 animate-ping" />
          <div className="absolute w-48 h-48 rounded-full border border-blue-400/10 animate-ping [animation-delay:0.5s]" />
        </div>

        {/* Global Orbit Line */}
        <div 
          className="absolute rounded-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"
          style={{ width: radius * 2, height: radius * 2 }}
        >
          {/* Energy packets traveling around the orbit */}
          {[1, 2, 3].map((i) => (
            <div 
              key={`packet-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 blur-[2px] opacity-40"
              style={{
                offsetPath: `circle(${radius}px at center)`,
                animation: `orbit-particle ${10 + i * 2}s linear infinite`,
                animationDelay: `${-i * 3}s`
              }}
            />
          ))}
        </div>

        {/* Timeline Nodes */}
        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isActive = activeNodeId === item.id;
          const isRelated = activeNodeId && item.relatedIds.includes(activeNodeId) || (activeNodeId && timelineData.find(i => i.id === activeNodeId)?.relatedIds.includes(item.id));
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="absolute transition-all duration-700 cursor-pointer"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 500 : position.zIndex,
                opacity: activeNodeId && !isActive && !isRelated ? 0.3 : (isExpanded ? 1 : position.opacity),
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {/* Glossy Node Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`
                  relative w-12 h-12 rounded-2xl flex items-center justify-center
                  glass-premium border-white/10
                  ${isActive ? "border-blue-400/60 shadow-[0_0_30px_rgba(14,165,233,0.4)]" : "hover:border-blue-400/40"}
                  transition-all duration-500
                `}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-blue-400/10 rounded-2xl animate-pulse" />
                )}
                <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-blue-400" : "text-white/60"}`} />
                
                {/* Status indicator mini-pip */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${item.status === 'completed' ? 'bg-green-500' : 'bg-blue-400'} shadow-lg shadow-black/50`} />
              </motion.div>

              {/* Label */}
              <div className={`absolute top-14 left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap ptr-events-none group`}>
                 <span className={`font-heading text-[10px] sm:text-xs font-bold uppercase tracking-widest ${isActive ? "text-blue-400" : "text-white/30"}`}>
                   {item.title}
                 </span>
                 <div className={`h-px bg-blue-400/40 transition-all duration-500 mx-auto ${isActive ? "w-full mt-1" : "w-0"}`} />
              </div>

              {/* Expansion Card (High-Fidelity) */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] z-[600]"
                  >
                    <div className="relative glass-premium p-6 rounded-[2rem] border-white/20 shadow-2xl overflow-hidden group/card shadow-blue-400/10">
                      {/* Border Beam Logic */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-[2rem]">
                        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(14,165,233,0.5),transparent_40%)] animate-[spin_4s_linear_infinite]" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <Badge className="bg-blue-400/10 border-blue-400/30 text-blue-400 text-[9px] uppercase tracking-tighter rounded-full px-3 py-1">
                            {item.category}
                          </Badge>
                          <span className="font-mono text-[9px] text-white/30 tracking-widest">{item.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-heading font-black text-white mb-2 tracking-tight uppercase leading-none">
                          {item.title}
                        </h3>
                        
                        <p className="text-white/50 text-xs font-mono leading-relaxed mb-6">
                          {item.content}
                        </p>

                        <div className="space-y-4">
                          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                             <div className="flex justify-between items-center mb-2">
                                <span className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest">
                                  <ZapIcon size={12} className="text-blue-400" /> Neural Impact
                                </span>
                                <span className="text-blue-400 font-mono text-xs">{item.energy}%</span>
                             </div>
                             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${item.energy}%` }}
                                 className="h-full bg-gradient-to-r from-blue-600 to-blue-400" 
                               />
                             </div>
                          </div>

                          {item.relatedIds.length > 0 && (
                            <div className="grid grid-cols-1 gap-2">
                               {item.relatedIds.map(relId => {
                                 const rel = timelineData.find(i => i.id === relId);
                                 return (
                                   <button 
                                     key={relId}
                                     onClick={(e) => { e.stopPropagation(); toggleItem(relId); }}
                                     className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all group/btn"
                                   >
                                     <span className="text-[10px] font-mono text-white/60 group-hover/btn:text-white uppercase tracking-wider">Sync {rel?.title}</span>
                                     <Activity size={12} className="text-blue-400" />
                                   </button>
                                 )
                               })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
