import type { Metadata } from "next";
import { en } from "@/content/site.en";
import { buildMetadata } from "@/lib/metadata";
import ServicesSection from "@/components/ServicesSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: en.meta.titleServices,
  description: en.meta.descriptionServices,
  dePath: "/de/leistungen",
  enPath: "/en/services",
  lang: "en",
});

export default function ServicesPageEn() {
  return (
    <>
      <div className="pt-4" />
      <ServicesSection dict={en} />
      <ContactCTA dict={en} />
    </>
  );
}
