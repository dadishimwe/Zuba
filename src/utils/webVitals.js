// Core Web Vitals measurement utility
export const measureWebVitals = () => {
  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  let clsEntries = [];

  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        clsEntries.push(entry);
      }
    }
  });

  observer.observe({ type: 'layout-shift', buffered: true });

  // Largest Contentful Paint (LCP)
  const lcpObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    console.log(`LCP: ${lastEntry.startTime}ms`);
    
    // Send to analytics if needed
    if (typeof gtag !== 'undefined') {
      gtag('event', 'LCP', {
        event_category: 'Web Vitals',
        value: Math.round(lastEntry.startTime),
        non_interaction: true,
      });
    }
  });

  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const fid = entry.processingStart - entry.startTime;
      
      console.log(`FID: ${fid}ms`);
      
      // Send to analytics if needed
      if (typeof gtag !== 'undefined') {
        gtag('event', 'FID', {
          event_category: 'Web Vitals',
          value: Math.round(fid),
          non_interaction: true,
        });
      }
    }
  });

  fidObserver.observe({ type: 'first-input', buffered: true });

  // Report CLS when page unloads
  window.addEventListener('beforeunload', () => {
    console.log(`CLS: ${clsValue}`);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'CLS', {
        event_category: 'Web Vitals',
        value: Math.round(clsValue * 1000) / 1000,
        non_interaction: true,
      });
    }
  });
};

// Initialize measurement when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', measureWebVitals);
  } else {
    measureWebVitals();
  }
}