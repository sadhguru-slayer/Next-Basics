export const dynamic = 'force-static'; // this will make the route dynamic and not static and use cache: 'no-store' under the hood

export async function GET(request) {
  const currentTime = new Date().toISOString(); // Here Date is a function in JavaScript that returns the current date and time and we use ISOString to convert it to a string in ISO format
return new Response(`Current time is: ${currentTime}`);
}