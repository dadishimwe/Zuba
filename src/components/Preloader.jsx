import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Wifi, Download, Upload, Satellite } from 'lucide-react'
import zubaLightLogo from '@/assets/logos/zuba-light-logo.png'

const Preloader = ({ onComplete }) => {
  const [speed, setSpeed] = useState(0)
  const [phase, setPhase] = useState('connecting')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let currentSpeed = 0
    const targetSpeed = 300
    
    // Speedtest simulation
    const speedTimer = setInterval(() => {
      if (currentSpeed < targetSpeed) {
        // Accelerate speed gradually with some randomness
        const increment = Math.random() * 25 + 5
        currentSpeed = Math.min(currentSpeed + increment, targetSpeed)
        setSpeed(Math.round(currentSpeed))
        
        // Update phases based on speed
        if (currentSpeed < 50) {
          setPhase('connecting')
        } else if (currentSpeed < 150) {
          setPhase('testing')
        } else if (currentSpeed < 280) {
          setPhase('optimizing')
        } else {
          setPhase('complete')
        }
      } else {
        clearInterval(speedTimer)
        setTimeout(() => {
          setIsComplete(true)
        }, 800)
      }
    }, 120)

    return () => clearInterval(speedTimer)
  }, [])

  useEffect(() => {
    if (isComplete) {
      // Exit animation
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        }
      })

      tl.to('.preloader-content', {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in'
      })
      .to('.preloader-overlay', {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      }, '-=0.2')
    }
  }, [isComplete, onComplete])

  const getPhaseText = () => {
    switch (phase) {
      case 'connecting':
        return 'Establishing satellite connection...'
      case 'testing':
        return 'Testing download speeds...'
      case 'optimizing':
        return 'Optimizing network performance...'
      case 'complete':
        return 'Connection established!'
      default:
        return 'Initializing...'
    }
  }

  const getSpeedColor = () => {
    if (speed < 50) return 'text-orange-400'
    if (speed < 150) return 'text-yellow-400'
    if (speed < 250) return 'text-green-400'
    return 'text-emerald-400'
  }

  return (
    <div className="preloader-overlay fixed inset-0 z-[9999] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center">
      <div className="preloader-content text-center text-white max-w-md mx-auto p-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex flex-col items-center space-y-4">
            <img 
              src={zubaLightLogo} 
              alt="Zuba Broadband Technology" 
              className="h-16 w-auto mb-4"
            />
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-200 mb-2">Speed Test</h1>
              <p className="text-slate-400 text-sm">Establishing connection...</p>
            </div>
          </div>
        </div>

        {/* Speedometer */}
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto">
            {/* Speedometer background */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="3"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${(speed / 300) * 283} 283`}
                className="transition-all duration-300 ease-out"
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Speed display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`text-4xl font-bold ${getSpeedColor()}`}>
                {speed}
              </div>
              <div className="text-sm text-slate-400">Mbps</div>
            </div>
          </div>
        </div>

        {/* Status text */}
        <div className="mb-6">
          <p className="text-slate-300 text-sm">{getPhaseText()}</p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(speed / 300) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Preloader