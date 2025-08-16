import { useEffect } from 'react'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const observeWebVitals = () => {
      // Core Web Vitals
      if ('PerformanceObserver' in window) {
        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value)
            }
          }
        })
        clsObserver.observe({ type: 'layout-shift', buffered: true })

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('LCP:', entry.startTime)
          }
        })
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
        })
        fidObserver.observe({ type: 'first-input', buffered: true })

        return () => {
          clsObserver.disconnect()
          lcpObserver.disconnect()
          fidObserver.disconnect()
        }
      }
    }

    // Performance metrics
    const logPerformanceMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0]
        if (navigation) {
          console.log('Performance Metrics:', {
            'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
            'TCP Connection': navigation.connectEnd - navigation.connectStart,
            'Request': navigation.responseStart - navigation.requestStart,
            'Response': navigation.responseEnd - navigation.responseStart,
            'DOM Processing': navigation.domComplete - navigation.responseEnd,
            'Load Complete': navigation.loadEventEnd - navigation.loadEventStart,
            'Total Load Time': navigation.loadEventEnd - navigation.navigationStart
          })
        }
      }
    }

    // Resource loading monitoring
    const monitorResources = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource')
        const slowResources = resources.filter(resource => resource.duration > 1000)
        
        if (slowResources.length > 0) {
          console.warn('Slow Resources (>1s):', slowResources.map(r => ({
            name: r.name,
            duration: r.duration,
            type: r.initiatorType
          })))
        }
      }
    }

    // Memory usage monitoring (if available)
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = performance.memory
        console.log('Memory Usage:', {
          'Used': Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          'Total': Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          'Limit': Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        })
      }
    }

    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      const cleanup = observeWebVitals()
      
      // Delay to ensure page is loaded
      setTimeout(() => {
        logPerformanceMetrics()
        monitorResources()
        monitorMemory()
      }, 2000)

      return cleanup
    }
  }, [])

  return null
}

export default PerformanceMonitor