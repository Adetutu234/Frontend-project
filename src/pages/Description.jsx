import React from 'react'

const Description = ({sku ,stock}) => {
  return (
    <div className="text-gray-700 px-10 py-5">
      <h2 className="text-2xl font-semibold mb-2 text-center">Product Description</h2>
      {/* <p className='font-semibold'>{description}</p> */}
      <h1 className='font-bold text-lg pt-3 pb-2'>Features:</h1>
      {/* <ul>
        <li className='font-bold text-md'>Top Notes: <span className='font-normal text-md'>Tangerine, Lavender</span></li>
        <li className='font-bold text-md'>Middle Notes: <span className='font-normal text-md'>Jasmine, Orange Blossom</span></li>
        <li className='font-bold text-md'>Base Notes: <span className='font-normal text-md'>Vanilla, Vetiver, Tonka Bean</span></li>
        <li className='font-bold text-md'>Fragrance Type: <span className='font-normal text-md'>Warm Floral Amber</span></li>
        <li className='font-bold text-md'>Best For: <span className='font-normal text-md'>Evening wear, Romantic occasions</span></li>
        <li className='font-bold text-md'>Sillage: <span className='font-normal text-md'>Moderate to heavy</span></li>
        <li className='font-bold text-md'>Longevity: <span className='font-normal text-md'>8–10 hours</span></li>
        <li className='font-bold text-md'>Brand: <span className='font-normal text-md'>Yves Saint Laurent</span></li>
        <li className='font-bold text-md'>Release Year: <span className='font-normal text-md'>2020</span></li>
      </ul> */}
            <div>
              <ul>
                <li>Sku: {sku}</li>
                <li>hiii: {stock}</li>
              </ul>
      sku: "CHANEL-CF-MED-BLK",
      productLine: "Classic Flap",
      model: "2025-QF",
      weight: 1.1,
      color: "black",
      mainMaterial: "Lambskin",
      madeIn: "France",
      ratings: 4.9,
    reviewsCount: 211,
    tags: ["luxury", "designer", "chanel"],
      </div>
    </div>
  )
}

export default Description
