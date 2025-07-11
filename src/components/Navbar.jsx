import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-700 p-5'>
      <div className='flex gap-5 uppercase'>
        <img src="" alt="" />
        <p>FashionHub</p>
      </div>

      <div>
        <ul className='flex gap-5 uppercase'>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
