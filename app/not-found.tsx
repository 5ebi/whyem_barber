import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="legal-page">
      <div className="legal-container" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem', opacity: 0.3 }}>
          <Image
            src="/logo_clean_small.png"
            alt="WHYEM Logo"
            width={120}
            height={120}
            style={{ margin: '0 auto' }}
          />
        </div>

        <h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 200,
            marginBottom: '1rem',
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 300,
            marginBottom: '2rem',
          }}
        >
          Seite nicht gefunden
        </h2>

        <p
          style={{
            color: 'var(--gray-400)',
            marginBottom: '3rem',
            maxWidth: '500px',
            margin: '0 auto 3rem',
          }}
        >
          Die gesuchte Seite existiert nicht oder wurde verschoben.
          <br />
          Kehre zurück zur Startseite und finde, was du suchst.
        </p>

        <Link href="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
