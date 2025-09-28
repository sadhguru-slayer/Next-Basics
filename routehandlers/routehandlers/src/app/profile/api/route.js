import { headers, cookies } from "next/headers";

let refreshes = 0
export async function GET(request){
    refreshes++;
    const requestHeaders = new Headers(request.headers);

    const headersFromNext= await headers();
    console.log('Header from next',headersFromNext.get('user-agent')); // This will give us the user-agent of the request.
    
    const theme = request.cookies.get('theme')?.value || 'light'; // Optional chaining to avoid error if cookie is not present.
    console.log("From request.cookies.theme",theme);
    const cookiesFromNext = await cookies();
    cookiesFromNext.set("refreshes",refreshes); // This will set a cookie named 'refreshes' with value '5'.
    console.log("Cookies from Next", cookiesFromNext.get('theme')); // This will give us the value of the cookie named 'theme'.
    console.log(cookiesFromNext.get('refreshes')); // This will give us the value of the cookie named 'refreshes'.
    return new Response(JSON.stringify({name:"Sadguru", email:"example@gmail.com"}),{
        headers:{
            'Content-Type':'application/json',
            'Set-Cookie':'theme=system; Path=/;HttpOnly;'
        }
    },{status:200});
}