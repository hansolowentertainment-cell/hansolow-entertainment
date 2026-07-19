import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

export default function LegalLayout({
  dict,
  heading,
  draftNotice,
  children,
}: {
  dict: Dictionary;
  heading: string;
  draftNotice: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <h1 className="font-display text-3xl font-semibold text-ink">{heading}</h1>

        <div className="mt-5 border border-line bg-raised p-4 text-sm text-ink-muted">
          {draftNotice}
        </div>

        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-ink-muted [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_a]:text-accent [&_strong]:text-ink">
          {children}
        </div>

        <Link
          href={`/${dict.lang}`}
          className="focus-ring mt-10 inline-block text-sm text-ink-muted transition-colors hover:text-ink"
        >
          ← {dict.common.backHome}
        </Link>
      </div>
    </section>
  );
}
