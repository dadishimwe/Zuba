import { useState } from 'react'
import { Image, Satellite } from 'lucide-react'

const ImagePlaceholder = ({ 
  width = 400, 
  height = 300, 
  alt = 'Image', 
  className = '',
  type = 'general', // 'general', 'satellite', 'tech', 'team'
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const getIcon = () => {
    switch (type) {
      case 'satellite':
        return <Satellite className="h-12 w-12 text-slate-400" />
      case 'tech':
        return <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">📡</span>
        </div>
      case 'team':
        return <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-lg">👤</span>
        </div>
      default:
        return <Image className="h-12 w-12 text-slate-400" />
    }
  }

  const getLabel = () => {
    switch (type) {
      case 'satellite':
        return 'Satellite Equipment'
      case 'tech':
        return 'Technology Solution'
      case 'team':
        return 'Team Member'
      default:
        return 'Image Placeholder'
    }
  }

  return (
    <div 
      className={`bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center ${className}`}
      style={{ width, height }}
      {...props}
    >
      {getIcon()}
      <span className="text-slate-500 text-sm mt-2 text-center">{getLabel()}</span>
      {alt && alt !== 'Image' && (
        <span className="text-slate-400 text-xs mt-1 text-center px-2">{alt}</span>
      )}
    </div>
  )
}

export default ImagePlaceholder