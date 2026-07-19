import type { Metadata } from "next";
import { en } from "@/content/site.en";
import { buildMetadata } from "@/lib/metadata";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL, CONTACT, BRAND_NAME } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: en.meta.titlePrivacy,
  description: en.meta.titlePrivacy,
  dePath: "/de/datenschutz",
  enPath: "/en/privacy",
  lang: "en",
});

export default function PrivacyPageEn() {
  return (
    <LegalLayout
      dict={en}
      heading={en.legal.privacyHeading}
      draftNotice={en.legal.privacyDraftNotice}
    >
      <p>
        This privacy policy explains which personal data is collected when visiting this
        website and how it is used.
      </p>

      <h2>1. Data controller</h2>
      <p>
        {BRAND_NAME}
        <br />
        {LEGAL.name}
        <br />
        {LEGAL.street}, {LEGAL.addressLine1}, {LEGAL.addressLine2}
        <br />
        Email: <a href={CONTACT.emailHref}>{LEGAL.email}</a>
        <br />
        Phone: <a href={CONTACT.phoneHref}>{LEGAL.phoneDisplay}</a>
      </p>

      <h2>2. Access data / server log files</h2>
      <p>
        The website operator or hosting provider collects data about access to the site and
        stores it as "server log files", including: page visited, time of access, amount of
        data transferred, referrer URL, browser used, operating system used and the IP address.
        This data is used exclusively for statistical evaluation and technical security; it is
        not combined with other data sources. The operator reserves the right to review the
        server log files retrospectively if there are concrete indications of unlawful use.
      </p>

      <h2>3. Contact form</h2>
      <p>
        When the contact form is used, the details entered (including name, email address,
        phone number if given, and the project details) are stored exclusively to process the
        inquiry and for any follow-up questions. The legal basis is Art. 6 (1) (b) GDPR
        (pre-contractual inquiry) or Art. 6 (1) (f) GDPR (legitimate interest in processing the
        inquiry). This data is not shared with third parties. The form contains a hidden field
        (honeypot) to detect automated spam; it is only evaluated if filled in.
      </p>

      <h2>4. Handling of personal data</h2>
      <p>
        The website operator collects, uses and discloses personal data only where legally
        permitted or where the data subject has given consent.
      </p>

      <h2>5. Storage period</h2>
      <p>
        Personal data from inquiries is deleted once it is no longer required to process the
        inquiry, unless statutory retention obligations require otherwise.
      </p>

      <h2>6. No analytics or marketing tools</h2>
      <p>
        This website does not use analytics tools such as Google Analytics, no Meta Pixel, no
        external fonts, no map or video embeds, and no automatically loaded social media feed.
        No marketing cookies are set.
      </p>

      <h2>7. SSL encryption</h2>
      <p>
        For security reasons, this website uses SSL encryption. You can recognise an encrypted
        connection by "https://" in your browser's address bar.
      </p>

      <h2>8. Your rights as a user</h2>
      <p>
        You have the right to request free information about the personal data stored about
        you. You also have the right to rectification, erasure or restriction of processing,
        the right to data portability, and the right to object to processing. You additionally
        have the right to lodge a complaint with a data protection supervisory authority.
      </p>

      <h2>9. Contact for privacy inquiries</h2>
      <p>
        For questions about the collection, processing or use of your personal data, please
        contact:
        <br />
        {LEGAL.name} — <a href={CONTACT.emailHref}>{LEGAL.email}</a>
      </p>
    </LegalLayout>
  );
}
