'use client';

import { useEffect, useRef, useState } from 'react';

export default function LazyMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !mapLoaded) {
          setMapLoaded(true);
        }
      },
      { threshold: 0.1, rootMargin: '200px' },
    );

    if (mapRef.current) {
      mapObserver.observe(mapRef.current);
    }
    return () => mapObserver.disconnect();
  }, [mapLoaded]);

  return (
    <div className="map-container reveal" ref={mapRef}>
      {mapLoaded ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.875548!2d16.3146956!3d48.2327785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07b1e5e5e5e5%3A0x0!2sWeimarer%20Stra%C3%9Fe%2013%2C%201180%20Wien!5e0!3m2!1sde!2sat!4v1738252800000!5m2!1sde!2sat"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="WHYEM Barber - Weimarer Straße 13, 1180 Wien"
        />
      ) : (
        <div className="map-placeholder">
          <span>📍</span>
          <p>Karte wird geladen...</p>
        </div>
      )}
    </div>
  );
}
