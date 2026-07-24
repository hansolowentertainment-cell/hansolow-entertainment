/**
 * Zentrale Konfiguration.
 * Aenderungen an Kontaktdaten, Instagram-URL oder Partnernamen bitte NUR hier vornehmen.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hansolow-entertainment.de";

export const BRAND_NAME = "Hansolow Entertainment";
export const FULL_NAME = "Hans Schröder Salowski";

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

/**
 * Impressum-Rohdaten. NUR tatsaechlich bekannte Angaben, keine erfundenen Werte.
 * Fehlende Pflichtangaben sind ausdruecklich als TODO markiert (siehe README).
 */
export const LEGAL = {
  // Legal name uses the hyphenated spelling from the user's official
  // Impressum document ("Schröder-Salowski"). Marketing pages use the
  // non-hyphenated "Hans Schröder Salowski" — see README for the note
  // on this discrepancy.
  name: "Hans Schröder-Salowski",
  businessDescriptor: "Live Music & Event Support",
  street: "Bäckenberg 10",
  addressLine1: "04808 Kühren",
  addressLine2: "Deutschland",
  phoneDisplay: CONTACT.phoneDisplay,
  email: CONTACT.email,
  smallBusiness: true, // Kleinunternehmer gem. § 19 UStG (no VAT is charged)
  // VAT ID has been applied for but not yet issued (confirmed by the user);
  // not legally required while Kleinunternehmer status applies. Add the
  // real value here once the Finanzamt issues it.
  vatId: null as string | null,
};

/**
 * Schreibweise von Partner-/Auftragsumfeldern.
 * Zentral gepflegt, da die exakte Schreibweise noch geprueft werden muss (siehe README).
 */
export const PARTNER_NAMES = {
  pfennigbau: "Pfennigbau", // TODO: Schreibweise pruefen
  baunativ: "Baunativ", // TODO: Schreibweise pruefen
};

export const SOCIAL = {
  instagram: INSTAGRAM_URL,
};
