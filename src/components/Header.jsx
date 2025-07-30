import React from 'react'
import {CaretDown} from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-black p-3 text-white lg:block hidden'>
      <ul className='flex justify-around'>
        <Link to='/' className='uppercase text-sm hover:underline hover:cursor-pointer'>home </Link>
        <Link to='/shop' className='uppercase text-sm hover:underline hover:cursor-pointer'>shop</Link>
        <div className='flex gap-2 items-center'>
            <Link to='/bags' className='uppercase text-sm hover:underline hover:cursor-pointer'>accessories & bags</Link>
            <CaretDown size={15} className=''/>
        </div>
        <div className='flex gap-2 items-center'>
            <Link to='/beauty' className='uppercase text-sm hover:underline hover:cursor-pointer'>health & beauty</Link>
            <CaretDown size={15} className=''/>
        </div>
        <div className='flex gap-2 items-center'>
            <Link to='/clothes' className='uppercase text-sm hover:underline hover:cursor-pointer'>clothing</Link>
            <CaretDown size={15} className=''/>
        </div>
        <div className='flex gap-2 items-center'>
            <Link to='/shoes' className='uppercase text-sm hover:underline hover:cursor-pointer'>shoes & accessories</Link>
            <CaretDown size={15} className=''/>
        </div>
        <div className='flex gap-2 items-center'>
            <Link to='/fitness' className='uppercase text-sm hover:underline hover:transition-all hover:cursor-pointer'>sports and fitness</Link>
            <CaretDown size={15} className=''/>
        </div>
        <div className='flex gap-2 items-center'>
            <Link to='/electronics' className='uppercase text-sm hover:underline hover:cursor-pointer'>electronics</Link>
            <CaretDown size={15} className=''/>
        </div>
        <Link to='/sales' className='uppercase text-sm hover:underline hover:cursor-pointer'>sales</Link>
      </ul>
    </div>
  )
}

export default Header
