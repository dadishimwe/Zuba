import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  backgroundImage = null,
  overlay = true,
  overlayOpacity = 0.3
}) => {
  const sectionRef = useRef()
  const backgroundRef = useRef()

  useEffect(() => {
    if (!sectionRef.current) return

    // Parallax effect for background
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [speed])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Background Image with Parallax */}
      {backgroundImage && (
        <div
          ref={backgroundRef}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            top: '-10%'
          }}
        />
      )}
      
      {/* Overlay */}
      {overlay && backgroundImage && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

export default ParallaxSection