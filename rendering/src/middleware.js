export default function middleware(request){
    const pathname = request.nextUrl.pathname;
    if(pathname === '/'){
        return Response.redirect(new URL('/home', request.url));
    }
}