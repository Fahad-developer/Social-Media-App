import ProductsComp from "../components/ProductComp.jsx"

import products from '../data/products.js'

const Products = () => {
  return (
    <>
      <ProductsComp products={products}/>
    </>
  )
}

export default Products