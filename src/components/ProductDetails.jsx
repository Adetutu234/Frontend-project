import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from './Button'
import { CounterContext } from '../context/CounterContext'
import Description from '../pages/Description'
import CategoryCard from './CategoryCard'
import { CartContext } from '../context/CartContext'

const ProductDetails = ({ allProducts }) => {
  const {addToCart} = useContext(CartContext)
  const [showDescription, setShowDescription] = useState(false)
  const handleShowDescription = () => setShowDescription(true)

  const { count, setCount } = useContext(CounterContext)
  const { id } = useParams()
  const product = allProducts.find((item) => item.id === parseInt(id))
  if (!product) {
    return <p className='text-center text-red-500 mt-10'>Product not found</p>
  }

  // 💡 Shuffle allProducts and get 7 random items (excluding current product)
  const getRandomItems = (arr, excludeId, count) => {
    const filtered = arr.filter((item) => item.id !== excludeId)
    const shuffled = [...filtered].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)}
  const recommended = getRandomItems(allProducts, product.id, 5)

  return (
    <div>
      {/* Product Details */}
      <div className='grid lg:grid-cols-2'>
        {/* left */}
        <div className='pt-10'>
          <img src={product.image} alt={product.name} className="w-120 p-10 lg:h-fit mx-auto object-contain" />
        </div>

        {/* right */}
        <div className='p-20 space-y-4'>
          <h1 className='font-semibold text-4xl'>{product.name}</h1>
          <div className='space-y-1 '>
            <p className='text-red-700 flex gap-2'><span className='text-black font-semibold'>Size:</span>
                {product.sizes?.map((size, index) => (
                  <p key={index} className="">{size}</p>
                ))}</p>
            <p className='text-red-700'><span className='text-black font-semibold'>Rating:</span>  {product.ratings}</p>
            <p className='text-red-700'><span className='text-black font-semibold'>Brand:</span>  {product.brand}</p>
            <p className='text-red-700'><span className='text-black font-semibold'>Subcategory:</span>  {product.tags}</p>
            {/* <p className='text-red-700'><span className='text-black font-semibold'>Model:</span>  {product.productSpecs.model}</p> */}
          </div>

          <p className='font-bold text-2xl'>{product.price}</p>

          <div className='space-y-2 cursor-pointer'>
            <div className='flex gap-2 items-center bg-slate-400/10 w-fit'>
              <Button text={'-'} className={'px-4 py-1 h-fit'} onClick={() => setCount(count - 1)} />
              <p className='font-medium'>{count}</p>
              <Button text={'+'} className={'px-4 py-1 h-fit'} onClick={() => setCount(count + 1)} />
            </div>
            <Button text={'ADD TO CART'} className={'px-8 py-2  w-fit bg-orange-600 text-white font-semibold'} onClick={()=> addToCart(product)}/>
          </div>
          
        <div className="flex gap-2 ">
          {(product.color && Array.isArray(product.color) ? product.color.slice(0, 4) : []).map((clr, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: clr }}
              title={clr}
            ></div>
          ))}
        </div>

        <div className="font- text-black text-sm">
          {(product.color && Array.isArray(product.color) ? product.color.slice(0, 3) : []).map((clr, index) => (
            <span key={index} className="mr-2 capitalize border-1 p-1">
              {clr}
            </span>
          ))}
        </div>

          {Array.isArray(product.details) ? (
            <div className="mt-4">
              <h3 className="font-semibold text-xl mb-2">Product Details:</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            </div>
          ) : product.details ? (
            <p className="mt-4 text-gray-700">{product.details}</p>
          ) : null}
        </div>
      </div>

      {/* Tabs */}
      <div className='flex items-center flex-col'>
        <ul className='flex gap-4 p-5 mx-auto cursor-pointer'>
          <Button text={'Description'} className='font-semibold h-fit lg:text-3xl rounded-lg bg-orange-600 lg:p-2 text-white' onClick={handleShowDescription} />
          <Link to='/reviews' className='font-semibold lg:text-3xl hover:rounded-lg text-slate-700/20 p-2 '>Reviews(0)</Link>
          <Link to='/additional' className='font-semibold lg:text-3xl hover:rounded-lg text-slate-700/20 p-2 '>Additional Information</Link>
        </ul>
      </div>

      {/* Description Section */}
      {showDescription && (
          <Description productSpecs={product.productSpecs} />
      )}


      <hr className='text-bg-slate-700/20' />
      <p className='text-center py-2 text-slate-400'>Enjoy your shopping experience</p>
      <hr className='text-bg-slate-700/20' />

      {/* Recommended Section */}
      <div>
        <h1 className='text-center font-bold text-3xl mt-10'>More To Love</h1>
        <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 p-5'>
          {recommended.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
