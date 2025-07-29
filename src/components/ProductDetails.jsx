import React, { useContext,useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from './Button'
import { CounterContext } from '../context/CounterContext'
import { Link } from 'react-router-dom'
import Description from '../pages/Description'
import CategoryCard from './CategoryCard'

const ProductDetails = ({products,favorites}) => {
const [showDescription, setShowDescription] = useState(false)
const handleShowDescription = () => {
  setShowDescription(true)
}
const {count,setCount} = useContext(CounterContext)
const {id} = useParams()
const product = products.find((product)=>product.id === parseInt(id))
if(!product){
    return <p>Product not found</p>
}
  return (
    <div>
      <div className='grid lg:grid-cols-2'>
        <div className='p-10'><img src={product.image} alt="" className="w-120 p-10 h-fit mx-auto"/></div>
        <div className='p-20 space-y-2'>
            <h1 className='font-semibold text-4xl'>{product.name}</h1>
            <p className='font-semibold text-xl'>{product.details}</p>
            <p className='font-bold text-2xl'>{product.price}</p>
            <div className='space-y-2 cursor-pointer'>
                <div className='flex gap-2 items-center bg-slate-400/10 w-fit'>
                    <Button text={'-'} className={'px-4 py-1 h-fit'} onClick={()=>setCount(count-1)} />
                    <p className='font-medium'>{count}</p>
                    <Button text={'+'} className={'px-4 py-1 h-fit'} onClick={()=>setCount(count+1)} />
                </div>
                <Button text={'ADD TO CART'} className={'px-8 py-2 w-fit bg-orange-600 text-white font-semibold'}/>
            </div>
        </div>
      </div>

      <div className='flex items-center flex-col'>
        <ul className='flex gap-4 p-5 mx-auto cursor-pointer'>
          <Button text={'Description'} className='font-semibold h-fit lg:text-3xl rounded-lg bg-orange-600 lg:p-2 text-white'onClick={handleShowDescription} />
          <Link to='/reviews' className='font-semibold lg:text-3xl hover:rounded-lg text-slate-700/20 p-2 '>Reviews(0)</Link>
          <Link to='/additional' className='font-semibold lg:text-3xl hover:rounded-lg text-slate-700/20 p-2 '>Additional Information</Link>
        </ul>
      </div>
          {showDescription && <Description {...product} />}

          <hr className='text-bg-slate-700/20'/>
          <p>adcbqnvl</p>
          <hr className='text-bg-slate-700/20'/>

          <div>
            <h1 className='text-center font-bold text-3xl'>More To Love</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 p-5'>
              {favorites.map((favorite)=>(
                <CategoryCard key={favorite.id} {...favorite}/>
              ))}
            </div>
          </div>
    </div>
  )
}

export default ProductDetails
