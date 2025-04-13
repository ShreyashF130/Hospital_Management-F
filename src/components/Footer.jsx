import React from 'react'
import logo from '../assets/logo.avif'
const Footer = () => {
  return (
    <div>
    <div className='flex justify-between border-b-2 flex-wrap pb-2.5'>
      {/* div1 */}

      
        <div className='w-[500px] '>
            <div className='flex items-center'>
        <img className='h-[60px]' src={logo} alt="" />
        <span className='font-bold text-xl'>HealthCure</span></div>
        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Quas odio aliquid
            exercitationem iste, odit nostrum
            dolorem laboriosam reprehenderit
            officia alias voluptatibus nemo,
            sequi unde ducimus.</p>
        </div>
      

      {/* div2 */}

      <div className=''>
        <h2 className='text-gray-800 font-bold text-[20px]'>COMPANY</h2>
        <ul>
            <li className='font-medium text-gray-700'>Home</li>
            <li className='font-medium text-gray-700' >About us</li>
            <li className='font-medium text-gray-700'>Contact us</li>
            <li className='font-medium text-gray-700'>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <h2 className='text-gray-800 font-bold text-[20px]'>GET IN TOUCH</h2>
        <p className='font-medium text-gray-700'>+1-212-3465728</p>
        <p className='font-medium text-gray-700'>healthcure@gmail.com</p>
      </div>
    </div>
    <p className='text-center pt-2.5 pb-2.5'>Copyright 2025@ Healthcure - All Rights Reserved</p>
    </div>
  )
}

export default Footer
