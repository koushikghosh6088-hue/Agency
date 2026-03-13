'use client'

import { Suspense, lazy, useEffect, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Only render Spline on desktop (1024px+) to prevent mobile crashes
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    // Delay Spline mount by 1s so the rest of the page loads first
    if (isDesktop) {
      const timer = setTimeout(() => setShouldRender(true), 1000)
      return () => clearTimeout(timer)
    } else {
      setShouldRender(false)
    }
  }, [isDesktop])

  if (!shouldRender) {
    return null
  }

  return (
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
        className={className}
      />
    </Suspense>
  )
}
