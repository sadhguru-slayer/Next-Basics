import React from 'react'
import Link from 'next/link'
const Products = () => {
    const Products = [
    { id:1 ,name: 'Product 1', description: 'Description of Product 1' },
    { id:2 ,name: 'Product 2', description: 'Description of Product 2' },
    { id:3 ,name: 'Product 3', description: 'Description of Product 3' },
    ]
  return (
    <div>
    <h1>Products</h1>
    <ul className='list-disc pl-5'>
    {Products.map((Product) => (
        <li key={Product.id}>
        <Link href={`/products/${Product.id}`}>
        <h2 className='font-bold'>{Product.name}</h2>
        </Link>
        <p>{Product.description}</p>
        </li>
    ))}
    </ul>
    </div>
  )
}

export default Products