const SkeletonLoader = ({ 
  variant = 'text', 
  width = '100%', 
  height = '1rem',
  className = '',
  count = 1 
}) => {
  const skeletonClass = `animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded ${className}`

  const renderSkeleton = (index) => {
    switch (variant) {
      case 'text':
        return (
          <div
            key={index}
            className={`${skeletonClass} mb-2`}
            style={{ width, height }}
          />
        )
      case 'card':
        return (
          <div key={index} className={`${skeletonClass} rounded-lg p-4 mb-4`} style={{ width, height: height || '200px' }}>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-4/6"></div>
            </div>
          </div>
        )
      case 'avatar':
        return (
          <div key={index} className={`${skeletonClass} rounded-full`} style={{ width: width || '48px', height: height || '48px' }} />
        )
      case 'button':
        return (
          <div key={index} className={`${skeletonClass} rounded`} style={{ width: width || '120px', height: height || '40px' }} />
        )
      case 'image':
        return (
          <div key={index} className={`${skeletonClass} rounded`} style={{ width, height: height || '200px' }} />
        )
      default:
        return (
          <div key={index} className={skeletonClass} style={{ width, height }} />
        )
    }
  }

  return (
    <div className="skeleton-container">
      {Array.from({ length: count }, (_, index) => renderSkeleton(index))}
    </div>
  )
}

// Specific skeleton components for common use cases
export const CardSkeleton = ({ count = 1 }) => (
  <SkeletonLoader variant="card" count={count} />
)

export const TextSkeleton = ({ lines = 3 }) => (
  <div>
    {Array.from({ length: lines }, (_, index) => (
      <SkeletonLoader 
        key={index}
        variant="text" 
        width={index === lines - 1 ? '75%' : '100%'} 
      />
    ))}
  </div>
)

export const ImageSkeleton = ({ width = '100%', height = '200px' }) => (
  <SkeletonLoader variant="image" width={width} height={height} />
)

export default SkeletonLoader