import React from 'react'
import CategoryCard from '../components/CategoryCard'
// import Subcategory from '../components/Subcategory'


const Bags = ({bags, allProducts}) => {
  // Shuffle allProducts and get 5 random items for recommendations
  const getRandomItems = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }
  const recommended = getRandomItems(allProducts, 6)
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
        {/* <p>{bags.subcategory}</p> */}
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-5 pt-6'>
        {bags.map((bag)=>(
          <CategoryCard key={bag.id} {...bag}/>
          ))}
      </div>
      {/*more to love  */}
      <div>
        <h1 className='text-center font-bold text-3xl mt-10'>More To Love</h1>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 p-5'>
          {recommended.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bags
