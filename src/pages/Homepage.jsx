import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Deals from '../components/Deals'

const Homepage = ({products,clothes}) => {
  return (
    <div className='lg:p-5'>
      {/* herosection */}
      <div className='flex'>
        <img src="https://buybetter.ng/wp-content/uploads/2025/06/Welcome-Discount-Banner-2-scaled-optimized.png" alt="" className='lg:w-[60%] object-fit'/>
        <div className='grid grid-cols-2 lg:w-[40%]'>
          <img src="https://t4.ftcdn.net/jpg/01/15/04/39/360_F_115043913_g00I2WhOKYresf7JId9GTTnNy50FBDRi.jpg" alt="" />
          <img src="https://img.pikbest.com/templates/20240618/sales-promo-template-for-exclusive-podium-products_10626584.jpg!w700wp" alt="" />
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/22562f79286847.5da1fe1fd2349.jpg" alt="" />
          <img src="https://hunterae.com/wp-content/uploads/images/stylish-product-promo-38717059-videohive-download-free-hunterae-com-2.jpg" alt="" />
        </div>
      </div>

      {/* todays deal */}
      <div className='grid lg:grid-cols-3  gap-2 p-10 bg-white'>
          {products.slice(0, 6).map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <Deals {...product} className="h-12"/>
            </Link>
          ))}
      </div>

      {/* deals/categories */}
      {/* left */}
      <h1 className='text-center font-semibold text-4xl pb-3'>Shop by category</h1>
      <div className='grid lg:grid-cols-2 gap-2 p-10'>
        <div className='bg-blue-300 lg:p-10 p-5 rounded-lg space-y-1'>
          <h1 className='font-bold text-3xl'>Diva</h1>
          <p className='font-semibold text-lg'>Your Fashion Choices</p>
          <Button text='Shop now' className='text-white px-6 py-2 bg-black w-fit'/>

          <div className='grid grid-cols-3 gap-3 pt-3 '>
            {clothes.slice(0, 3).map((clothe) => (
              <Link to={`/products/${clothe.id}`} key={clothe.id}>
                <CategoryCard {...clothe} />
              </Link>
              ))}
          </div>
        </div>

      {/* right */}
        <div className='grid grid-cols-2 gap-2'>
          <div className=' hover:shadow-lg hover:drop-shadow-lg'>
            {/* <p>Electronics</p> */}
            <img src="https://goodmockups.com/wp-content/uploads/2022/02/Free-MacBook-Pro-16%E2%80%B3-iPhone-13-Pro-Max-Responsive-Website-Mockup-PSD.jpg" alt="" className='h-40 w-full'/>
          </div>
          <div className=' hover:shadow-lg hover:drop-shadow-lg'>
            {/* <p>Shoes</p> */}
            <img src="https://media.istockphoto.com/id/942926448/photo/set-of-colored-womens-shoes-on-beige-background.jpg?s=612x612&w=0&k=20&c=OKPtxR0axe8D9mnBEdY63NQT9hiWwN7b8BGjj-YYhBg=" alt="" className='h-40 w-full'/>
          </div>
          <div className=' hover:shadow-lg hover:drop-shadow-lg'>
            {/* <p>Skincare</p> */}
            <img src="https://www.skincare.com/-/media/project/loreal/brand-sites/sdc/americas/us/articles/2020/02_february/05-galentines-day-gifts/valentines-day-skincare-gifts-for-women-hero-scd-020520.jpg" alt="" className='h-40 w-full'/>
          </div>
          <div className=' hover:shadow-lg hover:drop-shadow-lg'>
            {/* <p>Clothing</p> */}
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHww" alt="" className='h-40 w-full'/>
          </div>
          <div className=' hover:shadow-lg hover:drop-shadow-lg'>
            {/* <p>Fitness</p> */}
            <img src="https://media.istockphoto.com/id/625739874/photo/heavy-weight-exercise.jpg?s=612x612&w=0&k=20&c=B1uzJW1DBei2Rx5hnt139tt9dt3L7TbKrpgwbMR-LrI=" alt="" className='h-40 w-full'/>
          </div>
          <div className=' hover:shadow-lg hover:drop-shadow-lg'>
            {/* <p>Phones</p> */}
            <img src="https://t4.ftcdn.net/jpg/02/02/39/07/360_F_202390749_8T273Qalaj7HwjvW6W4VSiUsNb753vd2.jpg" alt="" className='h-40 w-full'/>
          </div>
        </div>
      </div>

      {/* more to love */}
      <h1 className='text-center font-bold text-4xl pb-3'>More to love</h1>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-2 p-10'>
        {products.map((product)=>(
          <Link to={`/products/${product.id}`} key={product.id}>
            <CategoryCard key={product.id} {...product} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Homepage
