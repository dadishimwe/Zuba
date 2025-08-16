import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = (animationType = 'fadeInUp', options = {}) => {
  const elementRef = useRef()
  
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options
  })

  // Combine refs
  const setRefs = (node) => {
    elementRef.current = node
    inViewRef(node)
  }

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Set initial state
    gsap.set(element, getInitialState(animationType))

    if (inView) {
      // Animate in
      gsap.to(element, {
        ...getFinalState(animationType),
        duration: 0.8,
        ease: 'power2.out',
        delay: options.delay || 0
      })
    }
  }, [inView, animationType, options.delay])

  return setRefs
}

const getInitialState = (type) => {
  switch (type) {
    case 'fadeInUp':
      return { opacity: 0, y: 30 }
    case 'fadeInDown':
      return { opacity: 0, y: -30 }
    case 'fadeInLeft':
      return { opacity: 0, x: -30 }
    case 'fadeInRight':
      return { opacity: 0, x: 30 }
    case 'fadeIn':
      return { opacity: 0 }
    case 'scaleIn':
      return { opacity: 0, scale: 0.9 }
    case 'slideInUp':
      return { opacity: 0, y: 50 }
    default:
      return { opacity: 0, y: 30 }
  }
}

const getFinalState = (type) => {
  switch (type) {
    case 'fadeInUp':
    case 'fadeInDown':
      return { opacity: 1, y: 0 }
    case 'fadeInLeft':
    case 'fadeInRight':
      return { opacity: 1, x: 0 }
    case 'fadeIn':
      return { opacity: 1 }
    case 'scaleIn':
      return { opacity: 1, scale: 1 }
    case 'slideInUp':
      return { opacity: 1, y: 0 }
    default:
      return { opacity: 1, y: 0 }
  }
}

// Stagger animation hook for multiple elements
export const useStaggerAnimation = (animationType = 'fadeInUp', staggerDelay = 0.1) => {
  const containerRef = useRef()
  
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const setRefs = (node) => {
    containerRef.current = node
    inViewRef(node)
  }

  useEffect(() => {
    if (!containerRef.current || !inView) return

    const children = containerRef.current.children

    // Set initial state for all children
    gsap.set(children, getInitialState(animationType))

    // Animate children with stagger
    gsap.to(children, {
      ...getFinalState(animationType),
      duration: 0.6,
      ease: 'power2.out',
      stagger: staggerDelay
    })
  }, [inView, animationType, staggerDelay])

  return setRefs
}