import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTE_PAIRS.flatMap(([de, en]) => {
    const dePath = `${SITE_URL}/de${de ? `/${de}` : ""}`;
    const enPath = `${SITE_URL}/en${en ? `/${en}` : ""}`;

    const alternates = {
      languages: {
        de: dePath,
        en: enPath,
      },
    };

    return [
      {
        url: dePath,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: de === "" ? 1 : 0.7,
        alternates,
      },
      {
        url: enPath,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: en === "" ? 1 : 0.7,
        alternates,
      },
    ];
  });
}
