import { NextRequest, NextResponse } from "next/server";

const SUPPORTED = ["de", "en"];
const DEFAULT_LANG = "de";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const cookieLang = request.cookies.get("lang")?.value;
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const browserPrefersEnglish =
      !cookieLang && acceptLanguage.toLowerCase().startsWith("en");

    const target =
      cookieLang && SUPPORTED.includes(cookieLang)
        ? cookieLang
        : browserPrefersEnglish
          ? "en"
          : DEFAULT_LANG;

    const url = request.nextUrl.clone();
    url.pathname = `/${target}`;
    return NextResponse.redirect(url);
  }

  // Propagate the current pathname so the root layout (a Server Component)
  // can set the correct <html lang="..."> attribute without client-side JS.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|brand).*)"],
};
