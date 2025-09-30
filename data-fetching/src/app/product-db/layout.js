import React from 'react'

const ProductLayout = ({ children, modal }) => (
  <>
    <div>{children}</div>
    {modal}
  </>
);

export default ProductLayout