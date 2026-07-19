import type { Lang } from "@/lib/i18n";

/**
 * Paarweise Zuordnung von deutschen und englischen Routen (ohne Sprachpraefix).
 * Wird vom LanguageSwitcher genutzt, um beim Sprachwechsel auf die inhaltlich
 * passende Seite zu verlinken statt immer auf die Startseite.
 */
const ROUTE_PAIRS: [string, string][] = [
  ["", ""],
  ["ueber-mich", "about"],
  ["leistungen", "services"],
  ["referenzen", "experience"],
  ["galerie", "gallery"],
  ["kontakt", "contact"],
  ["impressum", "imprint"],
  ["datenschutz", "privacy"],
];

export function getEquivalentPath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split("/").filter(Boolean); // e.g. ["de", "leistungen"]
  const [, ...rest] = segments; // drop current lang segment
  const currentSlug = rest.join("/");

  const pair = ROUTE_PAIRS.find(
    ([de, en]) => de === currentSlug || en === currentSlug
  );

  const targetSlug = pair ? (targetLang === "de" ? pair[0] : pair[1]) : "";
  return targetSlug ? `/${targetLang}/${targetSlug}` : `/${targetLang}`;
}
