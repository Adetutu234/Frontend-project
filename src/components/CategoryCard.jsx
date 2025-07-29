import React from 'react'

const CategoryCard = ({image,price,name}) => {
  return (
    <div className='hover:shadow-lg hover:drop-shadow-lg rounded-lg p-3 border-1 cursor-pointer bg-white'>
        <img src={image} alt="" className='mx-auto '/>
        <p className='font-bold text-sm'>{name}</p>
        <p className='font-semibold text-sm'>{price}</p>
        <p className='text-red-700 text-xs'>free shipping over NGN16,583.</p>
    </div>
  )
}

export default CategoryCard
