import type { Metadata } from "next";
import { de } from "@/content/site.de";
import { buildMetadata } from "@/lib/metadata";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL, CONTACT, BRAND_NAME } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: de.meta.titlePrivacy,
  description: de.meta.titlePrivacy,
  dePath: "/de/datenschutz",
  enPath: "/en/privacy",
  lang: "de",
});

export default function PrivacyPageDe() {
  return (
    <LegalLayout
      dict={de}
      heading={de.legal.privacyHeading}
      draftNotice={de.legal.privacyDraftNotice}
    >
      <p>
        Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim
        Besuch dieser Website erhoben und wie sie verwendet werden.
      </p>

      <h2>1. Verantwortlicher Anbieter</h2>
      <p>
        {BRAND_NAME}
        <br />
        {LEGAL.name}
        <br />
        {LEGAL.street}, {LEGAL.addressLine1}, {LEGAL.addressLine2}
        <br />
        E-Mail: <a href={CONTACT.emailHref}>{LEGAL.email}</a>
        <br />
        Telefon: <a href={CONTACT.phoneHref}>{LEGAL.phoneDisplay}</a>
      </p>

      <h2>2. Zugriffsdaten / Server-Logfiles</h2>
      <p>
        Der Websitebetreiber bzw. Hostinganbieter erhebt Daten über Zugriffe auf die Seite und
        speichert diese als „Server-Logfiles“ ab, u. a.: besuchte Website, Uhrzeit des Zugriffs,
        Menge der gesendeten Daten, Referrer-URL, verwendeter Browser, verwendetes Betriebssystem
        und die IP-Adresse. Diese Daten dienen ausschließlich statistischen Auswertungen und der
        technischen Sicherheit; eine Zusammenführung mit anderen Datenquellen findet nicht statt.
        Der Betreiber behält sich vor, die Server-Logfiles nachträglich zu überprüfen, sollten
        konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
      </p>

      <h2>3. Kontaktformular</h2>
      <p>
        Bei Nutzung des Kontaktformulars werden die eingegebenen Angaben (u. a. Name,
        E-Mail-Adresse, ggf. Telefonnummer sowie die Projektangaben) ausschließlich zur
        Bearbeitung der Anfrage und für eventuelle Rückfragen gespeichert. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an der Bearbeitung). Eine Weitergabe an Dritte findet nicht
        statt. Das Formular enthält ein verstecktes Feld (Honeypot) zur Erkennung von
        automatisiertem Spam; es wird nur ausgewertet, wenn es befüllt ist.
      </p>

      <h2>4. Umgang mit personenbezogenen Daten</h2>
      <p>
        Der Websitebetreiber erhebt, nutzt und gibt personenbezogene Daten nur dann weiter,
        wenn dies gesetzlich erlaubt ist oder die betroffene Person eingewilligt hat.
      </p>

      <h2>5. Speicherdauer</h2>
      <p>
        Personenbezogene Daten aus Anfragen werden gelöscht, sobald sie für die Bearbeitung
        nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>

      <h2>6. Keine Analyse- und Marketing-Tools</h2>
      <p>
        Diese Website verwendet keine Analysewerkzeuge wie Google Analytics, kein Meta-Pixel,
        keine externen Schriftarten, keine Karten- oder Video-Einbettung und keinen automatisch
        geladenen Social-Media-Feed. Es werden keine Marketing-Cookies gesetzt.
      </p>

      <h2>7. SSL-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte
        Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
      </p>

      <h2>8. Ihre Rechte als Nutzer</h2>
      <p>
        Sie haben das Recht, auf Antrag kostenlos Auskunft über die zu Ihrer Person
        gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht auf
        Berichtigung, Löschung oder Einschränkung der Verarbeitung, das Recht auf
        Datenübertragbarkeit sowie ein Widerspruchsrecht gegen die Verarbeitung. Zudem steht
        Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.
      </p>

      <h2>9. Kontakt zum Datenschutz</h2>
      <p>
        Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden
        Sie sich bitte an:
        <br />
        {LEGAL.name} — <a href={CONTACT.emailHref}>{LEGAL.email}</a>
      </p>
    </LegalLayout>
  );
}
