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
  const [isVisible, setIsVisible] = useState(priority) // Start visible if priority
  const [hasLoaded, setHasLoaded] = useState(priority)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If already loaded or priority, don't setup observer
    if (hasLoaded || priority) return

    // Simplified intersection observer - no mobile detection needed
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, threshold, hasLoaded, priority])

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  )
}

export default LazySection