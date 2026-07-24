"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/lib/i18n";

interface MobileNavigationProps {
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  openLabel: string;
  closeLabel: string;
}

export default function MobileNavigation({
  items,
  ctaLabel,
  ctaHref,
  openLabel,
  closeLabel,
}: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  // Lock background scroll while the menu is open. Without this, the page
  // behind the overlay can keep scrolling on some mobile browsers, which is
  // what caused the underlying content to visually bleed through the menu.
  useEffect(() => {
    if (open) {
      const previousOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = previousOverflow;
      };
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        aria-expanded={open}
        className="focus-ring flex h-11 w-11 items-center justify-center rounded border border-line text-ink"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-recessed"
          style={{ overscrollBehavior: "contain" }}
        >
          <div className="sticky top-0 flex items-center justify-between border-b border-line bg-recessed px-5 py-4">
            <span className="stage-tag text-accent">Menü / Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={closeLabel}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded border border-line text-ink"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 bg-recessed px-5 py-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded border-b border-line py-3 text-xl font-display text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="focus-ring mt-6 inline-flex items-center justify-center rounded bg-accent px-6 py-3 text-base font-medium text-recessed"
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
