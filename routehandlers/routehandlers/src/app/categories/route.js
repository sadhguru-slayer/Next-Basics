export const dynamic = 'force-dynamic'; // this will make the route dynamic and not static and use cache: 'no-store' under the hood

export async function GET(request) {

const data = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Health" },
  { id: 3, name: "Finance" },
];
    return new Response(JSON.stringify(data), {status: 200, headers: { 'Content-Type': 'application/json' }});
}