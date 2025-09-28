
import { Suspense } from 'react' // THIs is useful for Streaming in Nextjs for server componets
import Products from '../../components/products'
import Reviews from '../../components/Reviews'

const ProductReviews = () => {
  return (
    <div>
      <h2>Product Reviews</h2>
    <Suspense fallback={<div>Loading Products...</div>}>
        <Products />
    </Suspense>

    <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews />
    </Suspense>
    </div>
  )
}

export default ProductReviews