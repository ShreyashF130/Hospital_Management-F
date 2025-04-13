import React from 'react'
import pointingdoc from '../assets/pointingdoc.png'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
    const navigate=useNavigate();
  return (
    <div className='flex bg-gradient-to-r from-violet-600 to-indigo-600 px-6 sm:px-10 md:px-14 lg:px-12 my-10 md:mx-10 lg border-0 rounded-xl'>
      {/* left side */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
       <div>
        <p className='text-white text-4xl font-medium'>Book Appointment</p>
        <p className='text-white text-4xl font-medium pt-2.5'>With 100+ Trusted Doctors</p>
       </div>
       <div>
        <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-white mt-7 p-2.5 px-6 border-0 rounded-2xl text-bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold'>
          Create Account
        </button>
       </div>
      </div>

      {/* right side */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-[460px] h-[430px] absolute bottom-0 right-0 max-w-md' src={pointingdoc} alt="" />
      </div>
    </div>
  )
}

export default Banner
