import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { ShoppingCart } from "@phosphor-icons/react";

const Deals = ({id,image,name,price}) => {
  return (
    <Link to={`/product/${id}`} className="block hover:shadow-lg">
    <div className='hover:shadow-md hover:drop-shadow-lg drop-shadow-md p-3 bg-white rounded-lg'>
      <div className='flex gap-5'>
        <img src={image} alt="" className='w-30 h-30 object-contain'/>
        <div>
            <p className=' text-sm'>{name}</p>
            <p className='font-semibold text-xl'>{price}</p>
            <div className='flex justify-between items-center pt-6'>
              <p className='text-green-700 text-sm'>you save $4,500</p>
              <ShoppingCart size={22} className='text-orange-700 ' />
            </div>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default Deals
