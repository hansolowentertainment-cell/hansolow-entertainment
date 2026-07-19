import type { Metadata } from "next";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { de } from "@/content/site.de";
import { buildMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { CONTACT, INSTAGRAM_URL } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: de.meta.titleContact,
  description: de.meta.descriptionContact,
  dePath: "/de/kontakt",
  enPath: "/en/contact",
  lang: "de",
});

export default function ContactPageDe() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow={de.contactPage.eyebrow}
          heading={de.contactPage.heading}
          intro={de.contactPage.intro}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <h2 className="stage-tag text-accent">{de.contactPage.directHeading}</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="focus-ring flex items-center gap-3 rounded border border-line bg-raised px-4 py-3 text-sm text-ink transition-colors hover:border-accent"
                >
                  <Mail size={18} className="text-accent" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="focus-ring flex items-center gap-3 rounded border border-line bg-raised px-4 py-3 text-sm text-ink transition-colors hover:border-accent"
                >
                  <Phone size={18} className="text-accent" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              {INSTAGRAM_URL ? (
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-3 rounded border border-line bg-raised px-4 py-3 text-sm text-ink transition-colors hover:border-accent"
                  >
                    <Instagram size={18} className="text-accent" aria-hidden="true" />
                    {de.common.instagram}
                  </a>
                </li>
              ) : null}
              <li className="flex items-center gap-3 rounded border border-line bg-raised px-4 py-3 text-sm text-ink-muted">
                <MapPin size={18} className="text-accent" aria-hidden="true" />
                {CONTACT.locationShort.de}
              </li>
            </ul>

            <p className="mt-6 text-sm text-ink-muted">{de.contactPage.availabilityLabel}</p>
          </div>

          <div>
            <h2 className="stage-tag text-accent">{de.contactPage.formHeading}</h2>
            <div className="mt-4">
              <ContactForm dict={de} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
