import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = (behavior = 'smooth') => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top when route changes
    if (behavior === 'instant') {
      // Instant scroll to top
      window.scrollTo(0, 0)
    } else {
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [pathname, behavior])
}

export default useScrollToTop