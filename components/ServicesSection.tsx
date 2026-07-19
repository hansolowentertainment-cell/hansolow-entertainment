import type { Dictionary } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesSection({
  dict,
  limit,
}: {
  dict: Dictionary;
  limit?: number;
}) {
  const items = limit ? dict.services.items.slice(0, limit) : dict.services.items;

  return (
    <section className="border-b border-line bg-raised/40 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          heading={dict.services.heading}
          intro={dict.services.intro}
        />

        <ul className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="bg-raised p-6 transition-colors hover:bg-base">
              <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-ink-muted">{dict.services.note}</p>
      </div>
    </section>
  );
}
