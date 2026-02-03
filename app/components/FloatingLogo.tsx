'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FloatingLogo() {
  const floatingLogoRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let ticking = false;

    const logo = floatingLogoRef.current;
    const navbar = navbarRef.current;
    if (!logo || !navbar) return;

    let startSize: number;
    let startY: number;
    const endSize = 48;
    const navbarHeight = 64;

    const measure = () => {
      const isMobile = window.innerWidth <= 768;
      startSize = isMobile ? Math.min(window.innerWidth * 0.6, 240) : 450;
      startY = isMobile
        ? window.innerHeight * 0.3
        : window.innerHeight * 0.35;
      logo.style.width = `${startSize}px`;
      logo.style.height = `${startSize}px`;
    };
    measure();

    const endY = navbarHeight / 2;
    const maxScroll = 200;

    const handleScroll = () => {
      ticking = false;
      const progress = Math.min(window.scrollY / maxScroll, 1);

      const scale = 1 - progress * (1 - endSize / startSize);
      const currentY = startY + progress * (endY - startY);
      logo.style.transform = `translate(-50%, -50%) scale(${scale})`;
      logo.style.top = `${currentY}px`;

      navbar.style.opacity = `${progress}`;
      navbar.style.borderBottomColor =
        progress >= 0.8 ? 'rgba(255, 255, 255, 0.1)' : 'transparent';
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(handleScroll);
      }
    };

    const onResize = () => {
      measure();
      handleScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        className="navbar-blur"
        ref={navbarRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '64px',
          zIndex: 250,
          opacity: 0,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          background: 'rgba(10, 10, 10, 0.6)',
          borderBottom: '1px solid transparent',
        }}
      />

      <div
        className="floating-logo"
        ref={floatingLogoRef}
        style={{
          position: 'fixed',
          top: '35vh',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 300,
          width: '450px',
          height: '450px',
          pointerEvents: 'none',
        }}
      >
        <div
          className="logo-w animate-fade-in delay-200"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        >
          <Image
            src="/logo_w_white.png"
            alt="WHYEM Barber Logo W – Premium Barbershop Wien 1180"
            width={500}
            height={500}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div
          className="logo-y animate-fade-in delay-400"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        >
          <Image
            src="/logo_y_white.png"
            alt="WHYEM Barber Logo Y – Barbershop Weimarer Straße Wien"
            width={500}
            height={500}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </>
  );
}
