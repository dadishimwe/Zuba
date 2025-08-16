import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/company.js';

const LocationMap = ({ className = "" }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    
    script.onload = () => {
      if (window.L && mapRef.current && !mapInstanceRef.current) {
        // Initialize map
        const map = window.L.map(mapRef.current).setView([-1.9441, 30.0619], 15); // Kigali coordinates
        
        // Add OpenStreetMap tiles
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19
        }).addTo(map);

        // Add custom marker
        const customIcon = window.L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="
              background: #2563eb;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
            ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          `,
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40]
        });

        // Add marker for Zuba Broadband location
        const marker = window.L.marker([-1.9441, 30.0619], { icon: customIcon }).addTo(map);
        
        // Add popup with company info
        marker.bindPopup(`
          <div style="text-align: center; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-weight: bold;">Zuba Broadband Technology</h3>
            <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">KG 569 St, Kigali, Rwanda</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">(+250) 0790 099 777</p>
          </div>
        `);

        mapInstanceRef.current = map;
        setIsLoading(false);
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Visit our office in Kigali, Rwanda for consultations, installations, and support.
          </p>
        </div>
        
        <div className="relative">
          {/* Map Container */}
          <div 
            ref={mapRef} 
            className="w-full h-[400px] md:h-[500px] rounded-2xl shadow-lg border border-border overflow-hidden"
            style={{ minHeight: '400px' }}
          />
          
          {/* Map Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Contact Info Below Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-6 bg-background rounded-xl border border-border">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground text-sm">{COMPANY_INFO.contact.address.street}, {COMPANY_INFO.contact.address.city}</p>
          </div>
          <div className="text-center p-6 bg-background rounded-xl border border-border">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">{COMPANY_INFO.contact.phone}</p>
          </div>
          <div className="text-center p-6 bg-background rounded-xl border border-border">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">{COMPANY_INFO.contact.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap; 