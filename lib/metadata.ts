import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

interface BuildMetadataArgs {
  title: string;
  description: string;
  dePath: string; // e.g. "/de" or "/de/leistungen"
  enPath: string; // e.g. "/en" or "/en/services"
  lang: "de" | "en";
}

export function buildMetadata({
  title,
  description,
  dePath,
  enPath,
  lang,
}: BuildMetadataArgs): Metadata {
  const canonical = lang === "de" ? dePath : enPath;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        de: dePath,
        en: enPath,
        "x-default": dePath,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Hansolow Entertainment",
      locale: lang === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export { SITE_URL };
