import React from 'react'
import Link from 'next/link';

export const metadata = {
    title: 'Product | My App',
    description: 'Product List page',
}

const Products = () => {
    const listofproducts = [
        {productId: 1,name:'Product 1'},
        {productId: 2,name:'Product 2'},
        {productId: 3,name:'Product 3'},

    ];
  return (
    <div>
    <h1>
    Products
    </h1>
    <p>This is the products page</p>
    <ul>
    
    {listofproducts.map((product) => (

        <li key={product.productId}>
            <Link href={`/products/${product.productId}`}>{product.name}</Link>
        </li>
  ))}
</ul>
    </div>

  )
}

export default Products