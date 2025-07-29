import React from 'react'
import Button from './Button'
import {MagnifyingGlass,ShoppingCart,Question,User} from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import {CaretDown} from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className='flex justify-between p-7 text-center items-center'>
      <div className='flex gap-5 uppercase items-center'>
        {/* <img src="" alt="" /> */}
        <p className='font-bold lg:text-xl '>FashionHub</p>
      </div>

      <div className='relative lg:flex hidden '>
        <input 
          type='text'
          placeholder='I am searching for....'
          className='shadow-lg drop-shadow-lg p-2 rounded-lg bg-slate-500/10 w-150 outline-none border-none'
          />
      <MagnifyingGlass 
        className='absolute right-3 top-2 cursor-pointer text-slate-700'
        size={26} 
          />
        {/* <Button /> */}
      </div>

      <div>
        <ul className='lg:flex hidden gap-5 uppercase cursor-pointer '>
            <div className='flex gap-2 items-center'>
            <div className='flex gap-2 items-center'>
              <User size={25} />
              <p className='capitalize'>Account</p>
              <CaretDown size={15} className=''/>
            </div>
              <Question size={25} />
              <p className='capitalize'>Help</p>
              <CaretDown size={15} className=''/>
            </div>
            <div className='flex gap-2'>
              <ShoppingCart size={25} />
              <p className='capitalize'>Cart</p>
            </div>
            {/* <Link to='/'>home</Link>
            <li>about</li>
            <li>services</li>
            <li>contact</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
