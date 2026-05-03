import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers';

export async function proxy(request) {
    const { pathname } = request.nextUrl;

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const isProtectedRoute = pathname.startsWith('/products/') || pathname.startsWith('/profile') || pathname.startsWith('/update-profile');

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(
            new URL(`/login?redirectTo=${encodeURIComponent(pathname)}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/products/:path*', '/profile/:path*', '/update-profile/:path*'],
}

