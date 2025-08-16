import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { NAVIGATION_DATA } from '@/constants/navigation.js';

const EnhancedNavigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const location = useLocation();

  const navItems = Object.keys(NAVIGATION_DATA);

  const handleMouseEnter = (item, event) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    setPreviewPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 12
    });
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the preview, allowing time to move to it
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300);
  };

  const handlePreviewMouseEnter = () => {
    // Cancel the timeout when mouse enters the preview
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handlePreviewMouseLeave = () => {
    // Hide the preview when mouse leaves it
    setHoveredItem(null);
  };

  const isActivePage = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        preview: 'border-blue-200 bg-blue-50',
        icon: 'text-blue-600 bg-blue-100'
      },
      green: {
        preview: 'border-green-200 bg-green-50',
        icon: 'text-green-600 bg-green-100'
      },
      purple: {
        preview: 'border-purple-200 bg-purple-50',
        icon: 'text-purple-600 bg-purple-100'
      },
      orange: {
        preview: 'border-orange-200 bg-orange-50',
        icon: 'text-orange-600 bg-orange-100'
      },
      red: {
        preview: 'border-red-200 bg-red-50',
        icon: 'text-red-600 bg-red-100'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="relative">
      {/* Navigation Items */}
      <nav className="flex items-center space-x-1">
        {navItems.map((item) => {
          const data = NAVIGATION_DATA[item];
          const Icon = data.icon;

          return (
            <div
              key={item}
              className="relative"
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/${item}`}
                className={`relative px-4 py-2 rounded-lg transition-all duration-200 text-sm flex items-center gap-2 ${
                  isActivePage(`/${item}`)
                    ? 'text-primary bg-primary/10 font-medium'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="h-4 w-4" />
                {data.title}
                {isActivePage(`/${item}`) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Comprehensive Hover Preview */}
      {hoveredItem && NAVIGATION_DATA[hoveredItem].expandedContent && (
        <div
          className="fixed z-50 pointer-events-auto animate-in fade-in-0 slide-in-from-top-2 duration-300"
          style={{
            left: previewPosition.x,
            top: previewPosition.y,
            transform: 'translateX(-50%)'
          }}
        >
          <div
            className="w-[600px] bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden"
            onMouseEnter={handlePreviewMouseEnter}
            onMouseLeave={handlePreviewMouseLeave}
          >
            {/* Header Section */}
            <div className={`p-4 ${getColorClasses(NAVIGATION_DATA[hoveredItem].color).preview} border-b border-gray-200/50`}>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${getColorClasses(NAVIGATION_DATA[hoveredItem].color).icon}`}>
                  {React.createElement(NAVIGATION_DATA[hoveredItem].icon, { className: 'h-5 w-5' })}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {NAVIGATION_DATA[hoveredItem].expandedContent.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {NAVIGATION_DATA[hoveredItem].expandedContent.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-4">
              <div className="grid grid-cols-2 gap-6">
                {NAVIGATION_DATA[hoveredItem].expandedContent.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 rounded-md bg-muted">
                        {React.createElement(section.icon, { className: 'h-4 w-4 text-foreground' })}
                      </div>
                      <h4 className="font-medium text-sm text-foreground">{section.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.href}
                          className="block group p-2 rounded-md hover:bg-muted transition-colors duration-200"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                                {link.title}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                {link.description}
                              </div>
                            </div>
                            <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-0.5" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-sm text-foreground mb-0.5">
                      {NAVIGATION_DATA[hoveredItem].expandedContent.cta.title}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {NAVIGATION_DATA[hoveredItem].expandedContent.cta.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/${hoveredItem}`}
                      className="btn-secondary text-xs px-3 py-1.5"
                    >
                      View All
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                    <Link
                      to={NAVIGATION_DATA[hoveredItem].expandedContent.cta.href}
                      className="btn-primary text-xs px-3 py-1.5"
                    >
                      {NAVIGATION_DATA[hoveredItem].expandedContent.cta.button}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pointer Arrow */}
          <div 
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"
            style={{
              filter: 'drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.1))'
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default EnhancedNavigation;