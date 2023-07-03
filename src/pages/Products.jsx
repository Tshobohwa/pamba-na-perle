import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'

const Products = () => {
  const {products} = useSelector((store) => store.products)
  return (
    <div className='h-full w-full gap-4 p-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
      {
        products.map((product, index)=> <Product product={product} key={index} />)
      }
    </div>
  )
}

export default Products
