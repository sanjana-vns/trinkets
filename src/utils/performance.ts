// Performance utilities for optimizing Core Web Vitals and SEO
import { memo } from 'react'

// Memoization utility for components
export const memoComponent = <T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  areEqual?: (prevProps: T, nextProps: T) => boolean
) => {
  return memo(Component, areEqual)
}

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const { threshold = 0.1, rootMargin = '50px' } = options
  
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible, trigger action
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }
}

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    if (type) link.type = type
    document.head.appendChild(link)
  }
}

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string) => {
  if (typeof window !== 'undefined') {
    const style = document.createElement('style')
    style.innerHTML = css
    document.head.appendChild(style)
  }
}

// Image optimization utility
export const optimizedImageProps = (
  src: string,
  alt: string,
  width: number,
  height: number,
  priority = false
) => ({
  src,
  alt,
  width,
  height,
  priority,
  quality: 85,
  loading: priority ? 'eager' : 'lazy',
  decoding: 'async',
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style: {
    width: '100%',
    height: 'auto',
  },
})

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(null, args), wait)
  }
}

// Throttle utility for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Web Vitals measurement
export const measureWebVitals = () => {
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }
}

// Resource preloading for critical paths
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    preloadResource('/fonts/inter-var.woff2', 'font', 'font/woff2')
    
    // Preload critical images
    preloadResource('/images/hero-bg.jpg', 'image')
    preloadResource('/images/trinketlogo.jpg', 'image')
    
    // Preload critical CSS
    preloadResource('/css/critical.css', 'style')
  }
}