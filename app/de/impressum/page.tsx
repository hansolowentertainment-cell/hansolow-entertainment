import type { Metadata } from "next";
import { de } from "@/content/site.de";
import { buildMetadata } from "@/lib/metadata";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL, CONTACT, BRAND_NAME } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: de.meta.titleImprint,
  description: de.meta.titleImprint,
  dePath: "/de/impressum",
  enPath: "/en/imprint",
  lang: "de",
});

export default function ImprintPageDe() {
  return (
    <LegalLayout
      dict={de}
      heading={de.legal.imprintHeading}
      draftNotice={de.legal.imprintDraftNotice}
    >
      <h2>{de.legal.imprintIntro}</h2>
      <p>
        <strong>{BRAND_NAME}</strong>
        <br />
        {LEGAL.businessDescriptor}
        <br />
        Inhaber: {LEGAL.name}
        <br />
        {LEGAL.street}
        <br />
        {LEGAL.addressLine1}
        <br />
        {LEGAL.addressLine2}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={CONTACT.phoneHref}>{LEGAL.phoneDisplay}</a>
        <br />
        E-Mail: <a href={CONTACT.emailHref}>{LEGAL.email}</a>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Kleinunternehmer gemäß § 19 UStG — es wird keine Umsatzsteuer berechnet.
        <br />
        Umsatzsteuer-Identifikationsnummer: beim Finanzamt beantragt, wird nach Erteilung
        ergänzt. Als Kleinunternehmer derzeit nicht zwingend erforderlich (Reverse-Charge-
        Verfahren gegenüber Drittländern ist unabhängig davon separat beantragt).
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>{LEGAL.name}, Anschrift wie oben.</p>

      <h2>Haftungshinweis</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
        externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
        verantwortlich.
      </p>
    </LegalLayout>
  );
}
