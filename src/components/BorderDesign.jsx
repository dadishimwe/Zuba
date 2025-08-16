import React from 'react';
import { Link } from 'react-router-dom';
import borderImage from '@/assets/images/borderdesign.png';

const BorderDesign = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`w-full relative ${className}`}>
      <div 
        className="w-full h-16 md:h-20 lg:h-24 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${borderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Legal Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white text-xs md:text-sm px-4">
            <div className="mb-1">
              © {currentYear} <span className="font-semibold">Zuba Broadband Technology</span>. All rights reserved.
            </div>
            <div className="mb-2 text-white/90">
              Licensed satellite internet installer • FCC ID: Various • Professional liability insured
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-white">
              <Link to="/legal/terms-of-service" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/legal/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/legal/cookie-policy" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
              <span>•</span>
              <Link to="/legal/accessibility-statement" className="hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderDesign; 