import { useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button.jsx'

const AnimatedButton = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  animationType = 'ripple',
  className = '',
  onClick,
  ...props 
}) => {
  const buttonRef = useRef()
  const rippleRef = useRef()

  const handleMouseEnter = () => {
    if (animationType === 'lift') {
      gsap.to(buttonRef.current, {
        y: -2,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else if (animationType === 'glow') {
      gsap.to(buttonRef.current, {
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleMouseLeave = () => {
    if (animationType === 'lift') {
      gsap.to(buttonRef.current, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else if (animationType === 'glow') {
      gsap.to(buttonRef.current, {
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleClick = (e) => {
    if (animationType === 'ripple') {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Create ripple effect
      const ripple = document.createElement('span')
      ripple.style.position = 'absolute'
      ripple.style.borderRadius = '50%'
      ripple.style.background = 'rgba(255, 255, 255, 0.6)'
      ripple.style.transform = 'scale(0)'
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      ripple.style.width = '20px'
      ripple.style.height = '20px'
      ripple.style.marginLeft = '-10px'
      ripple.style.marginTop = '-10px'
      ripple.style.pointerEvents = 'none'

      buttonRef.current.appendChild(ripple)

      gsap.to(ripple, {
        scale: 4,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          ripple.remove()
        }
      })
    }

    // Button press animation
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    })

    if (onClick) onClick(e)
  }

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  )
}

export default AnimatedButton