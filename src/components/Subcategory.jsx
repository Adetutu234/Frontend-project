import React from 'react'

const Subcategory = ({allProducts}) => {
  return (
    <div>
      <h1>{allProducts.title}</h1>
      <p>{allProducts.description}</p>
      {/* subcategory */}
      <div className='flex'>
        <p>shop by category:</p>
        <p>{allProducts.category}</p>
      </div>
    </div>
  )
}

export default Subcategory
