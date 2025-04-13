import React from 'react'
import circle01 from '../assets/circle01.jpg'
import circle2 from '../assets/circle2.jpg'
import circle3 from '../assets/circle3.jpg'
import circle4 from '../assets/circle4.jpg'
import arrow from '../assets/arrow.png'
import threedoc2 from '../assets/threedoc2.png'
const Header = () => {
  return (
    <div className='flex bg-gradient-to-r from-violet-600 to-indigo-600 justify-center items-center border-0 rounded-xl flex-wrap '>
      {/* ---------- Left Side ---------- */}
      <div  className='h-400px w-500px  flex-col justify-center items-center'>
        <p className='text-white text-4xl font-bold '>Book Appointment <br/>
         with Trusted Doctors</p>
         <div className=' mt-7'>
         <div className='flex'>
         <img className='h-10 w-10 border-0 rounded-full relative hover:scale-120  transition-all duration-300 hover:z-100' src={circle01} alt="" />
         <img className='h-10 w-10 border-0 rounded-full relative right-3 hover:scale-120 transition-all duration-300 hover:z-100' src={circle2} alt="" />
         <img className='h-10 w-10 border-0 rounded-full relative right-5 hover:scale-120 transition-all duration-300 hover:z-100' src={circle3} alt="" />
         <img className='h-10 w-10 border-0 rounded-full relative right-7.5 hover:scale-120 transition-all duration-300 hover:z-100' src={circle4} alt="" />
         <p className='text-white'>Simply browse through our extensive list of trusted doctors,
            <br/>
            schedule your appointement hassle-free.
         </p>
         </div>
         
         </div>

         <a className='flex items-center mt-7 font-medium bg-white w-[200px] justify-center border-0 rounded-2xl hover:scale-105 transition-all duration-300' href="#speciality">Book appointement
            <img className='h-10' src={arrow} alt="" />
         </a>
         
         </div>

      {/* ----------- Right Side -------------- */}
      
      <div className=''>
      <img src={threedoc2} alt="" />
      </div>
    </div>
  )
}

export default Header