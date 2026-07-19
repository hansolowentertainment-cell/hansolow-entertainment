import type { Metadata } from "next";
import { en } from "@/content/site.en";
import { buildMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactCTA from "@/components/ContactCTA";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = buildMetadata({
  title: en.meta.titleHome,
  description: en.meta.descriptionHome,
  dePath: "/de",
  enPath: "/en",
  lang: "en",
});

export default function HomePageEn() {
  return (
    <>
      <StructuredData lang="en" />
      <Hero dict={en} />
      <AboutSection dict={en} />
      <ServicesSection dict={en} limit={9} />
      <ContactCTA dict={en} />
    </>
  );
}
