import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Wifi, Download, Upload, Satellite, Activity } from 'lucide-react'
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
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="preloader-content text-center text-white max-w-md mx-auto p-8 relative z-10">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <img 
                src={zubaLightLogo} 
                alt="Zuba Broadband Technology" 
                className="h-20 w-auto mb-4 drop-shadow-lg"
              />
              {/* Glowing effect around logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-green-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <div className="text-center">
              <p className="text-slate-300 text-sm font-medium">Establishing connection...</p>
            </div>
          </div>
        </div>

        {/* Enhanced Speedometer */}
        <div className="mb-8">
          <div className="relative w-56 h-56 mx-auto">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-green-500/20 blur-lg animate-pulse"></div>
            
            {/* Speedometer background */}
            <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 100 100">
              {/* Background circle with gradient */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
                </linearGradient>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="25%" stopColor="#ea580c" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="75%" stopColor="#84cc16" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#bgGradient)"
                strokeWidth="4"
              />
              
              {/* Progress circle with glow */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(speed / 300) * 283} 283`}
                className="transition-all duration-500 ease-out"
                filter="url(#glow)"
              />
              
              {/* Speed markers */}
              {[0, 100, 200, 300].map((mark, index) => (
                <g key={mark}>
                  <line
                    x1="50"
                    y1="5"
                    x2="50"
                    y2="15"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="1"
                    transform={`rotate(${(mark / 300) * 180 - 90} 50 50)`}
                  />
                  <text
                    x="50"
                    y="25"
                    textAnchor="middle"
                    fill="rgba(255, 255, 255, 0.5)"
                    fontSize="3"
                    transform={`rotate(${(mark / 300) * 180 - 90} 50 50)`}
                  >
                    {mark}
                  </text>
                </g>
              ))}
            </svg>
            
            {/* Speed display with enhanced styling */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative">
                <div className={`text-5xl font-bold ${getSpeedColor()} drop-shadow-lg`}>
                  {speed}
                </div>
                <div className="text-sm text-slate-300 font-medium">Mbps</div>
              </div>
              
              {/* Animated activity indicator */}
              <div className="mt-4 flex items-center gap-2">
                <Activity className="h-4 w-4 text-orange-400 animate-pulse" />
                <span className="text-xs text-slate-400">Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Status Section */}
        <div className="mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <p className="text-slate-200 text-sm font-medium mb-2">{getPhaseText()}</p>
            
            {/* Connection quality indicator */}
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-4 rounded-sm transition-all duration-500 ${
                    speed > (i + 1) * 60 
                      ? 'bg-gradient-to-t from-green-400 to-emerald-500' 
                      : speed > (i + 1) * 30 
                      ? 'bg-gradient-to-t from-yellow-400 to-orange-500' 
                      : 'bg-slate-600'
                  }`}
                  style={{
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
            
            {/* Network stats */}
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="text-center">
                <div className="text-slate-400">Latency</div>
                <div className="text-emerald-400 font-medium">{Math.max(15, 45 - Math.round(speed / 10))}ms</div>
              </div>
              <div className="text-center">
                <div className="text-slate-400">Jitter</div>
                <div className="text-emerald-400 font-medium">&lt; 5ms</div>
              </div>
              <div className="text-center">
                <div className="text-slate-400">Signal</div>
                <div className="text-emerald-400 font-medium">Excellent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="relative">
          <div className="w-full bg-slate-700/50 backdrop-blur-sm rounded-full h-3 border border-white/10 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 h-3 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${(speed / 300) * 100}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="text-center mt-2">
            <span className="text-xs text-slate-400">
              {Math.round((speed / 300) * 100)}% Complete
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader