import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const PageTransition = ({ children }) => {
  const location = useLocation()
  const containerRef = useRef()
  const overlayRef = useRef()

  useEffect(() => {
    if (!containerRef.current) return

    // Create page transition overlay
    const overlay = document.createElement('div')
    overlay.style.position = 'fixed'
    overlay.style.top = '0'
    overlay.style.left = '0'
    overlay.style.width = '100%'
    overlay.style.height = '100%'
    overlay.style.background = 'linear-gradient(45deg, #3B82F6, #1E40AF)'
    overlay.style.zIndex = '9999'
    overlay.style.pointerEvents = 'none'
    overlay.style.opacity = '0'
    document.body.appendChild(overlay)

    // Animation timeline
    const tl = gsap.timeline()

    // Hide current content
    tl.to(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.in'
    })

    // Show overlay
    tl.to(overlay, {
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out'
    }, '-=0.1')

    // Hide overlay and show new content
    tl.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    }, '+=0.1')

    tl.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        overlay.remove()
      }
    }, '-=0.2')

    // Scroll to top
    window.scrollTo(0, 0)

    return () => {
      if (overlay.parentNode) {
        overlay.remove()
      }
    }
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  )
}

export default PageTransition