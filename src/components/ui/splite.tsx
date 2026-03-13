'use client'

import { Suspense, lazy, useEffect, useState, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Delay initial mount
    const timer = setTimeout(() => setShouldRender(true), 800)
    
    // Observer to cull rendering when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {shouldRender && inView ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <span className="loader"></span>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Loading 3D</span>
              </div>
            </div>
          }
        >
          <Spline
            scene={scene}
            className="w-full h-full"
          />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-black/20 animate-pulse rounded-3xl" />
      )}
    </div>
  )
}
