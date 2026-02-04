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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.5!2d16.3382196!3d48.2273083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d076608fa8f55%3A0xdc2eb11092e237ec!2sWhyem%20barbershop%20x%20Co.!5e0!3m2!1sde!2sat!4v1707048000000!5m2!1sde!2sat"
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
