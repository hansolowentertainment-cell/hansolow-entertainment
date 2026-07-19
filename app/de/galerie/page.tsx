import type { Metadata } from "next";
import { de } from "@/content/site.de";
import { buildMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCTA from "@/components/ContactCTA";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = buildMetadata({
  title: de.meta.titleGallery,
  description: de.meta.descriptionGallery,
  dePath: "/de/galerie",
  enPath: "/en/gallery",
  lang: "de",
});

export default function GalleryPageDe() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <SectionHeading
            eyebrow={de.gallery.eyebrow}
            heading={de.gallery.heading}
            intro={de.gallery.intro}
          />
          <div className="mt-10">
            <GalleryGrid
              images={galleryImages}
              lang="de"
              categories={de.gallery.categories}
              allLabel={de.gallery.all}
              emptyLabel={de.gallery.empty}
            />
          </div>
        </div>
      </section>
      <ContactCTA dict={de} />
    </>
  );
}
