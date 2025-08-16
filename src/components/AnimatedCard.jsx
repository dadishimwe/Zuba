import { useRef } from 'react'
import { gsap } from 'gsap'
import { Card } from '@/components/ui/card.jsx'

const AnimatedCard = ({ 
  children, 
  className = '',
  animationType = 'lift',
  ...props 
}) => {
  const cardRef = useRef()

  const handleMouseEnter = () => {
    switch (animationType) {
      case 'lift':
        gsap.to(cardRef.current, {
          y: -8,
          scale: 1.02,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          duration: 0.3,
          ease: 'power2.out'
        })
        break
      case 'tilt':
        gsap.to(cardRef.current, {
          rotationY: 5,
          rotationX: 5,
          z: 50,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        })
        break
      case 'glow':
        gsap.to(cardRef.current, {
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
          borderColor: 'rgba(59, 130, 246, 0.5)',
          duration: 0.3,
          ease: 'power2.out'
        })
        break
      case 'scale':
        gsap.to(cardRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        })
        break
      default:
        break
    }
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      rotationY: 0,
      rotationX: 0,
      z: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderColor: 'rgba(229, 231, 235, 1)',
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMouseMove = (e) => {
    if (animationType === 'tilt') {
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      gsap.to(cardRef.current, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000
      })
    }
  }

  return (
    <Card
      ref={cardRef}
      className={`transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </Card>
  )
}

export default AnimatedCard