import React from 'react'
import { update_Product, findUnique_Product } from '@/prisma-db'
import UpdateProductForm from './UpdateProductForm';


const UpdateProduct = async ({ params }) => {
  const { id } = await params;
  const product = await findUnique_Product({ id });

  return (
    <div className='h-screen flex justify-center items-center'>
      <UpdateProductForm product={product} />
    </div>
  );
};

export default UpdateProduct;
