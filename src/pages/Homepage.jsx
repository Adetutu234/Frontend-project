import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Deals from '../components/Deals'
import { useMemo } from 'react'

const Homepage = ({products,clothes,allProducts}) => {
const featured = useMemo(() => {
  return allProducts
    .filter(product => product.isFeatured)
    .sort(() => Math.random() - 0.5)
    .slice(0,6)
}, [allProducts])
const featured2 = useMemo(() => {
  return allProducts
    .filter(product => product.isFeatured)
    .sort(() => Math.random() - 0.5)
    .slice(0,6)
}, [allProducts])
  return (
    <div className='lg:p-5'>
      {/* herosection */}
      <div className='flex flex-col lg:flex-row gap-5 lg:p-5'>
        <img src="https://buybetter.ng/wp-content/uploads/2025/06/Welcome-Discount-Banner-2-scaled-optimized.png" alt="" className='lg:w-[60%] object-fit '/>
        <div className='hidden lg:grid grid-cols-2 lg:w-[40%]'>
          <img src="https://t4.ftcdn.net/jpg/01/15/04/39/360_F_115043913_g00I2WhOKYresf7JId9GTTnNy50FBDRi.jpg" alt="" />
          <img src="https://img.pikbest.com/templates/20240618/sales-promo-template-for-exclusive-podium-products_10626584.jpg!w700wp" alt="" />
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/22562f79286847.5da1fe1fd2349.jpg" alt="" />
          <img src="https://hunterae.com/wp-content/uploads/images/stylish-product-promo-38717059-videohive-download-free-hunterae-com-2.jpg" alt="" />
        </div>
      </div>

      {/* todays deal */}
      <div>
        <h1 className='text-center font-bold text-3xl pt-5 pb-3'>Todays Top Deals</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-5'>
          {featured.slice(0, 6).map((item) => (
            <Deals key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* categories */}
      {/* left */}
      <h1 className='text-center font-semibold text-4xl pb-3'>Shop by category</h1>
      {/* top */}
      <div className='grid lg:grid-cols-2 gap-2 lg:p-10 p-5'>
        <div className='bg-blue-300 lg:p-10 p-5 rounded-lg space-y-1'>
          <h1 className='font-bold text-3xl'>Diva</h1>
          <p className='font-semibold text-lg'>Your Fashion Choices</p>
          <Link to={'/clothes'}><Button text='Shop now' className='text-white px-6 py-2 bg-black w-fit'/></Link>
          {/* slice */}
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 pt-3 '>
            {clothes.slice(0, 3).map((clothe) => (
              <Link to={`/products/${clothe.id}`} key={clothe.id}>
                <CategoryCard {...clothe} />
              </Link>
              ))}
          </div>
        </div>

      {/* right */}
        <div className='grid grid-cols-2 gap-2 lg:pt-0 pt-5'>
          <Link to="/electronics">
            <div className=' hover:shadow-lg hover:drop-shadow-lg relative'>
              <p className='absolute font-semibold text-xl top-3 right-3'>Electronics</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUpxAbcKaL750GWnFDvXUqSP-o1xRy0hAWw&s" alt="" className='h-40 w-full'/>
            </div>
          </Link>
          <Link to='/shoes'>
            <div className=' hover:shadow-lg hover:drop-shadow-lg relative'>
              <p className='absolute font-semibold text-xl top-3 right-3'>Shoes</p>
              <img src="https://media.istockphoto.com/id/942926448/photo/set-of-colored-womens-shoes-on-beige-background.jpg?s=612x612&w=0&k=20&c=OKPtxR0axe8D9mnBEdY63NQT9hiWwN7b8BGjj-YYhBg=" alt="" className='h-40 w-full'/>
            </div>
          </Link>
          <Link to='/beauty'>
            <div className=' hover:shadow-lg hover:drop-shadow-lg relative'>
              <p className='absolute font-semibold text-xl top-3 right-3'>Skincare</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUxeKz7-NAE05z8FTUsb6mjd1GdizJGpXQA&s" alt="" className='h-40 w-full'/>
            </div>
          </Link>
          <Link to='/clothes'>
            <div className=' hover:shadow-lg hover:drop-shadow-lg relative'>
              <p className='absolute font-semibold text-xl top-3 right-3'>Clothing</p>
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHww" alt="" className='h-40 w-full'/>
            </div>
          </Link>
          <Link to='/fitness'>
            <div className=' hover:shadow-lg hover:drop-shadow-lg relative'>
              <p className='absolute font-semibold text-xl top-3 right-3'>Fitness</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPd9rxSyLvQEvW8TqQ6T_5Z5xhyeKFoUnAw&s" alt="" className='h-40 w-full'/>
            </div>
          </Link>
          <Link to='/bags'>
            <div className=' hover:shadow-lg hover:drop-shadow-lg relative'>
              <p className='absolute font-semibold text-xl top-3 right-3'>Fashion</p>
              <img src="https://t4.ftcdn.net/jpg/02/02/39/07/360_F_202390749_8T273Qalaj7HwjvW6W4VSiUsNb753vd2.jpg" alt="" className='h-40 w-full'/>
            </div>
          </Link>
        </div>
      </div>

      {/* more to love */}
      <h1 className='text-center font-bold text-4xl pb-3'>More to love</h1>
      <div className='grid grid-cols-2 lg:grid-cols-5 lg:gap-2 gap-5 lg:p-10 p-5'>
        {products.map((product)=>(
          <Link to={`/product/${product.id}`} key={product.id}>
            <CategoryCard key={product.id} {...product} />
          </Link>
        ))}
      </div>

      {/* herosection2 */}
        <div>
          {/* <img src="https://i-serena.com/wp-content/uploads/2024/01/anua-banner.jpg" alt="" /> */}
          {/* <img src="https://blog.delivered.co.kr/wp-content/uploads/2024/10/beauty-of-joseon-featured.jpg" alt="" className='' /> */}
          <img src="https://cdn.shopify.com/s/files/1/0515/4589/9157/files/4_35bc5c2b-1d9a-4234-9aa2-819b288a723a.png?v=1751857629" alt="" className='lg:h-fit h-50 ' />
        </div>

      {/* recommended for you */}
      <div>
        <h1 className='text-center font-bold text-3xl pt-5 pb-3 capitalize'>Recommended for you</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-5'>
          {featured2.slice(0, 6).map((item) => (
            <Deals key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage
