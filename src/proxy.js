import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
    const { pathname } = request.nextUrl;


    const session = await auth.api.getSession({
        headers: request.headers,
    });


    const isProtected = pathname.startsWith("/products/");

    if (isProtected && !session) {
        const callbackUrl = pathname;

        return NextResponse.redirect(
            new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/products/:path*",],
};