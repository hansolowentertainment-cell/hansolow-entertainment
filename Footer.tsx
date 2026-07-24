import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { CONTACT, INSTAGRAM_URL, BRAND_NAME, FULL_NAME } from "@/config/site";

export default function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  const legalBase = `/${dict.lang}`;
  const imprintHref = dict.lang === "de" ? `${legalBase}/impressum` : `${legalBase}/imprint`;
  const privacyHref = dict.lang === "de" ? `${legalBase}/datenschutz` : `${legalBase}/privacy`;

  return (
    <footer className="bg-recessed">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/brand/logo-mark-64.png" alt="" width={28} height={28} className="h-7 w-7 rounded-sm" />
              <p className="font-display text-lg font-semibold text-ink">{BRAND_NAME}</p>
            </div>
            <p className="mt-1 text-sm text-ink-muted">{FULL_NAME}</p>
            <p className="mt-4 text-xs uppercase tracking-widest2 text-ink-muted">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="stage-tag text-accent">{dict.footer.navHeading}</h3>
            <ul className="mt-4 space-y-2">
              {dict.nav.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring rounded text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="stage-tag text-accent">{dict.footer.contactHeading}</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>{CONTACT.locationShort[dict.lang]}</li>
              <li>
                <a href={CONTACT.emailHref} className="focus-ring inline-flex items-center gap-2 rounded hover:text-ink">
                  <Mail size={16} aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="focus-ring inline-flex items-center gap-2 rounded hover:text-ink">
                  <Phone size={16} aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              {INSTAGRAM_URL ? (
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded hover:text-ink"
                  >
                    <Instagram size={16} aria-hidden="true" />
                    {dict.common.instagram}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6 text-sm text-ink-muted">
            <Link href={imprintHref} className="focus-ring rounded hover:text-ink">
              {dict.footer.imprint}
            </Link>
            <Link href={privacyHref} className="focus-ring rounded hover:text-ink">
              {dict.footer.privacy}
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSwitcher lang={dict.lang} label={dict.common.languageSwitchLabel} />
            <p className="text-xs text-ink-muted">
              © {year} {BRAND_NAME}. {dict.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
