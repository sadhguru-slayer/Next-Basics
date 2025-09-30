import { delete_Product, update_Product } from "@/prisma-db";

export async function DELETE(request) {
    const {id} = await request.json();
    try {
        const response = await delete_Product({id})
        return new Response(JSON.stringify(response),{status:201});
    } catch (error) {
        return new Response("Internal Server Error",{status:500});
    }
}

export async function PATCH(request){
    
    const data = await request.json();
    const {id,title,description,price} = data;
    const update_details = {
        ...(title && { title }),
        ...(description && { description }),
        ...(price !== undefined && { price }),
    };

    try {
        const updatedProduct = await update_Product({id,update_details});
         if (updatedProduct) {
            return new Response(JSON.stringify(updatedProduct), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                
            });
        } else {
            return new Response("Product update failed", { status: 400 });
        }
    } catch (error) {
        return new Response("Internal Server Error",{status:500});
    }
}