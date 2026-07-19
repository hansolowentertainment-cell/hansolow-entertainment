"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { getEquivalentPath } from "@/lib/routes";

interface LanguageSwitcherProps {
  lang: Lang;
  label: string;
  className?: string;
}

export default function LanguageSwitcher({ lang, label, className }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${lang}`;
  const other: Lang = lang === "de" ? "en" : "de";
  const target = getEquivalentPath(pathname, other);

  function persistChoice() {
    try {
      document.cookie = `lang=${other}; path=/; max-age=31536000; SameSite=Lax`;
      window.localStorage.setItem("hansolow-lang", other);
    } catch {
      // localStorage/cookies unavailable (e.g. privacy mode) - navigation still works.
    }
  }

  return (
    <div
      className={`flex items-center gap-1 stage-tag ${className ?? ""}`}
      aria-label={label}
    >
      <LangLink active={lang === "de"} href={lang === "de" ? pathname : target} code="de" onClick={lang === "en" ? persistChoice : undefined} />
      <span className="text-line" aria-hidden="true">
        /
      </span>
      <LangLink active={lang === "en"} href={lang === "en" ? pathname : target} code="en" onClick={lang === "de" ? persistChoice : undefined} />
    </div>
  );
}

function LangLink({
  active,
  href,
  code,
  onClick,
}: {
  active: boolean;
  href: string;
  code: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={`focus-ring rounded px-1.5 py-1 transition-colors ${
        active ? "text-accent" : "text-ink-muted hover:text-ink"
      }`}
    >
      {code.toUpperCase()}
    </Link>
  );
}
