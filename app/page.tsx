'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const theme = 'dark';
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const floatingLogoRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!floatingLogoRef.current || !navbarRef.current) return;

      const scrolled = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(scrolled / maxScroll, 1);

      // Logo Animation
      const logo = floatingLogoRef.current;
      const isMobile = window.innerWidth <= 768;
      const startTop = isMobile ? 30 : 35; // vh - mobile starts higher
      const endTop = 40; // px (center of 80px navbar)
      const currentTop =
        progress < 1
          ? `calc(${startTop}vh - ${progress * startTop}vh + ${progress * endTop}px)`
          : `${endTop}px`;
      logo.style.top = currentTop;

      // Responsive logo sizes
      const startSize = isMobile ? Math.min(window.innerWidth * 0.9, 336) : 480;
      const endSize = 80;
      const currentSize = startSize - progress * (startSize - endSize);
      logo.style.width = `${currentSize}px`;
      logo.style.height = `${currentSize}px`;

      // Navbar Opacity + Border - blur fades in while logo moves
      const navbar = navbarRef.current;
      const navbarOpacity = Math.min(progress * 2, 1);
      navbar.style.opacity = `${navbarOpacity}`;
      navbar.style.borderBottomColor =
        progress >= 1
          ? document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)'
          : 'transparent';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
    <>
      {/* NAVBAR WITH BLUR */}
      <div
        className="navbar-blur"
        ref={navbarRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          zIndex: 250,
          opacity: 0,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          background:
            theme === 'dark'
              ? 'rgba(10, 10, 10, 0.6)'
              : 'rgba(255, 255, 255, 0.6)',
          borderBottom: '1px solid transparent',
        }}
      />

      {/* FLOATING LOGO */}
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
        {/* W Logo */}
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
            src={theme === 'dark' ? '/logo_w_white.png' : '/logo_w_black.png'}
            alt="W"
            width={500}
            height={500}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        {/* Y Logo */}
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
            src={theme === 'dark' ? '/logo_y_white.png' : '/logo_y_black.png'}
            alt="Y"
            width={500}
            height={500}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div
            className="hero-logo-spacer"
            style={{
              width: 'min(400px, 80vw)',
              height: 'min(500px, 90vw)',
              marginBottom: '0rem',
            }}
          />
          <div
            style={{
              position: 'relative',
              width: 'min(400px, 80vw)',
              aspectRatio: '330 / 100',
              marginTop: 'clamp(-40px, -5vw, -60px)',
              marginBottom: '24px',
            }}
          >
            <Image
              src="/whyem.webp"
              alt="WHYEM"
              width={330}
              height={100}
              className="animate-fade-in-up delay-600"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src="/barbershop_x_co.webp"
              alt="Barbershop x co"
              width={330}
              height={100}
              className="animate-fade-in-up-60 delay-800"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: 'auto',
              }}
            />
          </div>

          <div className="hero-tagline animate-fade-in-up delay-1000">
            <span>Wien</span>
            <span className="divider" />
            <span>1180</span>
            <span className="divider" />
            <span>Est. 2026</span>
          </div>
          <a
            href="https://www.treatwell.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-fade-in-up delay-1200"
            style={{ margin: '48px 0' }}
          >
            Termin jetzt buchen
          </a>
        </div>
        <div className="scroll-indicator animate-fade-in-up delay-1400">
          <span />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal">
              <Image
                src="/stock_foto1.webp"
                alt="Barbershop"
                width={650}
                height={800}
              />
            </div>
            <div className="about-content reveal">
              <span className="section-tag">Über uns</span>
              <h2>Die Antwort auf das &bdquo;Warum&ldquo;</h2>
              <p>
                In der <strong>Weimarer Straße 13</strong> stellen wir eine
                einfache Frage: Why? Warum solltest du dich mit einem
                durchschnittlichen Haarschnitt zufrieden geben? Warum sollte ein
                Barber-Besuch nur eine Pflicht sein und kein Erlebnis?
              </p>
              <p>
                <strong>Whyem</strong> ist die Antwort für alle, die mehr
                erwarten.
              </p>
              <div className="why-points">
                <div className="why-point">
                  <span className="why-icon">01</span>
                  <div>
                    <strong>Why Precision?</strong>
                    <p>
                      Weil ein Millimeter den Unterschied zwischen
                      &bdquo;gut&ldquo; und &bdquo;perfekt&ldquo; macht.
                    </p>
                  </div>
                </div>
                <div className="why-point">
                  <span className="why-icon">02</span>
                  <div>
                    <strong>Why Style?</strong>
                    <p>
                      Weil dein Look dein erstes Statement ist, noch bevor du
                      ein Wort sagst.
                    </p>
                  </div>
                </div>
                <div className="why-point">
                  <span className="why-icon">03</span>
                  <div>
                    <strong>Why Us?</strong>
                    <p>
                      Weil wir in 1180 Wien das Handwerk nicht nur ausüben,
                      sondern jeden Tag hinterfragen, um noch besser zu werden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BARBER */}
      <section className="barber" id="barber">
        <div className="container">
          <div className="barber-content reveal">
            <span className="section-tag">Der Barber</span>
            <h2>MUDI</h2>
            <p className="barber-intro">
              Gründer und Master Barber. Meister aller Schnitttechniken inkl.
              Transition-Styles &amp; Fade Cuts. <br />
              Gewinner: 1. Platz &bdquo;Barber Battle Vienna 2022&ldquo;.
            </p>
            <div className="barber-stats">
              <div className="stat">
                <span className="stat-number">17+</span>
                <span className="stat-text">Jahre Erfahrung</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-text">Zufriedene Kunden</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-text">Leidenschaft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header reveal">
            <span className="section-tag">Preisliste 2026</span>
            <h2>Services</h2>
          </div>

          {/* Hair */}
          <div className="service-category reveal">
            <div className="category-header">
              <span className="category-icon"></span>
              <h3>HAIR</h3>
            </div>
            <div className="service-list">
              <div className="service-item">
                <div className="service-info">
                  <h4>The Signature Cut</h4>
                  <p>Beratung, Wäsche, Schnitt &amp; Styling</p>
                  <span className="service-duration">40 min</span>
                </div>
                <span className="service-price">&euro; 42</span>
              </div>
              <div className="service-item">
                <div className="service-info">
                  <h4>Young Gent (Kids Cut)</h4>
                  <p>Kinderhaarschnitt</p>
                  <span className="service-duration">30 min</span>
                </div>
                <span className="service-price">&euro; 35</span>
              </div>
            </div>
          </div>

          {/* Beard */}
          <div className="service-category reveal">
            <div className="category-header">
              <span className="category-icon"></span>
              <h3>BEARD</h3>
            </div>
            <div className="service-list">
              <div className="service-item">
                <div className="service-info">
                  <h4>Beard Design &amp; Contour</h4>
                  <p>Form &amp; Messer-Kontur inkl. UV-C Heißkompresse</p>
                  <span className="service-duration">30 min</span>
                </div>
                <span className="service-price">&euro; 35</span>
              </div>
              <div className="service-item">
                <div className="service-info">
                  <h4>Traditional Full Shave</h4>
                  <p>Klassische Vollrasur</p>
                  <span className="service-duration">45 min</span>
                </div>
                <span className="service-price">&euro; 45</span>
              </div>
            </div>
          </div>

          {/* Wellness */}
          <div className="service-category reveal">
            <div className="category-header">
              <span className="category-icon"></span>
              <h3>WELLNESS</h3>
            </div>
            <div className="service-list">
              <div className="service-item">
                <div className="service-info">
                  <h4>Deep Head Spa</h4>
                  <p>Kopf, Schläfen &amp; Nacken Massage</p>
                  <span className="service-duration">25 min</span>
                </div>
                <span className="service-price">&euro; 29</span>
              </div>
              <div className="service-item">
                <div className="service-info">
                  <h4>The Guardian Ritual</h4>
                  <p>Gesichtsmassage, Hot Towel &amp; Kopf-Wellness</p>
                  <span className="service-duration">40 min</span>
                </div>
                <span className="service-price">&euro; 60</span>
              </div>
            </div>
          </div>

          {/* Combos */}
          <div className="service-category reveal">
            <div className="category-header">
              <span className="category-icon"></span>
              <h3>COMBOS</h3>
            </div>
            <div className="service-list">
              <div className="service-item featured">
                <div className="service-info">
                  <h4>The Essentials</h4>
                  <p>Signature Cut + Beard Design + Deep Head Spa</p>
                  <span className="service-duration">80 min</span>
                </div>
                <span className="service-price">&euro; 75</span>
              </div>
              <div className="service-item premium">
                <div className="service-info">
                  <h4>The Full Ritual</h4>
                  <p>Schnitt + Beard Design + Deep Head Spa + Waxing</p>
                  <span className="service-duration">90 min</span>
                </div>
                <span className="service-price">&euro; 95</span>
              </div>
              <div className="service-item premium">
                <div className="service-info">
                  <h4>The Guardian Experience</h4>
                  <p>Signature Cut + Beard Design + Guardian Ritual + Waxing</p>
                  <span className="service-duration">120 min</span>
                </div>
                <span className="service-price">&euro; 129</span>
              </div>
              <div className="service-item">
                <div className="service-info">
                  <h4>The Legacy (Dad &amp; Son)</h4>
                  <p>Vater &amp; Sohn Combo</p>
                  <span className="service-duration">75 min</span>
                </div>
                <span className="service-price">&euro; 75</span>
              </div>
            </div>
          </div>

          {/* Add-Ons */}
          <div className="service-category reveal">
            <div className="category-header">
              <span className="category-icon"></span>
              <h3>ADD-ONS</h3>
            </div>
            <div className="service-list">
              <div className="service-item">
                <div className="service-info">
                  <h4>Nose &amp; Ear Waxing</h4>
                  <p>Schonendes Waxing für Nase &amp; Ohren</p>
                  <span className="service-duration">10 min</span>
                </div>
                <span className="service-price">&euro; 12</span>
              </div>
            </div>
          </div>

          {/* WHYEM Standard Box */}
          <div className="whyem-standard reveal">
            <div className="standard-icon"></div>
            <h3 style={{ opacity: '0.5' }}>WHYEM STANDARD</h3>
            <p className="standard-tagline">Bei jedem Service inklusive</p>
            <p>
              Frische Einweg-Materialien &bull; Desinfizierte Werkzeuge <br />
              UV-Licht gereinigte Handtücher &bull; Premium Pflegeprodukte
              &bull; Heißes Tuch Finish &bull; Styling Beratung
            </p>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="hours" id="hours">
        <div className="container">
          <div className="hours-content reveal">
            <span className="section-tag">Öffnungszeiten</span>
            <h2>Wann wir für dich da sind</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <span className="day">Montag</span>
                <span className="time">geschlossen</span>
              </div>
              <div className="hours-item">
                <span className="day">Dienstag</span>
                <span className="time">09:30 &ndash; 19:00</span>
              </div>
              <div className="hours-item">
                <span className="day">Mittwoch</span>
                <span className="time">09:30 &ndash; 19:00</span>
              </div>
              <div className="hours-item">
                <span className="day">Donnerstag</span>
                <span className="time">09:30 &ndash; 19:00</span>
              </div>
              <div className="hours-item">
                <span className="day">Freitag</span>
                <span className="time">09:30 &ndash; 19:00</span>
              </div>
              <div className="hours-item">
                <span className="day">Samstag</span>
                <span className="time">09:30 &ndash; 19:00</span>
              </div>
              <div className="hours-item closed">
                <span className="day">Sonntag</span>
                <span className="time">Geschlossen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-header reveal">
            <span className="section-tag">Galerie</span>
            <h2>Unsere Arbeiten</h2>
          </div>
          <div className="gallery-grid reveal">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="gallery-item" key={i}>
                <div className="gallery-placeholder">✂</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-header reveal">
            <span className="section-tag">Kontakt</span>
          </div>
          <div className="contact-grid">
            <div className="contact-info reveal">
              <div className="info-block">
                <h3>Adresse</h3>
                <p>
                  Weimarer Straße 13
                  <br />
                  1180 Wien, Österreich
                </p>
              </div>
              <div className="info-block">
                <h3>Kontakt</h3>
                <p>
                  Tel: +43 XXX XXX XX XX
                  <br />
                  E-Mail: info@whyem.at
                </p>
              </div>
              <div className="info-block">
                <h3>Social</h3>
                <div className="social-links">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="18" cy="6" r="1" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-cta reveal">
              <h3>
                Dein Barber ist bereit.
                <br /> Bist du es?
                <br />
              </h3>

              <a
                href="https://www.treatwell.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Termin jetzt buchen
              </a>
            </div>
          </div>

          <div className="map-container reveal" ref={mapRef}>
            {mapLoaded ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.123456789!2d16.3333333!3d48.2333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWeimarer%20Stra%C3%9Fe%2013%2C%201180%20Wien!5e0!3m2!1sde!2sat!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WHYEM Barber Location"
              />
            ) : (
              <div className="map-placeholder">
                <span>📍</span>
                <p>Karte wird geladen...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <Image
                src="/logo_clean_small.png"
                alt="WHYEM"
                width={125}
                height={125}
              />
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Adresse</h4>
                <p>
                  Weimarer Straße 13
                  <br />
                  1180 Wien
                </p>
              </div>

              <div className="footer-column">
                <h4>Rechtliches</h4>
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} WHYEM. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
