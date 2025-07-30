import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({image,price,name,id}) => {
  return (
    <Link to={`/product/${id}`} className="block hover:shadow-lg">
      <div className='hover:shadow-lg hover:drop-shadow-lg rounded-lg p-3 border-1 cursor-pointer bg-white'>
          <img src={image} alt="" className='mx-auto '/>
          <p className='font-bold text-sm'>{name}</p>
          <p className='font-semibold text-sm'>{price}</p>
          <p className='text-red-700 text-xs'>free shipping over NGN16,583.</p>
      </div>
    </Link>
  )
}

export default CategoryCard
