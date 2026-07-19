import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { de } from "@/content/site.de";

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-recessed"
      >
        {de.common.skipToContent}
      </a>
      <Header dict={de} />
      <main id="main-content">{children}</main>
      <Footer dict={de} />
    </>
  );
}
