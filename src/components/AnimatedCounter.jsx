import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-intersection-observer'

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = '',
  formatter = null
}) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef()
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const setRefs = (node) => {
    counterRef.current = node
    ref(node)
  }

  useEffect(() => {
    if (inView && counterRef.current) {
      const obj = { value: 0 }
      
      gsap.to(obj, {
        value: end,
        duration: duration,
        ease: 'power2.out',
        onUpdate: () => {
          const currentValue = Math.round(obj.value)
          setCount(currentValue)
        }
      })
    }
  }, [inView, end, duration])

  const formatValue = (value) => {
    if (formatter) return formatter(value)
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K'
    }
    return value.toString()
  }

  return (
    <span ref={setRefs} className={className}>
      {prefix}{formatValue(count)}{suffix}
    </span>
  )
}

export default AnimatedCounter