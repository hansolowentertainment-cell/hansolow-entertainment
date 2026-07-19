import type { Metadata } from "next";
import { de } from "@/content/site.de";
import { buildMetadata } from "@/lib/metadata";
import ServicesSection from "@/components/ServicesSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: de.meta.titleServices,
  description: de.meta.descriptionServices,
  dePath: "/de/leistungen",
  enPath: "/en/services",
  lang: "de",
});

export default function ServicesPageDe() {
  return (
    <>
      <div className="pt-4" />
      <ServicesSection dict={de} />
      <ContactCTA dict={de} />
    </>
  );
}
