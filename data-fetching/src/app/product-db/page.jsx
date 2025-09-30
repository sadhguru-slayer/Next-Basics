import React from 'react';
import { findMany_Products,seedProducts } from '@/prisma-db';
import ProductTable from './ProductTable';
const ProductsDbPage = async ({searchParams}) => {
  const {query} = await searchParams;
  
  const products = await findMany_Products({query});

  if(products.length==0){
    await seedProducts();
  }
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white text-center">Product Dashboard</h1>
        <div className="overflow-x-auto">
          <ProductTable products={products}/>
        </div>
    
    </div>
  );
};

export default ProductsDbPage;
