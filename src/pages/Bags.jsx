import React from 'react'
import CategoryCard from '../components/CategoryCard'

const Bags = ({bags}) => {
  return (
    <div className='flex flex-col p-7'>
      <div className='text-center space-y-3 '>
        <h1 className='font-semibold text-2xl'>Women Fashion Accessories</h1>
        <p className='text-sm lg:w-200 mx-auto'>Accessories inject a personal touch to every woman's wardrobe. The perfect dress needs the right other half to be complete. Take your outfit to another level with our collection of watches, eyewear, jewellery, purses, belts and lots more. Choose your own style, suit your personal taste and satisfy your need for embellishments with FASHIONHUB.</p>
        <ul className='flex gap-10 lg:w-150 mx-auto text-sm'>
          <li className='text-red-900 font-semibold'>Shop by category</li>
          <li className='text-orange-700'>Bags&Purses</li>
          <li className='text-orange-700'>Jewelry</li>
          <li className='text-orange-700'>Sunglasses</li>
          <li className='text-orange-700'>Hair Clips</li>
        </ul>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 pt-6'>
        {bags.map((bag)=>(
              <CategoryCard key={bag.id} {...bag}/>))
        }
      </div>
    </div>
  )
}

export default Bags
