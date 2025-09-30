import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const privateRoute = createRouteMatcher(['/user-profile']); // for private routes
const publicRoute = createRouteMatcher(['/','/sign-up(.*)','/sign-in(.*)']) // for public routes

export default clerkMiddleware(async (auth,req)=>{
    // if(!publicRoute(req)) await auth.protect(); // This will protect
    const {id, redirectToSignIn} = await auth(); //
    if(!id && !publicRoute(req)){               // These are custom routings
        return redirectToSignIn();              //
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};