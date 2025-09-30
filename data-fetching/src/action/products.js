"use server"

import { create_NewProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export async function createProduct(prevState,formdata){
        
        const title = formdata.get("title");
        const description = formdata.get("description");
        const price = formdata.get("price");
        const errors = {}

        if(!title){
            errors.title = "Please write a title";
        }

        if(!description){
            errors.description = "It's better to have a description";
        }

        if(!price){
            errors.price = "You can't charity here, please add some price";
        }

        if(Object.keys(errors).length>0){
            return {errors}
        }
        const product = {
            title,
            description,
            price:parseFloat(price)
        }
        await create_NewProduct({product})
        redirect('/product-db');
    
}