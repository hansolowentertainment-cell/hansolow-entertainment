import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { en } from "@/content/site.en";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-recessed"
      >
        {en.common.skipToContent}
      </a>
      <Header dict={en} />
      <main id="main-content">{children}</main>
      <Footer dict={en} />
    </>
  );
}
