 * Zentrale Konfiguration.
 * Aenderungen an Kontaktdaten, Instagram-URL oder Partnernamen bitte NUR hier vornehmen.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hansolow-entertainment.de";

export const BRAND_NAME = "Hansolow Entertainment";
export const FULL_NAME = "Hans Schröder-Salowski";

export const CONTACT = {
  email: "hansolowentertainment@gmail.com",
  emailHref: "mailto:hansolowentertainment@gmail.com",
  phoneDisplay: "0177 745 7734",
  phoneHref: "tel:+491777457734",
  locationShort: {
    de: "Kühren bei Leipzig",
    en: "Kühren, near Leipzig, Germany",
  },
  availability: {
    de: "Verfügbarkeit auf Anfrage",
    en: "Availability on request",
  },
};

/**
 * Instagram-Profil von Hansolow Entertainment.
 * TODO: URL ergaenzen, sobald final feststehend (siehe README, Abschnitt "Offene Punkte").
 * Solange der Wert leer ist, wird an ALLEN Stellen der Website automatisch kein Link angezeigt.
 */
export const INSTAGRAM_URL: string | null =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL && process.env.NEXT_PUBLIC_INSTAGRAM_URL.length > 0
    ? process.env.NEXT_PUBLIC_INSTAGRAM_URL
    : null;
