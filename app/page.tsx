import Image from 'next/image';
import Link from 'next/link';
import FloatingLogo from './components/FloatingLogo';
import ScrollAnimations from './components/ScrollAnimations';
import LazyMap from './components/LazyMap';
import BookingButton from './components/BookingButton';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': 'https://www.whyem.com/#barbershop',
    name: 'WHYEM Barber',
    alternateName: 'Whyem Barbershop & Co',
    image: [
      'https://www.whyem.com/mudi_barber.webp',
      'https://www.whyem.com/customer1.webp',
      'https://www.whyem.com/customer2.webp',
      'https://www.whyem.com/customer3.webp',
    ],
    description:
      'Premium Barber in Wien 1180 – Bester Barber Wien Währing mit über 17 Jahren Erfahrung. Spezialisiert auf Haarschnitte, Fade Cuts, Bartpflege und Styling.',
    url: 'https://www.whyem.com',
    telephone: '+436605857123',
    email: 'barbermudi@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Weimarer Straße 13',
      addressLocality: 'Wien',
      addressRegion: 'Wien',
      postalCode: '1180',
      addressCountry: 'AT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.2273048,
      longitude: 16.3407945,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:30',
        closes: '16:00',
      },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Card',
    founder: {
      '@type': 'Person',
      name: 'Mudi',
      jobTitle: 'Master Barber',
      award: '1. Platz Barber Battle Vienna 2022',
    },
    sameAs: [
      'https://buchung.treatwell.at/ort/513506/menue/',
      'https://www.instagram.com/haarmudi',
      'https://share.google/QtVNlD4o6YLf70eIM',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Barbershop Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'The Signature Cut',
            description: 'Beratung, Haarwäsche & Styling',
            provider: {
              '@type': 'HairSalon',
              name: 'WHYEM Barber',
            },
          },
          price: '42.00',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Beard Design & Contour',
            description: 'Formgebung & Messer-Kontur inkl. UV-C Heißkompresse',
            provider: {
              '@type': 'HairSalon',
              name: 'WHYEM Barber',
            },
          },
          price: '35.00',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'The Essentials',
            description:
              'Signature Cut, Beard Design & entspannende Kopfmassage',
            provider: {
              '@type': 'HairSalon',
              name: 'WHYEM Barber',
            },
          },
          price: '75.00',
          priceCurrency: 'EUR',
        },
      ],
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <FloatingLogo />

      <ScrollAnimations>
        <section className="hero">
          <div className="hero-content">
            <h1 className="sr-only">
              WHYEM – Dein Premium Barber in Wien 1180 | Bester Barber Wien
              Währing
            </h1>
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
                alt="WHYEM Schriftzug – Barbershop Wien Währing"
                width={330}
                height={100}
                priority
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
                alt="Barbershop & Co"
                width={330}
                height={100}
                priority
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
            <BookingButton
              location="hero"
              className="btn-primary animate-fade-in-up delay-1200"
              style={{ margin: '48px 0' }}
            />
          </div>
          <div className="scroll-indicator animate-fade-in-up delay-1400">
            <span />
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-content reveal">
                <span className="section-tag">Über uns</span>
                <h2>Die Antwort auf das &bdquo;Warum&ldquo;</h2>
                <p>
                  In der <strong>Weimarer Straße 13</strong> stellen wir eine
                  einfache Frage: Why? Warum solltest du dich mit einem
                  durchschnittlichen Haarschnitt zufrieden geben? Warum sollte
                  dein Besuch beim Barber nur eine Pflicht sein und kein
                  Erlebnis?
                </p>
                <p>
                  <strong>Whyem</strong> ist die Antwort für alle, die den
                  besten Barber in Wien suchen.
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
                        Weil wir als Premium Barber in Wien 1180 das Handwerk
                        nicht nur ausüben, sondern jeden Tag perfektionieren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="barber" id="barber">
          <div className="container">
            <div className="barber-grid">
              <div className="barber-image reveal">
                <Image
                  src="/mudi_barber.webp"
                  alt="Mudi – Bester Barber Wien | Master Barber mit 17 Jahren Erfahrung in Wien 1180"
                  width={650}
                  height={800}
                  sizes="(max-width: 968px) 100vw, 50vw"
                />
              </div>
              <div className="barber-content reveal">
                <span className="section-tag">Der Barber</span>
                <h2>MUDI</h2>
                <p className="barber-intro">
                  Gründer und Master Barber in Wien. Meister aller
                  Schnitttechniken inkl. Transition-Styles &amp; Fade Cuts.{' '}
                  <br />
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
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="services-header reveal">
              <span className="section-tag">Preisliste 2026</span>
              <h2>Services</h2>
            </div>

            <div className="service-category reveal">
              <div className="category-header">
                <span className="category-icon"></span>
                <h3>HAIR</h3>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <div className="service-info">
                    <h4>The Signature Cut</h4>
                    <p>Beratung, Haarwäsche &amp; Styling</p>
                    <span className="service-duration">40 min</span>
                  </div>
                  <span className="service-price">&euro; 42</span>
                </div>
                <div className="service-item">
                  <div className="service-info">
                    <h4>Young Gent (Kids Cut)</h4>
                    <p>
                      Einzelschnitt für die junge Generation – inkl. Wäsche auf
                      Wunsch
                    </p>
                    <span className="service-duration">30 min</span>
                  </div>
                  <span className="service-price">&euro; 35</span>
                </div>
              </div>
            </div>

            <div className="service-category reveal">
              <div className="category-header">
                <span className="category-icon"></span>
                <h3>BEARD</h3>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <div className="service-info">
                    <h4>Beard Design &amp; Contour</h4>
                    <p>
                      Formgebung &amp; Messer-Kontur inkl. UV-C Heißkompresse
                    </p>
                    <span className="service-duration">30 min</span>
                  </div>
                  <span className="service-price">&euro; 35</span>
                </div>
                <div className="service-item">
                  <div className="service-info">
                    <h4>Traditional Full Shave</h4>
                    <p>Klassische Messer-Vollrasur &amp; intensive Pflege</p>
                    <span className="service-duration">45 min</span>
                  </div>
                  <span className="service-price">&euro; 45</span>
                </div>
              </div>
            </div>

            <div className="service-category reveal">
              <div className="category-header">
                <span className="category-icon"></span>
                <h3>COMBOS</h3>
              </div>
              <div className="service-list">
                <div className="service-item featured">
                  <div className="service-info">
                    <h4>The Essentials</h4>
                    <p>
                      Signature Cut, Beard Design &amp; entspannende Kopfmassage
                    </p>
                    <span className="service-duration">80 min</span>
                  </div>
                  <span className="service-price">&euro; 75</span>
                </div>
                <div className="service-item">
                  <div className="service-info">
                    <h4>The Legacy (Dad &amp; Son)</h4>
                    <p>Das Ritual für Vater &amp; Sohn</p>
                    <span className="service-duration">75 min</span>
                  </div>
                  <span className="service-price">&euro; 75</span>
                </div>
                <div className="service-item">
                  <div className="service-info">
                    <h4>Jeder weitere Young Gent</h4>
                    <p>Zusätzlicher Kinderhaarschnitt</p>
                    <span className="service-duration">30 min</span>
                  </div>
                  <span className="service-price">&euro; 30</span>
                </div>
                <div className="service-item premium">
                  <div className="service-info">
                    <h4>The Full Ritual</h4>
                    <p>Schnitt, Bart, Massage, Waxing/Threading</p>
                    <span className="service-duration">90 min</span>
                  </div>
                  <span className="service-price">&euro; 95</span>
                </div>
              </div>
            </div>

            <div className="service-category reveal">
              <div className="category-header">
                <span className="category-icon"></span>
                <h3>TREATMENTS</h3>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <div className="service-info">
                    <h4>The Calm</h4>
                    <p>Tiefenentspannende Kopf- &amp; Nackenmassage</p>
                    <span className="service-duration">15 min</span>
                  </div>
                  <span className="service-price">&euro; 15</span>
                </div>
                <div className="service-item">
                  <div className="service-info">
                    <h4>Nose &amp; Ear Waxing / Threading</h4>
                    <p>Professionelle Nasen- &amp; Ohrenhaarpflege</p>
                    <span className="service-duration">10 min</span>
                  </div>
                  <span className="service-price">&euro; 12</span>
                </div>
              </div>
            </div>

            <div className="whyem-standard reveal">
              <h3 style={{ opacity: '0.7' }}>WHYEM STANDARD</h3>
              <p className="standard-tagline">Hygiene ohne Kompromisse.</p>
              <p>
                Wir verwenden ausschließlich Handtücher, die mittels UV-C Licht
                klinisch rein desinfiziert und für Ihr Wohlbefinden konstant
                beheizt werden.
              </p>
            </div>

            <div className="coming-soon-section reveal">
              <div className="coming-soon-label">COMING SOON</div>

              <div className="service-category coming-soon">
                <div className="category-header">
                  <span className="category-icon"></span>
                  <h3>WELLNESS BY SPECIALIST</h3>
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

              <div className="service-category coming-soon">
                <div className="category-header">
                  <span className="category-icon"></span>
                  <h3>ERWEITERTE COMBOS</h3>
                </div>
                <div className="service-list">
                  <div className="service-item premium">
                    <div className="service-info">
                      <h4>The Full Ritual</h4>
                      <p>Schnitt, Bart, Deep Head Spa &amp; Waxing</p>
                      <span className="service-duration">90 min</span>
                    </div>
                    <span className="service-price">&euro; 95</span>
                  </div>
                  <div className="service-item premium">
                    <div className="service-info">
                      <h4>The Guardian Experience</h4>
                      <p>
                        Signature Cut, Beard Design, Guardian Ritual &amp;
                        Waxing
                      </p>
                      <span className="service-duration">120 min</span>
                    </div>
                    <span className="service-price">&euro; 129</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hours" id="hours">
          <div className="container">
            <div className="hours-content reveal">
              <span className="section-tag">Öffnungszeiten</span>
              <h2>Wann wir für dich da sind</h2>
              <div className="hours-grid">
                <div className="hours-item closed">
                  <span className="day">Montag</span>
                  <span className="time">Geschlossen</span>
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
                  <span className="time">09:30 &ndash; 16:00</span>
                </div>
                <div className="hours-item closed">
                  <span className="day">Sonntag</span>
                  <span className="time">Geschlossen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="container">
            <div className="gallery-header reveal">
              <span className="section-tag">Galerie</span>
              <h2>Unsere Arbeiten</h2>
            </div>
            <div className="gallery-grid reveal">
              {[1, 2, 3].map((i) => (
                <div className="gallery-item" key={i}>
                  {i === 1 || i === 2 || i === 3 ? (
                    <Image
                      src={
                        i === 1
                          ? '/customer1.webp'
                          : i === 2
                            ? '/customer2.webp'
                            : '/customer3.webp'
                      }
                      alt={
                        i === 1
                          ? 'Low Fade Haarschnitt von hinten – WHYEM Barber Wien'
                          : i === 2
                            ? 'Mid Fade Haarschnitt von der Seite – WHYEM Barber Wien'
                            : 'Low Fade Haarschnitt seitlich – Fade Cut Barbershop Wien 1180'
                      }
                      width={800}
                      height={800}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="gallery-placeholder">✂</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

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
                    Tel:{' '}
                    <a
                      href="tel:+436605857123"
                      style={{ textDecoration: 'none' }}
                    >
                      +43 660 5857123
                    </a>
                    <br />
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/436605857123"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'underline' }}
                    >
                      Nachricht senden
                    </a>
                    <br />
                    E-Mail:{' '}
                    <a
                      href="mailto:barbermudi@gmail.com"
                      style={{ textDecoration: 'none' }}
                    >
                      barbermudi@gmail.com
                    </a>
                  </p>
                </div>
                <div className="info-block">
                  <h3>Social</h3>
                  <div className="social-links">
                    <a
                      href="https://www.instagram.com/haarmudi"
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
                  </div>
                </div>
              </div>
              <div className="contact-cta reveal">
                <h3>
                  Dein Barber ist bereit.
                  <br /> Bist du es?
                </h3>
                <BookingButton location="contact" />
              </div>
            </div>

            <LazyMap />
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <div className="footer-logo">
                <Image
                  src="/logo_clean_small.png"
                  alt="WHYEM Barber Logo"
                  width={125}
                  height={125}
                  loading="lazy"
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
                &copy; {new Date().getFullYear()} WHYEM. Alle Rechte
                vorbehalten.
              </p>
              <p>
                Made by{' '}
                <a
                  href="https://sebastianspeiser.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sebastian Speiser
                </a>
              </p>
            </div>
          </div>
        </footer>
      </ScrollAnimations>
    </main>
  );
}
