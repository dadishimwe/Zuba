import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Wifi, Download, Upload, Satellite } from 'lucide-react'

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
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="relative">
              <Satellite className="h-10 w-10 text-slate-300" />
              <div className="absolute inset-0 rounded-full border border-slate-500/30 animate-ping"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-200">Zuba Broadband</h1>
              <p className="text-slate-400 text-sm">Speed Test</p>
            </div>
          </div>
        </div>

        {/* Speedometer */}
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto">
            {/* Speedometer Background */}
            <div className="absolute inset-0 rounded-full border-8 border-slate-600/50"></div>
            
            {/* Speed Arc */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="text-slate-600/30"
                strokeDasharray="220 1000"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className={getSpeedColor()}
                strokeDasharray={`${(speed / 300) * 220} 1000`}
                style={{
                  transition: 'stroke-dasharray 0.3s ease-out'
                }}
              />
            </svg>
            
            {/* Speed Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`text-4xl font-bold ${getSpeedColor()}`}>
                {speed}
              </div>
              <div className="text-slate-400 text-sm">Mbps</div>
              <div className="flex items-center gap-1 mt-2">
                <Download className="h-3 w-3 text-slate-400" />
                <span className="text-xs text-slate-400">Download</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mb-6">
          <div className="text-slate-300 text-sm mb-2">{getPhaseText()}</div>
          
          {/* Connection Quality Bars */}
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-6 rounded-sm transition-all duration-300 ${
                  speed > (i + 1) * 60 
                    ? 'bg-emerald-400' 
                    : speed > (i + 1) * 30 
                    ? 'bg-yellow-400' 
                    : 'bg-slate-600'
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Network Info */}
        <div className="text-xs text-slate-400 space-y-1">
          <div className="flex justify-between">
            <span>Latency:</span>
            <span className="text-emerald-400">{Math.max(15, 45 - Math.round(speed / 10))}ms</span>
          </div>
          <div className="flex justify-between">
            <span>Jitter:</span>
            <span className="text-emerald-400">&lt; 5ms</span>
          </div>
          <div className="flex justify-between">
            <span>Server:</span>
            <span className="text-slate-300">Starlink LEO</span>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-400/20 rounded-full"
              style={{
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 3) * 30}%`,
                animation: `twinkle 3s infinite`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
      `}</style>
    </div>
  )
}

export default Preloader