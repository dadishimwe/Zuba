import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Breadcrumb from './components/Breadcrumb'
import SkipLink from './components/SkipLink'
import Preloader from './components/Preloader'
import PerformanceMonitor from './components/PerformanceMonitor'
import ScrollToTopButton from './components/ScrollToTopButton'
import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollToTop from './hooks/useScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import StarlinkServices from './pages/StarlinkServices'
import PeplinkServices from './pages/PeplinkServices'
import BankingFinance from './pages/industries/BankingFinance'
import Hospitality from './pages/industries/Hospitality'
import Education from './pages/industries/Education'
import Government from './pages/industries/Government'
import Restaurants from './pages/industries/Restaurants'
import Manufacturing from './pages/industries/Manufacturing'
import TermsOfService from './pages/legal/TermsOfService'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import CookiePolicy from './pages/legal/CookiePolicy'
import AccessibilityStatement from './pages/legal/AccessibilityStatement'
import './App.css'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  
  // Initialize smooth scrolling
  useSmoothScroll()

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
  }

  return (
    <Router>
      <AppContent showPreloader={showPreloader} onPreloaderComplete={handlePreloaderComplete} />
    </Router>
  )
}

function AppContent({ showPreloader, onPreloaderComplete }) {
  // Initialize scroll to top on route changes
  useScrollToTop()

  return (
    <>
      <PerformanceMonitor />
      {showPreloader && <Preloader onComplete={onPreloaderComplete} />}
      
      <div className="min-h-screen bg-white">
        <SkipLink />
        <ScrollProgress />
        <Header />
        <Breadcrumb />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/starlink-services" element={<StarlinkServices />} />
            <Route path="/peplink-services" element={<PeplinkServices />} />
            <Route path="/solutions/banking-finance" element={<BankingFinance />} />
            <Route path="/solutions/hospitality" element={<Hospitality />} />
            <Route path="/solutions/education" element={<Education />} />
            <Route path="/solutions/government" element={<Government />} />
            <Route path="/solutions/restaurants-cafes" element={<Restaurants />} />
            <Route path="/solutions/manufacturing-industrial" element={<Manufacturing />} />
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
            <Route path="/legal/accessibility-statement" element={<AccessibilityStatement />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  )
}

export default App
