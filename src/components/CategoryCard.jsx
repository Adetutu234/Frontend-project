import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from "@phosphor-icons/react";
import { CartContext } from '../context/CartContext'
import { CounterContext } from '../context/CounterContext'

const CategoryCard = ({image,price,name,id}) => {
    const {addToCart} = useContext(CartContext)
  return (
    <Link to={`/product/${id}`} className="lg:h-[100%]">
      <div className='hover:shadow-lg hover:drop-shadow-lg rounded-lg p-3 border-1 cursor-pointer bg-white space-y-2 lg:h-[100%]'>
          <img src={image} alt="" className='mx-auto lg:h-[65%] w-fit object-contain '/>
          <div className='lg:h-[35%]'>
            <p className='font- text-sm'>{name}</p>
            <div className='flex justify-between items-center p-1'>
              <p className='font-semibold text-xl'>{price}</p>
              {/* <p className='font-semibold text-sm'>{stock}</p> */}
              <ShoppingCart size={22} className='text-orange-70' onClick={()=> addToCart()}/>
                
            </div>
            <p className='text-red-700 text-xs'>free shipping over NGN16,583.</p>
          </div>
      </div>
    </Link>
  )
}

export default CategoryCard
