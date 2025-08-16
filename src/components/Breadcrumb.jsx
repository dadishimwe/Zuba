import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation()
  
  // Define page titles
  const pageTitles = {
    '/': 'Home',
    '/services': 'Services',
    '/solutions': 'Solutions', 
    '/about': 'About',
    '/blog': 'Blog',
    '/contact': 'Contact'
  }

  // Generate breadcrumb items
  const generateBreadcrumbs = () => {
    if (customItems) return customItems
    
    const pathnames = location.pathname.split('/').filter(x => x)
    
    const breadcrumbs = [
      { label: 'Home', path: '/', icon: Home }
    ]
    
    let currentPath = ''
    pathnames.forEach((pathname) => {
      currentPath += `/${pathname}`
      const title = pageTitles[currentPath] || pathname.charAt(0).toUpperCase() + pathname.slice(1)
      breadcrumbs.push({
        label: title,
        path: currentPath
      })
    })
    
    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') return null

  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            const Icon = breadcrumb.icon
            
            return (
              <li key={breadcrumb.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                )}
                
                {isLast ? (
                  <span className="text-blue-600 font-medium flex items-center">
                    {Icon && <Icon className="h-4 w-4 mr-1" />}
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    to={breadcrumb.path}
                    className="text-gray-500 hover:text-blue-600 transition-colors flex items-center"
                  >
                    {Icon && <Icon className="h-4 w-4 mr-1" />}
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb