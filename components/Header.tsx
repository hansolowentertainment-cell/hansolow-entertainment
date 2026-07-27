"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import type { Dictionary } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header({ dict }: { dict: Dictionary }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homeHref = `/${dict.lang}`;

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-base/95 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href={homeHref}
            className="focus-ring flex items-center gap-2 rounded"
            onClick={closeMobileMenu}
          >
            <Image
              src="/brand/logo-mark-64.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-sm"
              priority
            />

            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              Hansolow<span className="text-accent">.</span>
            </span>

            <span className="ml-1 hidden text-xs uppercase tracking-widest2 text-ink-muted sm:inline">
              Entertainment
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {dict.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <LanguageSwitcher
              lang={dict.lang}
              label={dict.common.languageSwitchLabel}
            />

            <Link
              href={dict.nav.ctaPrimaryHref}
              className="focus-ring inline-flex items-center rounded bg-accent px-4 py-2 text-sm font-medium text-recessed transition-opacity hover:opacity-90"
            >
              {dict.nav.ctaPrimary}
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher
              lang={dict.lang}
              label={dict.common.languageSwitchLabel}
            />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={dict.common.menuOpen}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded border border-line bg-base text-ink"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[100] min-h-[100dvh] overflow-y-auto bg-base text-ink md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={dict.common.menuOpen}
        >
          <div className="flex min-h-[100dvh] flex-col">
            <div className="flex items-center justify-between border-b border-line bg-base px-5 py-4">
              <span className="text-xs font-medium uppercase tracking-widest2 text-ink-muted">
                Menü / Menu
              </span>

              <div className="flex items-center gap-3">
                <LanguageSwitcher
                  lang={dict.lang}
                  label={dict.common.languageSwitchLabel}
                />

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label={dict.common.menuClose}
                  className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded border border-line bg-base text-ink"
                >
                  <X className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>
            </div>

            <nav className="flex flex-1 flex-col bg-base px-5 py-6">
              <div className="flex flex-col">
                {dict.nav.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="focus-ring border-b border-line py-5 font-display text-3xl font-medium tracking-tight text-ink transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href={dict.nav.ctaPrimaryHref}
                onClick={closeMobileMenu}
                className="focus-ring mt-8 inline-flex min-h-14 w-full items-center justify-center rounded bg-accent px-5 py-4 text-center text-base font-semibold text-recessed transition-opacity hover:opacity-90"
              >
                {dict.nav.ctaPrimary}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
