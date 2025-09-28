export async function middleware(request) {
    console.log('Middleware executed for:', request.nextUrl.pathname)
}