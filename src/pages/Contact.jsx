import React from 'react'
import contactimg from '../assets/cntactpage.jpg'
const Contact = () => {
  return (
    <div className=''>
      <h1 className='text-center text-3xl mb-8'>Contact <span className='font-bold'>Us</span></h1>
      <div className='flex gap-10 justify-center flex-wrap'>
      <div className='flex'>
     
<img src={contactimg} alt="" />
     </div>
     <div>
      <h2 className='text-xl text-gray-800 mb-6'>OUR OFFICE</h2>

      <p>54702 William Stone</p>
      <p className='mb-6'>Washington,USA</p>

      <p>Tel:14-3525-3435</p>
      <p>Email:medcure@gmail.com</p>

      <p className='text-[20px] mt-5'>Careers at MEDCURE</p>
      <p className='mb-8'>Learn more about our team and job openings</p>
      <button className='p-3 bg-black border border-black text-white hover:bg-white hover:text-black transition-all duration-500'>Explore Jobs</button>
     </div>
     </div>


     </div>
    
  )
}

export default Contact
