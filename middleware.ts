import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './firebase/clientApp'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log("middleware",auth.currentUser);
    
    if(auth.currentUser) {
        return NextResponse.redirect(new URL('/tong-quan', request.url))
    }

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}