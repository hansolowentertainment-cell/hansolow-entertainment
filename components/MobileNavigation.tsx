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

  // Lock background scroll while the menu is open.
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
        // Every visible piece below is styled with inline `style` objects on
        // purpose, not Tailwind classes — so nothing here can silently
        // disappear due to a class being missing from the production CSS
        // bundle. This is the fix for the menu opening but showing no items.
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: "#0d0d0d",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #2c2c2c",
              backgroundColor: "#0d0d0d",
            }}
          >
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#2f8fff",
              }}
            >
              Menü / Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={closeLabel}
              style={{
                display: "flex",
                height: 44,
                width: 44,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                border: "1px solid #2c2c2c",
                color: "#f5f3ef",
                background: "transparent",
              }}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              padding: "24px 20px",
              backgroundColor: "#0d0d0d",
            }}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 4px",
                  fontSize: 22,
                  color: "#f5f3ef",
                  borderBottom: "1px solid #2c2c2c",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              style={{
                marginTop: 24,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                backgroundColor: "#2f8fff",
                padding: "14px 24px",
                fontSize: 16,
                fontWeight: 500,
                color: "#0d0d0d",
                textDecoration: "none",
              }}
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
