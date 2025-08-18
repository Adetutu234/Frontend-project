
import React, { useState, useContext } from 'react';
import { MagnifyingGlass, ShoppingCart, Question, User, List, CaretDown } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='flex justify-between p-7 text-center items-center bg-black lg:bg-white text-white lg:text-black'>
      <p className='font-bold lg:text-xl'>FashionHub</p>

      {/* search */}
      <div className='relative lg:flex hidden'>
        <input 
          type='text'
          placeholder='I am searching for....'
          className='shadow-lg p-2 rounded-lg bg-slate-500/10 w-150 outline-none'
        />
        <MagnifyingGlass className='absolute right-3 top-2 cursor-pointer text-slate-700' size={26} />
      </div>

      <div className='flex items-center'>
        {/* Mobile menu */}
        <div className='flex lg:hidden z-50'>
          <List size={30} onClick={handleClick}/>
          <div className={`${click ? 'flex' : 'hidden'} absolute top-16 left-0 bg-white text-black w-full flex-col items-center gap-5 p-5`}>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/bags'>Bags</Link>
            <Link to='/beauty'>Beauty</Link>
            <Link to='/clothes'>Clothes</Link>
            <Link to='/shoes'>Shoes</Link>
            <Link to='/fitness'>Fitness</Link>
            <Link to='/sales'>Sales</Link>
            <Link to='/cart'>Cart</Link>
          </div>
        </div>

        {/* Large screen menu */}
        <div className=' gap-5 ml-8'>
          <div className='lg:flex hidden gap-2 items-center'>
            <User size={25} />
            <p>Account</p>
            <CaretDown size={15} />
          </div>
          <div className='lg:flex hidden gap-2 items-center'>
            <Question size={25} />
            <p>Help</p>
            <CaretDown size={15} />
          </div>
          <Link to="/cart" className='relative flex items-center gap-1'>
            <ShoppingCart size={25} />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs'>
                {cartCount}
              </span>
            )}
            <p className='lg:flex hidden'>Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// import React, { useState } from 'react'
// import Button from './Button'
// import {MagnifyingGlass,ShoppingCart,Question,User,List} from "@phosphor-icons/react";
// import { Link } from 'react-router-dom';
// import {CaretDown} from "@phosphor-icons/react";

// const Navbar = () => {
//   const [click , setClick]=useState(false)
//   const handleClick = () =>  {
//     setClick(!click)
//   }
//     return (
//       <div className='flex justify-between p-7 text-center items-center bg-black lg:bg-white text-white lg:text-black'>
//         <div className='flex gap-5 uppercase items-center'>
//           {/* <img src="" alt="logo" /> */}
//           <p className='font-bold lg:text-xl '>FashionHub</p>
//         </div>

//       {/*search button  */}
//         <div className='relative lg:flex hidden '>
//           <input 
//             type='text'
//             placeholder='I am searching for....'
//             className='shadow-lg drop-shadow-lg p-2 rounded-lg bg-slate-500/10 w-150 outline-none border-none'
//             />
//         <MagnifyingGlass 
//           className='absolute right-3 top-2 cursor-pointer text-slate-700'
//           size={26} 
//             />
//           {/* <Button /> */}
//         </div>

//         <div className='flex items-center'>
//           {/* Mobile menu */}
//           <div className='flex lg:hidden z-50'>
//             <List size={35} onClick={handleClick}/>
//             <div className={`${click ? 'flex' : 'hidden'} absolute top-16 left-0 bg-white text-black w-full flex-col items-center gap-5 p-5 backdrop-blur-xs`}>
//               <Link to='/' className='hover:text-orange-600 hover:underline hover:scale-120 '>Home</Link>
//               <hr className='border-black w-full'/>
//               <Link to='/shop' className='hover:text-orange-600 hover:underline hover:scale-120 '>Shop</Link>
//               <hr className='border-black w-full'/>
//               <Link to='/bags' className='hover:text-orange-600 hover:underline hover:scale-120 '>Bags</Link>
//               <hr className='border-black w-full'/>
//               <Link to='/beauty' className='hover:text-orange-600 hover:underline hover:scale-120 '>Beauty</Link>
//               <hr className='border-black w-full'/>
//               <Link to='/clothes' className='hover:text-orange-600 hover:underline hover:scale-120 '>Clothes</Link>
//               <hr className='border-black w-full'/>
//               <Link to='/shoes' className='hover:text-orange-600 hover:underline hover:scale-120 '>Shoes</Link>
//               <hr className='border-black w-full'/>
//               <Link to='/fitness' className='hover:text-orange-600 hover:underline hover:scale-120 '>Fitness</Link>
//               <hr className='border-black w-full'/>
//               <Link to='/sales' className='hover:text-orange-600 hover:underline hover:scale-120 '>Sales</Link>
//               <hr className='border-black w-full'/>
//             </div>
//           </div>
//           {/* cart and icons for large screens */}
//           <div className='lg:flex hidden gap-5 uppercase cursor-pointer ml-8'>
//             <div className='flex gap-2 items-center'>
//               <div className='flex gap-2 items-center'>
//                 <User size={25} />
//                 <p className='capitalize'>Account</p>
//                 <CaretDown size={15} className=''/>
//               </div>
//               <Question size={25} />
//               <p className='capitalize'>Help</p>
//               <CaretDown size={15} className=''/>
//             </div>
//             <div className='flex gap-2'>
//               <Link to="/cart">
//                 <ShoppingCart size={25} />
//               </Link>
//               <p className='capitalize'>Cart</p>

//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Navbar;