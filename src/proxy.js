import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
    const { pathname } = request.nextUrl;

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    const isLoggedInUserPaths = pathname.startsWith("/login") || pathname.startsWith("/register");

    const isProtected =
        pathname.startsWith("/products/") ||
        pathname.startsWith("/profile") ||
        pathname.startsWith("/update-profile");


    if (isLoggedInUserPaths && session) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    const sessionCookie = request.cookies.get("better-auth.session_token");
    if (isProtected && !sessionCookie) {

        const callbackUrl = new URL('/login', request.url);
        callbackUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
        return NextResponse.redirect(callbackUrl);

    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/products/:path*", "/profile", "/update-profile", "/login", "/register"],
};