"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage, GalleryCategory } from "@/content/gallery";
import type { Lang } from "@/lib/i18n";

interface GalleryGridProps {
  images: GalleryImage[];
  lang: Lang;
  categories: Record<string, string>;
  allLabel: string;
  emptyLabel: string;
}

export default function GalleryGrid({
  images,
  lang,
  categories,
  allLabel,
  emptyLabel,
}: GalleryGridProps) {
  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? images : images.filter((img) => img.category === active)),
    [active, images]
  );

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, next, prev]);

  const categoryEntries = Object.entries(categories) as [GalleryCategory, string][];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterButton active={active === "all"} onClick={() => setActive("all")}>
          {allLabel}
        </FilterButton>
        {categoryEntries.map(([key, label]) => (
          <FilterButton key={key} active={active === key} onClick={() => setActive(key)}>
            {label}
          </FilterButton>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-ink-muted">{emptyLabel}</p>
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((img, i) => (
            <li key={img.id}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="focus-ring group relative block aspect-[4/3] w-full overflow-hidden border border-line bg-raised"
              >
                <Image
                  src={img.src}
                  alt={lang === "de" ? img.altDE : img.altEN}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-recessed/80 px-2 py-1 text-xs text-ink-muted opacity-0 transition-opacity group-hover:opacity-100">
                  {lang === "de" ? img.captionDE : img.captionEN}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {lightboxIndex !== null && filtered[lightboxIndex] ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-recessed/95 p-4"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="focus-ring absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded border border-line text-ink"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="focus-ring absolute left-2 flex h-11 w-11 items-center justify-center rounded border border-line text-ink sm:left-6"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="focus-ring absolute right-2 flex h-11 w-11 items-center justify-center rounded border border-line text-ink sm:right-6"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          <figure className="relative aspect-[4/3] w-full max-w-2xl">
            <Image
              src={filtered[lightboxIndex]!.src}
              alt={
                lang === "de"
                  ? filtered[lightboxIndex]!.altDE
                  : filtered[lightboxIndex]!.altEN
              }
              fill
              sizes="90vw"
              className="object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-ink-muted">
              {lang === "de"
                ? filtered[lightboxIndex]!.captionDE
                : filtered[lightboxIndex]!.captionEN}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`focus-ring rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest2 transition-colors ${
        active
          ? "border-accent bg-accent-soft text-accent"
          : "border-line bg-raised text-ink-muted hover:border-ink-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
