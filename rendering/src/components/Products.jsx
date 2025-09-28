const Products = async () => {
  // Example product data
  await new Promise((r)=> setTimeout(r,4000));

  const products = [
    { id: 1, name: 'Laptop', price: '$999' },
    { id: 2, name: 'Smartphone', price: '$699' },
    { id: 3, name: 'Headphones', price: '$199' },
  ]

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products