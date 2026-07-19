import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hansolow-entertainment.de"
  ),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Next.js 15: headers() is async now (was sync in Next.js 14) — must be awaited.
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/de";
  const lang = pathname.startsWith("/en") ? "en" : "de";

  return (
    <html lang={lang}>
      <body className="bg-base text-ink font-body antialiased">{children}</body>
    </html>
  );
}
