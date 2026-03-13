'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Initialize trail particles
    const particles: HTMLDivElement[] = [];
    const particleCount = 20; // High count for smooth trail
    
    const trailContainer = document.createElement('div');
    trailContainer.className = "fixed inset-0 pointer-events-none z-[9997]";
    document.body.appendChild(trailContainer);

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.style.cssText = `
        position: absolute;
        width: ${4 - (i * 0.15)}px;
        height: ${4 - (i * 0.15)}px;
        background: #0ea5e9;
        border-radius: 50%;
        opacity: ${0.4 - (i * 0.02)};
        pointer-events: none;
      `;
      trailContainer.appendChild(p);
      particles.push(p);
    }
    trailRef.current = particles;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Main Dot
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Follower Lens
      gsap.to(follower, {
        x,
        y,
        duration: 0.4,
        ease: 'power3.out'
      });

      // Trail
      particles.forEach((p, i) => {
        gsap.to(p, {
          x,
          y,
          duration: 0.15 + (i * 0.02),
          ease: 'power1.out'
        });
      });

      // Magnetic Effect Logic
      const target = e.target as HTMLElement;
      if (target?.closest('button, a, .magnetic-wrap')) {
        const bounds = target.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        
        gsap.to(follower, {
          scale: 2.5,
          borderColor: 'rgba(14, 165, 233, 0.8)',
          backgroundColor: 'rgba(14, 165, 233, 0.1)',
          duration: 0.3
        });
        
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 0,
          duration: 0.2
        });
      } else {
        gsap.to(follower, {
          scale: 1,
          borderColor: 'rgba(255, 255, 255, 0.2)',
          backgroundColor: 'transparent',
          duration: 0.3
        });
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trailContainer.remove();
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-screen"
        style={{ boxShadow: '0 0 10px #0ea5e9' }}
      />
      {/* Follower Lens */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block backdrop-blur-[2px]"
      />
    </>
  );
}
