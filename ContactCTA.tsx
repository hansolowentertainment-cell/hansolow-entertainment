import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection({
  dict,
  full = false,
}: {
  dict: Dictionary;
  full?: boolean;
}) {
  const paragraphs = full ? dict.about.paragraphs : dict.about.paragraphs.slice(0, 2);

  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow={dict.about.eyebrow} heading={dict.about.heading} />
          <div className="mt-6 space-y-4 text-ink-muted leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {!full ? (
            <Link
              href={dict.about.ctaHref}
              className="focus-ring mt-6 inline-flex items-center rounded border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {dict.about.ctaLabel}
            </Link>
          ) : (
            <div className="mt-8">
              <h3 className="stage-tag text-accent">{dict.about.approachHeading}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
                {dict.about.approachItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="h-fit border border-line bg-raised p-6">
          <h3 className="stage-tag text-accent">{dict.about.factsHeading}</h3>
          <dl className="mt-4 space-y-4">
            {dict.about.facts.map((fact) => (
              <div key={fact.label} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                <dt className="text-xs uppercase tracking-widest2 text-ink-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-base text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
