import React from 'react'
import CategoryCard from '../components/CategoryCard'

const Sports = ({sports}) => {
  return (
    <div className='flex flex-col p-7'>
      <div className='text-center space-y-3'>
        <h1 className='font-bold text-xl'>Sports & Fitness Gear</h1>
        <p className='text-sm lg:w-200 mx-auto'>Gear up for success with SOJOEE's range of sports and fitness essentials! From performance-focused clothing and durable sports bags to high-quality equipment, our collection has everything you need to enhance your workout and achieve your fitness goals. Designed for comfort, style, and durability, our products support your active lifestyle. Shop our website to explore affordable, high-quality gear that empowers your fitness journey!</p>
        <ul className='flex gap-10 lg:w-150 mx-auto text-sm'>
          <li className='text-red-900 font-semibold'>Shop by category</li>
          <li className='text-orange-700'>Bags&Purses</li>
          <li className='text-orange-700'>Jewelry</li>
          <li className='text-orange-700'>Sunglasses</li>
          <li className='text-orange-700'>Hair Clips</li>
        </ul>
      </div>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 pt-6'>
      {sports.map((sport)=>(
        <CategoryCard key={sport.id} {...sport} />
      ))}
    </div>
    </div>
  )
}

export default Sports
