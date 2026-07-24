"use client";

import { useRef } from "react";
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

/**
 * Mobile navigation drawer.
 *
 * Open/close state is driven by a hidden checkbox + CSS sibling selectors
 * (the "checkbox hack") rather than a JS click handler — this means the
 * drawer opens and closes correctly even if something else on the page
 * fails to hydrate, and regardless of Tailwind's production CSS purge,
 * since every visual rule here ships as plain CSS text in a <style> tag.
 *
 * The slide-in animation and backdrop are also pure CSS transitions.
 * A tiny bit of JS (closeMenu) is layered on top purely as a convenience
 * to auto-close the drawer after tapping a link — if that fails for any
 * reason, the drawer itself still opens/closes fine via the checkbox.
 */
export default function MobileNavigation({
  items,
  ctaLabel,
  ctaHref,
  openLabel,
  closeLabel,
}: MobileNavigationProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const closeMenu = () => {
    if (checkboxRef.current) checkboxRef.current.checked = false;
  };

  return (
    <div className="md:hidden">
      <style>{`
        .mnav-checkbox {
          position: absolute;
          opacity: 0;
          width: 1px;
          height: 1px;
          pointer-events: none;
        }

        .mnav-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9998;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        .mnav-checkbox:checked ~ .mnav-backdrop {
          opacity: 1;
          pointer-events: auto;
        }

        .mnav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          width: 84%;
          max-width: 360px;
          background-color: #0d0d0d;
          border-left: 1px solid #2c2c2c;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.5);
        }
        .mnav-checkbox:checked ~ .mnav-drawer {
          transform: translateX(0);
        }

        .mnav-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 4px;
          font-size: 20px;
          color: #f5f3ef;
          border-bottom: 1px solid #2c2c2c;
          text-decoration: none;
          transition: color 0.15s ease, padding-left 0.15s ease;
        }
        .mnav-link:active {
          color: #2f8fff;
          padding-left: 8px;
        }
      `}</style>

      <input
        ref={checkboxRef}
        type="checkbox"
        id="mnav-toggle"
        className="mnav-checkbox"
        aria-hidden="true"
      />

      <label
        htmlFor="mnav-toggle"
        aria-label={openLabel}
        style={{
          display: "flex",
          height: 44,
          width: 44,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          border: "1px solid #2c2c2c",
          color: "#f5f3ef",
          cursor: "pointer",
        }}
      >
        <Menu size={20} aria-hidden="true" />
      </label>

      {/* Tapping the dimmed backdrop closes the drawer, same as the X button. */}
      <label htmlFor="mnav-toggle" className="mnav-backdrop" aria-hidden="true" />

      <div className="mnav-drawer">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid #2c2c2c",
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
          <label
            htmlFor="mnav-toggle"
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
              cursor: "pointer",
            }}
          >
            <X size={20} aria-hidden="true" />
          </label>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", padding: "8px 20px 24px" }}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="mnav-link"
            >
              {item.label}
              <span aria-hidden="true" style={{ color: "#a8a6a1" }}>
                →
              </span>
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={closeMenu}
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
    </div>
  );
}
