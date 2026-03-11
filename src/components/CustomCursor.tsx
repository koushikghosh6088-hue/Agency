'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create trailing particles
    const particleEls: HTMLDivElement[] = [];
    for (let i = 0; i < 5; i++) {
      const p = document.createElement('div');
      p.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #C1FF00;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: ${0.5 - i * 0.08};
        top: 0;
        left: 0;
      `;
      document.body.appendChild(p);
      particleEls.push(p);
    }
    particlesRef.current = particleEls;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
      });

      particleEls.forEach((p, i) => {
        gsap.to(p, {
          x: e.clientX - 2,
          y: e.clientY - 2,
          duration: 0.2 + i * 0.1,
          ease: 'power2.out',
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      particleEls.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        width: '20px',
        height: '20px',
        background: '#C1FF00',
        borderRadius: '50%',
        mixBlendMode: 'difference',
      }}
    />
  );
}
