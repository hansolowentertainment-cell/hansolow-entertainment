import type { Metadata } from "next";
import { de } from "@/content/site.de";
import { buildMetadata } from "@/lib/metadata";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: de.meta.titleAbout,
  description: de.meta.descriptionAbout,
  dePath: "/de/ueber-mich",
  enPath: "/en/about",
  lang: "de",
});

export default function AboutPageDe() {
  return (
    <>
      <AboutSection dict={de} full />
      <SkillsSection dict={de} />
      <ContactCTA dict={de} />
    </>
  );
}
