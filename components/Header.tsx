import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { BRAND_NAME } from "@/config/site";

export default function Hero({ dict }: { dict: Dictionary }) {
  const ownerLabel = dict.lang === "de" ? "Inhaber" : "Owner";

  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Atmospheric real production photo behind the whole hero, dimmed
          and overlaid for legibility (mirrors the interactive preview). */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero/hero-stage.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "saturate(0.85) brightness(0.42) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-recessed/90 via-base/70 to-base" />
        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid max-w-content gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="animate-fadeUp">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(47,143,255,0.6)]" />
            <p className="stage-tag text-accent">{dict.hero.eyebrow}</p>
          </div>

          {/* Logo mark + wordmark lockup — the actual brand logo, not just type,
              since the logo itself is a recognised part of the brand. */}
          <div className="mt-5 flex items-center gap-4">
            <Image
              src="/brand/logo-mark-128.png"
              alt={`${BRAND_NAME} Logo`}
              width={72}
              height={72}
              priority
              className="h-14 w-14 shrink-0 sm:h-[72px] sm:w-[72px]"
              style={{ filter: "drop-shadow(0 4px 18px rgba(47,143,255,0.45))" }}
            />
            <h1
              className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.9)" }}
            >
              Hansolow<span className="text-accent">.</span>
              <span className="block text-xl font-normal tracking-wide text-ink-muted sm:text-2xl">
                Entertainment
              </span>
            </h1>
          </div>

          {/* Owner byline: solid backing chip so it stays legible regardless
              of what's behind it in the hero photo. */}
          <div className="mt-5 inline-flex items-center gap-2 rounded bg-recessed/80 px-3 py-2 backdrop-blur-sm">
            <span className="stage-tag text-accent">{ownerLabel}</span>
            <span className="text-base font-semibold text-ink sm:text-lg">{dict.hero.title}</span>
          </div>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            {dict.hero.subtitle}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{dict.hero.tagline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={dict.hero.ctaPrimaryHref}
              className="focus-ring inline-flex items-center justify-center rounded bg-accent px-6 py-3 text-sm font-medium text-recessed shadow-[0_8px_30px_-6px_rgba(47,143,255,0.6)] transition-opacity hover:opacity-90"
            >
              {dict.hero.ctaPrimary}
            </Link>
            <Link
              href={dict.hero.ctaSecondaryHref}
              className="focus-ring inline-flex items-center justify-center rounded border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line/60 pt-6 sm:grid-cols-4">
            {dict.hero.trustItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-ink-muted">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="case-corners relative aspect-[4/5] w-full overflow-hidden border border-line bg-raised sm:aspect-[4/3] lg:aspect-[4/5]">
          <span className="corner-tl" aria-hidden="true" />
          <span className="corner-br" aria-hidden="true" />
          <Image
            src="/images/gallery/lighting-rig-above-stage.jpg"
            alt="Lichtrigging über der Bühne"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-recessed/85 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="stage-tag text-ink-muted">{BRAND_NAME}</span>
          </div>
        </div>
      </div>
      <div className="rig-line relative mx-5 sm:mx-8" />
    </section>
  );
}
