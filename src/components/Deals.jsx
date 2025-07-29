import React from 'react'
import Button from './Button'

const Deals = ({image,name,price}) => {
  return (
    <div className='hover:shadow-md hover:drop-shadow-lg drop-shadow-md p-3 bg-white rounded-lg'>
      <div className='flex gap-5'>
        <img src={image} alt="" className='w-30'/>
        <div>
            <p className='font-bold text-sm'>{name}</p>
            <p className='font-semibold text-sm'>{price}</p>
        </div>
        <div>
            <Button />
        </div>
      </div>
    </div>
  )
}

export default Deals
