import Link from 'next/link';

export default function Impressum() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="back-link">
          ← Zurück zur Startseite
        </Link>

        <h1>Impressum</h1>

        <section>
          <h2>Angaben gemäß § 5 ECG</h2>
          <p>
            <strong>WHYEM Barber Studio</strong>
            <br />
            Weimarer Straße 13
            <br />
            1180 Wien
            <br />
            Österreich
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: [TELEFONNUMMER EINFÜGEN]
            <br />
            E-Mail: [EMAIL EINFÜGEN]
          </p>
        </section>

        <section>
          <h2>Unternehmensgegenstand</h2>
          <p>Friseur- und Barbierdienstleistungen</p>
        </section>

        <section>
          <h2>Inhaber / Geschäftsführer</h2>
          <p>[NAME DES INHABERS EINFÜGEN]</p>
        </section>

        <section>
          <h2>UID-Nummer</h2>
          <p>[UID-NUMMER EINFÜGEN]</p>
        </section>

        <section>
          <h2>Gewerbebehörde</h2>
          <p>Magistrat der Stadt Wien</p>
        </section>

        <section>
          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Friseur und Perückenmacher (Stylist)
            <br />
            Verleihungsstaat: Österreich
          </p>
          <p>
            Es gelten folgende berufsrechtliche Regelungen:
            <br />
            Gewerbeordnung:{' '}
            <a
              href="https://www.ris.bka.gv.at"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ris.bka.gv.at
            </a>
          </p>
        </section>

        <section>
          <h2>Wirtschaftskammer</h2>
          <p>
            Mitglied der Wirtschaftskammer Wien
            <br />
            Fachgruppe der Friseure
          </p>
        </section>

        <section>
          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 ECG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 ECG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem österreichischen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

        <p className="legal-date">Stand: Januar 2026</p>
      </div>
    </main>
  );
}
