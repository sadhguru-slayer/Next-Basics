// app/product-db/[id]/page.js

import { findUnique_Product } from "@/prisma-db";

export default async function ProductDetail({ params }) {
  const product = await findUnique_Product({ id: params.id });

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-green-600 font-bold">${product.price}</p>
    </div>
  );
}
