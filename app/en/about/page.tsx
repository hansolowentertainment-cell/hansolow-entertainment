import type { Metadata } from "next";
import { en } from "@/content/site.en";
import { buildMetadata } from "@/lib/metadata";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: en.meta.titleAbout,
  description: en.meta.descriptionAbout,
  dePath: "/de/ueber-mich",
  enPath: "/en/about",
  lang: "en",
});

export default function AboutPageEn() {
  return (
    <>
      <AboutSection dict={en} full />
      <SkillsSection dict={en} />
      <ContactCTA dict={en} />
    </>
  );
}
