import React from 'react'
import CategoryCard from '../components/CategoryCard'

const Shoes = ({shoes}) => {
  return (
      <div className='flex flex-col p-7'>
      <div className='text-center space-y-3'>
        <h1 className='font-bold text-xl'>Women Shoes</h1>
        <p className='text-sm lg:w-200 mx-auto'>A girl can never have too many shoes, which is why we have such an extensive collection for you to choose from. Inspired by new-season trends, we've got shoes for all of your fashion needs. Whatever the trend you're trying to emulate or create, SOJOEE is sure to have the perfect women's shoes for you. Shop NOW, we are your trusted online shoe shop in Lagos, Nigeria.</p>
      <ul className='flex gap-10 lg:w-150 mx-auto text-sm'>
          <li className='text-red-900 font-semibold'>Shop by category</li>
          <li className='text-orange-700'>Bags&Purses</li>
          <li className='text-orange-700'>Jewelry</li>
          <li className='text-orange-700'>Sunglasses</li>
          <li className='text-orange-700'>Hair Clips</li>
        </ul>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-12 pt-6'>
        {shoes.map((shoe)=>(
            <CategoryCard key={shoe.id} {...shoe}/>
        ))}
    </div>
    </div>
  )
}

export default Shoes
