import { SITE_URL } from "@/lib/metadata";
import { CONTACT, FULL_NAME, BRAND_NAME, INSTAGRAM_URL } from "@/config/site";
import type { Lang } from "@/lib/i18n";

export default function StructuredData({ lang }: { lang: Lang }) {
  const sameAs = INSTAGRAM_URL ? [INSTAGRAM_URL] : undefined;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: FULL_NAME,
        jobTitle:
          lang === "de"
            ? "Selbstständiger Bühnenhandwerker"
            : "Freelance Stage Construction and Tour Support Professional",
        url: `${SITE_URL}/${lang}`,
        email: `mailto:${CONTACT.email}`,
        telephone: "+491777457734",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kühren",
          postalCode: "04808",
          addressCountry: "DE",
        },
        ...(sameAs ? { sameAs } : {}),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: BRAND_NAME,
        founder: { "@id": `${SITE_URL}/#person` },
        url: `${SITE_URL}/${lang}`,
        email: `mailto:${CONTACT.email}`,
        telephone: "+491777457734",
        areaServed: ["DE", "EU"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kühren",
          postalCode: "04808",
          addressCountry: "DE",
        },
        ...(sameAs ? { sameAs } : {}),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
