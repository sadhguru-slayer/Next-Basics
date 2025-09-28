export const dynamicParams = false; // True -> Gererate new pages; False -> 404 for non-existing pages
// True can be used in Website where new things are added frequently like blog, news etc.
// False when we have few and want to have strict control over the pages like product pages in ecommerce site.

export async function generateStaticParams(){
    return [{id:'1'},{id:'2'},{id:'3'}]; //But how this works? and how Next knows which id to use?
    //Answer: Next will use this to pre-render these pages at build time. So when user requests /products/1, it will serve the pre-rendered page for id 1.
    //If user requests /products/4, it will generate the page on the fly (if not using fallback: false)
} // Even if we visit the ids that are not included the abve funct will create related pages in build time itself.
const ProductDetail = async ({params}) => {
    const {id} = await params;
  return (
    <div>ProductDetail with {id} at time {new Date().toISOString()}</div>
  )
}

export default ProductDetail