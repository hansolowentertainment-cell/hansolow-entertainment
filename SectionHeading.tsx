import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileNavigation from "@/components/MobileNavigation";

export default function Header({ dict }: { dict: Dictionary }) {
  const homeHref = `/${dict.lang}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <Link href={homeHref} className="focus-ring rounded">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Hansolow<span className="text-accent">.</span>
          </span>
          <span className="ml-2 hidden text-xs uppercase tracking-widest2 text-ink-muted sm:inline">
            Entertainment
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
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
          <LanguageSwitcher lang={dict.lang} label={dict.common.languageSwitchLabel} />
          <Link
            href={dict.nav.ctaPrimaryHref}
            className="focus-ring inline-flex items-center rounded bg-accent px-4 py-2 text-sm font-medium text-recessed transition-opacity hover:opacity-90"
          >
            {dict.nav.ctaPrimary}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher lang={dict.lang} label={dict.common.languageSwitchLabel} />
          <MobileNavigation
            items={dict.nav.items}
            ctaLabel={dict.nav.ctaPrimary}
            ctaHref={dict.nav.ctaPrimaryHref}
            openLabel={dict.common.menuOpen}
            closeLabel={dict.common.menuClose}
          />
        </div>
      </div>
    </header>
  );
}
