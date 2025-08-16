import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Use eager loading for above-the-fold images
  const loadingAttr = priority ? 'eager' : loading;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      
      {hasError ? (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400"
          style={{ width, height }}
        >
          <span>Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loadingAttr}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;