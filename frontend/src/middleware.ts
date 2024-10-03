import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    const { pathname } = req.nextUrl

    const protectedRoutes = ['/admin', '/admin/events', '/dashboard']

    if (protectedRoutes.includes(pathname) && !token) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    if (pathname === '/' && token) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*'],
}
