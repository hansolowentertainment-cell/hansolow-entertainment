import type { Reference } from "@/content/references";
import type { Lang } from "@/lib/i18n";

export default function ReferenceCard({
  reference,
  lang,
  tasksLabel,
}: {
  reference: Reference;
  lang: Lang;
  tasksLabel: string;
}) {
  const title = lang === "de" ? reference.titleDE : reference.titleEN;
  const date = lang === "de" ? reference.dateDE : reference.dateEN;
  const scope = lang === "de" ? reference.scopeDE : reference.scopeEN;

  return (
    <li className="border border-line bg-raised p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="stage-tag text-accent">{reference.client}</span>
        {date ? <span className="stage-tag text-ink-muted">{date}</span> : null}
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm text-ink-muted">
        <span className="text-ink">{tasksLabel}: </span>
        {scope}
      </p>
    </li>
  );
}
