import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = ({ imageSrc, mobileImageSrc, children, className = "" }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    // Create parallax effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    tl.to(image, {
      y: "20%",
      ease: "none"
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Use mobile image if provided and on mobile/tablet, otherwise use desktop image
  const currentImageSrc = mobileImageSrc && isMobile ? mobileImageSrc : imageSrc;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        height: isMobile ? '100vh' : '70vh',
        minHeight: isMobile ? '600px' : '500px'
      }}
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${currentImageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          willChange: 'transform'
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground; 