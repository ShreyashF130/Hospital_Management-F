import React from 'react'
import doc1 from '../assets/doctor1.png'
import profile_pic from '../assets/profile_pic.jpg'
import logo from '../assets/logo.avif'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import arrow_head from '../assets/arrow_head.png'


const Navbar = () => {
    const navigate = useNavigate();
    const[showMenu,setShowMenu] = useState(false)
    const [token,setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='h-16 cursor-pointer' src={logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
           <li className='py-1 '>Home</li>
           <hr className='border-none outline-none h-0.5  bg-blue-500 w-3/5 m-auto hidden'/>
        </NavLink >
        <NavLink to='/doctors'>
           <li className='py-1 '>All Doctors</li>
           <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
           <li className='py-1 '>About</li>
           <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='contact'>
           <li className='py-1 '>Contact</li>
           <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
           token
           ?<div className='flex justify-center items-center gap-2.5 group relative'>
            <img className='h-10 w-10 border-0 rounded-4xl ' src={profile_pic} alt="" />
            <img className='h-3 -rotate-90 opacity-75' src={arrow_head} alt="" />
            <div className='absolute top-0 right-24px pt-[80px] text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>
           </div> 
           :<button onClick={()=>navigate('login')} className='bg-blue-600 text-white p-3.5 border-0 rounded-4xl md:block w-[170px]'>Create Acccount</button>
        }
        {/* <button className='bg-blue-600 text-white p-3.5 border-0 rounded-4xl md:block'>Create Acccount</button> */}
      </div>
    </div>
  )
}

export default Navbar
