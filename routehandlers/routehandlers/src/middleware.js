import { NextRequest, NextResponse } from "next/server"


export function middleware(request) {
    const response = NextResponse.next()
    const theme = request.cookies.get('theme')
    console.log(theme)
    if(!theme){
        response.cookies.set('theme','dark')
    }
    response.headers.set('Mama','Mamamaa')
    const pathname = request.nextUrl.pathname;
    if(pathname === '/profile'){
        return Response.redirect(new URL('/comment', request.url))
    } 
    if(pathname === '/'){
        return Response.redirect(new URL('/hello', request.url))
    } 
    return response;
    // This is one way to redirect from middleware
    // Another way is to use regular expressions
    // return Response.redirect(new URL('/hello',request.url));
}

// export const config = {
//     matcher : ['/']
// } 
// So when is config is used? It is used when we want to apply middleware to specific routes only. For example if we want to apply middleware to all routes except /api/* then we can use matcher property in config object. Here is an example: