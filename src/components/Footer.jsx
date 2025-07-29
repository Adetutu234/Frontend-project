import React from 'react'
import Button from './Button'
import {Envelope,Phone,FacebookLogo,TwitterLogo,InstagramLogo,YoutubeLogo,AppleLogo,GooglePlayLogo,WhatsappLogo} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div>
      {/* top */}
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-0 bg-black/78 text-white p-5 items-center'>
        <div className='flex gap-3'>
          <Envelope size={25} />
          <div className='space-y-2'>
            <p className='uppercase text-sm font-bold'>email support</p>
            <p className='text-sm'>help@fashionhub.com</p>
          </div>
        </div>
        <div className='flex gap-3'>
            <Phone size={25} />
          <div className='space-y-2'>
            <p className='uppercase text-sm font-bold'>phone support</p>
            <p className='text-sm'>07012334560, 02034567854</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <WhatsappLogo size={25} />
          <div className='space-y-2'>
            <p className='uppercase text-sm font-bold'>whatsapp</p>
            <p className='text-sm'>09067456897</p>
          </div>
        </div>
        <div>
          <div>
            <p className='uppercase text-sm font-bold'>get latest deal</p>
            <p className='text-sm'>Our best promotions sent to your inbox.</p>
          </div>
        </div>
        <div>
          <div className='flex'>
            <input type="text" placeholder='Email Address' className='bg-white rounded-md text-black/80 w-40 rounded-r-none'/>
            <Button text={'Subscribe'} className={'px-4 py-1 bg-blue-700 text-white w-fit rounded-md rounded-l-none'}/>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className='grid lg:grid-cols-7 grid-cols-3 gap-3 lg:gap-0 p-12 bg-black/90 text-white'>
        <div className='space-y-2'>
          <h1 className='font-semibold text-sm'>ABOUT FHUB</h1>
          <ul className='text-xs space-y-2'>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Blog</li>
            <li>Forum</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      
        <div className='space-y-2'>
          <h1 className='font-semibold text-sm'>PAYMENT</h1>
          <ul className='text-xs space-y-2'>
              <li>ApplePay</li>
              <li>Wallet</li>
              <li>Verve</li>
              <li>Mastercard</li>
              <li>Visa</li>
          </ul>
        </div>

        <div className='space-y-2'>
          <h1 className='font-semibold text-sm'>BUYING ON FHUB</h1>
          <ul className='text-xs space-y-2'>
            <li>Buyer Safety Centre</li>
            <li>FAQs</li>
            <li>Delivery</li>
            <li>Return Policy</li>
            <li>Bulk Purchase</li>
          </ul>
        </div>
        <div className='space-y-2'>
          <h1 className='font-semibold text-sm'>MORE INFO</h1>
          <ul className='text-xs space-y-2'>
            <li>Site Map</li>
            <li>Track My Order</li>
            <li>Privacy Policy</li>
            <li>Authentic Items Policy</li>
          </ul>
        </div>
        <div className='space-y-2'>
          <h1 className='font-semibold text-sm'>MAKE MONEY ON FHUB</h1>
          <p className='text-xs'>Become a FashionHub <br /> affiliate</p>
        </div>
        <div className='space-y-8 col-span-2 pl-5'>
          <div className='flex gap-10'>
            <div className='flex gap-3'>
              <AppleLogo size={32} />
              <div className='s'>
                <p className='text-xs'>Download on</p>
                <p className='font-semiold'>App Store</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <GooglePlayLogo size={32} />
              <div className='s'>
                <p className='text-xs'>Download on</p>
                <p className='font-semibold'>Google Play</p>
              </div>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='font-semibold '>CONNECT WITH US</p>
            <div className='flex gap-5'>
              <FacebookLogo size={25} />
              <TwitterLogo size={25} />
              <InstagramLogo size={25} />
              <YoutubeLogo size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
