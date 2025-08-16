import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import EnhancedNavigation from './EnhancedNavigation'
import fullLogo from '@/assets/logos/zubabroadbandfull.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navItems = [
    { path: '/services', label: 'Services' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActivePage = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={fullLogo} 
                alt="Zuba Broadband Technology" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <EnhancedNavigation />
          </div>

          {/* Right side button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" className="btn-primary">
              Get started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="nav-link p-2"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-muted-foreground hover:text-foreground rounded-md transition-colors ${
                    isActivePage(item.path) ? 'text-foreground font-medium bg-muted' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <Link to="/contact" className="btn-primary w-full justify-center" onClick={toggleMenu}>
                  Get started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header