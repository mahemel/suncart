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

    if (isProtected && !session) {
        const callbackUrl = encodeURIComponent(pathname);
        console.log(callbackUrl)

        return NextResponse.redirect(
            new URL(`/login?callbackUrl=${callbackUrl}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/products/:path*", "/profile", "/update-profile", "/login", "/register"],
};