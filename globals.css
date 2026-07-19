import type { Metadata } from "next";
import { de } from "@/content/site.de";
import { buildMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactCTA from "@/components/ContactCTA";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = buildMetadata({
  title: de.meta.titleHome,
  description: de.meta.descriptionHome,
  dePath: "/de",
  enPath: "/en",
  lang: "de",
});

export default function HomePageDe() {
  return (
    <>
      <StructuredData lang="de" />
      <Hero dict={de} />
      <AboutSection dict={de} />
      <ServicesSection dict={de} limit={9} />
      <ContactCTA dict={de} />
    </>
  );
}
