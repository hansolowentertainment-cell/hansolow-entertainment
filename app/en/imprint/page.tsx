import type { Metadata } from "next";
import { en } from "@/content/site.en";
import { buildMetadata } from "@/lib/metadata";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL, CONTACT, BRAND_NAME } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: en.meta.titleImprint,
  description: en.meta.titleImprint,
  dePath: "/de/impressum",
  enPath: "/en/imprint",
  lang: "en",
});

export default function ImprintPageEn() {
  return (
    <LegalLayout
      dict={en}
      heading={en.legal.imprintHeading}
      draftNotice={en.legal.imprintDraftNotice}
    >
      <h2>{en.legal.imprintIntro}</h2>
      <p>
        <strong>{BRAND_NAME}</strong>
        <br />
        {LEGAL.businessDescriptor}
        <br />
        Owner: {LEGAL.name}
        <br />
        {LEGAL.street}
        <br />
        {LEGAL.addressLine1}
        <br />
        {LEGAL.addressLine2}
      </p>

      <h2>Contact</h2>
      <p>
        Phone: <a href={CONTACT.phoneHref}>{LEGAL.phoneDisplay}</a>
        <br />
        Email: <a href={CONTACT.emailHref}>{LEGAL.email}</a>
      </p>

      <h2>VAT</h2>
      <p>
        Small business pursuant to § 19 of the German VAT Act (UStG) — no VAT is charged.
        <br />
        VAT identification number: applied for with the tax office, to be added once issued.
        Not strictly required while small-business status applies (a separate reverse-charge
        registration for transactions with non-EU countries has been applied for independently
        of this).
      </p>

      <h2>Responsible for content pursuant to § 55 (2) RStV</h2>
      <p>{LEGAL.name}, address as above.</p>

      <h2>Liability notice</h2>
      <p>
        Despite careful review of content, we assume no liability for the content of external
        links. The operators of linked pages are solely responsible for their content.
      </p>
    </LegalLayout>
  );
}
