// prisma-db.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedProducts = async () => {
  const product = await prisma.product.count();
  if (product > 0) return;

  const products = [
    { title: "Product 1", description: "Description for product 1", price: 19.99 },
    { title: "Product 2", description: "Description for product 2", price: 29.99 },
    { title: "Product 3", description: "Description for product 3", price: 39.99 },
  ];

  await prisma.product.createMany({ data: products }); // ✅ Fixed
};


export const findMany_Products = async ({query}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  let products = null
  if (query) {
    products = await prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: query} },  // 'insensitive' makes it case-insensitive
          { description: { contains: query} },
        ],
      },
    });
  }
  else{
    products = await prisma.product. findMany();
  }
  return products
};


// other methods (findUnique_Product, create_NewProduct, etc.)


export const findUnique_Product = async ({id}) =>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));
    
    const product = await prisma.product.findUnique({where:{id: parseInt(id)}});
    return product;
}

export const create_NewProduct = async ({product}) =>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));
    const title = await product.title;
    const description = await product.description;
    const price = await product.price;
    return await prisma.product.create({data:{ title,description,price:parseFloat(price)}});
}

export const update_Product = async ({id,update_details}) =>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));

    const product = await prisma.product.findUnique({where:{id:parseInt(id)}});
    const title = await update_details.title || product.title;
    const description = await update_details.description || product.description;
    const price = await update_details.price || product.price;
    return await prisma.product.update({where:{id:parseInt(id)},data:{title,description,price:parseFloat(price)}});
}

export const delete_Product = async ({id}) =>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));

    return await prisma.product.delete({where:{id:parseInt(id)}});
}