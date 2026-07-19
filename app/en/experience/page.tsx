import type { Metadata } from "next";
import { en } from "@/content/site.en";
import { buildMetadata } from "@/lib/metadata";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ReferenceCard from "@/components/ReferenceCard";
import ContactCTA from "@/components/ContactCTA";
import SectionHeading from "@/components/SectionHeading";
import { touringReferences, tvReferences, tradeShowReferences } from "@/content/references";

export const metadata: Metadata = buildMetadata({
  title: en.meta.titleExperience,
  description: en.meta.descriptionExperience,
  dePath: "/de/referenzen",
  enPath: "/en/experience",
  lang: "en",
});

export default function ExperiencePageEn() {
  return (
    <>
      <ExperienceTimeline dict={en} />

      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <SectionHeading
            eyebrow={en.references.eyebrow}
            heading={en.references.heading}
            intro={en.references.intro}
          />

          <div className="mt-10 space-y-14">
            <div>
              <h3 className="stage-tag text-accent">{en.references.touringHeading}</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {touringReferences.map((ref) => (
                  <ReferenceCard
                    key={ref.id}
                    reference={ref}
                    lang="en"
                    tasksLabel={en.references.tasksLabel}
                  />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="stage-tag text-accent">{en.references.tvHeading}</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tvReferences.map((ref) => (
                  <ReferenceCard
                    key={ref.id}
                    reference={ref}
                    lang="en"
                    tasksLabel={en.references.tasksLabel}
                  />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="stage-tag text-accent">{en.references.tradeShowHeading}</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tradeShowReferences.map((ref) => (
                  <ReferenceCard
                    key={ref.id}
                    reference={ref}
                    lang="en"
                    tasksLabel={en.references.tasksLabel}
                  />
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-sm text-ink-muted">{en.references.onRequest}</p>
        </div>
      </section>

      <ContactCTA dict={en} />
    </>
  );
}
