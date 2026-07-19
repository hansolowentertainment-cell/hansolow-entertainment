import type { Metadata } from "next";
import { en } from "@/content/site.en";
import { buildMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCTA from "@/components/ContactCTA";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = buildMetadata({
  title: en.meta.titleGallery,
  description: en.meta.descriptionGallery,
  dePath: "/de/galerie",
  enPath: "/en/gallery",
  lang: "en",
});

export default function GalleryPageEn() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <SectionHeading
            eyebrow={en.gallery.eyebrow}
            heading={en.gallery.heading}
            intro={en.gallery.intro}
          />
          <div className="mt-10">
            <GalleryGrid
              images={galleryImages}
              lang="en"
              categories={en.gallery.categories}
              allLabel={en.gallery.all}
              emptyLabel={en.gallery.empty}
            />
          </div>
        </div>
      </section>
      <ContactCTA dict={en} />
    </>
  );
}
