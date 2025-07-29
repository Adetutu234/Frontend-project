import React from 'react'
import CategoryCard from '../components/CategoryCard'

const Beauty = ({beautyProducts}) => {
  return (
    <div className='flex flex-col p-7'>
        <div className='text-center space-y-3'>
        <h1 className='font-bold text-xl'>Health & Beauty - Personal Care, Skin Care & More</h1>
        <p className='text-sm lg:w-200 mx-auto'>Enhance your beauty and well-being with FASHIONHUB’s health and beauty collection, offering everything from supportive wear for hands and arms to skin care, makeup, and nail essentials. Our curated range includes high-quality false eyelashes, press-on nails, insoles, shoe pads, and soothing skincare solutions, ensuring you look and feel your best every day. Discover top-quality products tailored to your needs at FASHIONHUB, and make self-care simple and stylish!</p>
      <ul className='flex gap-10 lg:w-150 mx-auto text-sm'>
          <li className='text-red-900 font-semibold'>Shop by category</li>
          <li className='text-orange-700'>Bags&Purses</li>
          <li className='text-orange-700'>Jewelry</li>
          <li className='text-orange-700'>Sunglasses</li>
          <li className='text-orange-700'>Hair Clips</li>
        </ul>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-12 pt-6'>
        {beautyProducts.map((beautyProduct)=>(
          <CategoryCard key={beautyProduct.id} {...beautyProduct}/>
        ))}
      </div>
    </div>
  )
}

export default Beauty
