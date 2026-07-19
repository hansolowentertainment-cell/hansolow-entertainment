import type { Dictionary } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";

export default function SkillsSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow={dict.skills.eyebrow} heading={dict.skills.heading} />

        <div className="mt-8 grid gap-10 sm:grid-cols-[1.4fr_1fr]">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {dict.skills.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="border border-line bg-raised p-6">
            <h3 className="stage-tag text-accent">{dict.skills.certificatesHeading}</h3>
            <ul className="mt-4 space-y-3">
              {dict.skills.certificates.map((cert) => (
                <li key={cert} className="text-sm text-ink">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
