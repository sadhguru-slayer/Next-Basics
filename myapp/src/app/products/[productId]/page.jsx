import React from 'react'

export async function generateMetadata ({params}){
  const {productId:id} = await params;

  return {
    title : `Product ${id} | My App`,
    description: `Details of product ${id}`,
  }
}


const ProductDetails = async ({ params }) => {
  const urlparams = await params;
  await new Promise((resolve)=> setTimeout(resolve,1000));
  return (
    <div>ProductDetails for ID: {urlparams.productId}</div>
  )
}

export default ProductDetails
