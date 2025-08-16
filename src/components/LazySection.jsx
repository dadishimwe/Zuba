import { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import SkeletonLoader from './SkeletonLoader'

const LazySection = ({ 
  children, 
  fallback = null, 
  threshold = 0.1,
  rootMargin = '100px',
  className = ''
}) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && !hasLoaded) {
      // Add small delay to ensure smooth transition
      setTimeout(() => {
        setHasLoaded(true)
      }, 100)
    }
  }, [inView, hasLoaded])

  const defaultFallback = (
    <div className={`min-h-[400px] flex items-center justify-center ${className}`}>
      <div className="text-center space-y-4 w-full max-w-lg">
        <SkeletonLoader variant="text" height="2rem" width="60%" />
        <SkeletonLoader variant="text" height="1rem" width="80%" />
        <SkeletonLoader variant="text" height="1rem" width="70%" />
        <div className="grid grid-cols-3 gap-4 mt-8">
          <SkeletonLoader variant="card" height="200px" />
          <SkeletonLoader variant="card" height="200px" />
          <SkeletonLoader variant="card" height="200px" />
        </div>
      </div>
    </div>
  )

  return (
    <div ref={ref} className={className}>
      {hasLoaded ? children : (fallback || defaultFallback)}
    </div>
  )
}

export default LazySection