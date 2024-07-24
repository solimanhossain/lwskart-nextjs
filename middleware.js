import { match } from "@formatjs/intl-localematcher";
import { NextResponse } from "next/server";
import Negotiator from "negotiator";

let locales = ["en", "bn"];
let defaultLocale = "en";

function getLocale(request) {
    const acceptedLanguage =
        request.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptedLanguage };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const pathNameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}`) &&
            !pathname.startsWith(`/${locale}/`)
    );
    if (pathNameIsMissingLocale) {
        const locale =
            request.cookies.get("LWS_LOCALE")?.value ?? getLocale(request);
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|lang|_vercel|_next/static|_next/image|.*\\..*|favicon.ico).*)",
    ],
};
