import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

export default function ContactCTA({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-raised">
      <Image
        src="/images/gallery/stage-build-aerial.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: "grayscale(0.3) brightness(0.28) contrast(1.05)" }}
      />
      <div className="absolute inset-0 bg-raised/90" />
      <div className="relative mx-auto max-w-content px-5 py-14 text-center sm:px-8 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          {dict.cta.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-ink-muted">{dict.cta.body}</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={dict.cta.primaryHref}
            className="focus-ring inline-flex items-center justify-center rounded bg-accent px-6 py-3 text-sm font-medium text-recessed transition-opacity hover:opacity-90"
          >
            {dict.cta.primary}
          </Link>
          <Link
            href={dict.cta.secondaryHref}
            className="focus-ring inline-flex items-center justify-center rounded border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {dict.cta.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
