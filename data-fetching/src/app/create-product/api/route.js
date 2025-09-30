import { create_NewProduct } from "../../../prisma-db";

export async function POST(request) {
    try{
        const product = await request.json();
        const new_product = await create_NewProduct({product});
        return new Response(JSON.stringify(new_product),{status:201});
    }catch(error){
        console.error("Error creating product:", error);
        return new Response("Internal Server Error",{status:500});
    }
}