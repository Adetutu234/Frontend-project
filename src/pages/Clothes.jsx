import React from 'react'
import CategoryCard from '../components/CategoryCard'

const Clothes = ({clothes}) => {
  return (    
    <div className='flex flex-col p-7'>
        <div className='text-center space-y-3'>
            <h1 className='font-bold text-xl'>Clothing | Dresses, Tops, Skirts, Jumpsuits & more</h1>
            <p className='text-sm lg:w-200 mx-auto'>Looking for a fashion update? You're in the right place. From crop tops, party dresses to evening gowns, jumpsuits and more, we have a clothing collection that will edge its way into your wardrobe. Complete your look with gorgeous finishing touches, from high heels and flats to statement bags and jewellery.</p>
        <ul className='flex gap-10 lg:w-150 mx-auto text-sm'>
          <li className='text-red-900 font-semibold'>Shop by category</li>
          <li className='text-orange-700'>Bags&Purses</li>
          <li className='text-orange-700'>Jewelry</li>
          <li className='text-orange-700'>Sunglasses</li>
          <li className='text-orange-700'>Hair Clips</li>
        </ul>
      </div>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-12 pt-6'>
      {clothes.map((clothe)=>(
        <CategoryCard key={clothe.id} {...clothe} />
      ))}
    </div>
    </div>
  )
}

export default Clothes
