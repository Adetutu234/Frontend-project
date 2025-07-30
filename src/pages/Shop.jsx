import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'

const Shop = ({allProducts }) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 p-5'>
      {allProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
        <CategoryCard key={product.id} {...product} />
        </Link>
      ))}
    </div>
  )
}

export default Shop
