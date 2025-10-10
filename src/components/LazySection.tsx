'use client'
import { useState, useEffect, useRef, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  fallback: ReactNode
  rootMargin?: string
  threshold?: number
  priority?: boolean
}

const LazySection = ({ 
  children, 
  fallback, 
  rootMargin = '100px',
  threshold = 0.1,
  priority = false
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // For priority sections or desktop, use original behavior
    // For mobile non-priority, be more aggressive with margins
    const mobileRootMargin = priority ? rootMargin : '50px'
    const mobileThreshold = priority ? threshold : 0.05
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: isMobile ? mobileRootMargin : rootMargin,
        threshold: isMobile ? mobileThreshold : threshold
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, threshold, hasLoaded, isMobile, priority])

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  )
}

export default LazySection