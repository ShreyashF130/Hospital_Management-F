import React from 'react'
import spec1 from '../assets/spec1.png'
import spec2 from '../assets/spec2.png'
import spec3 from '../assets/spec3.png'
import spec4 from '../assets/spec4.png'
import spec5 from '../assets/spec5.jpg'
import {Link} from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col flex-wrap items-center mt-16'>
      <h1 className='font-bold text-3xl'>Find by Speciality</h1>
      <p className='mt-6 text-center'>Simply browse through our extensive list of trusted doctors,schedule <br/> your appointement hassle-free</p>
    <section className='flex gap-7 mt-16 flex-wrap'>
       
<div><img className='h-[130px]' src={spec1} alt="" />
        <p className='text-center'>Hepatologist</p>
        </div>
        <div><img className='h-[130px]' src={spec2} alt="" />
        <p className='text-center'>Cardiologist</p>
        </div>
        <div><img className='h-[130px]' src={spec3} alt="" />
        <p className='text-center'>Pediatrician</p>
        </div>
        <div><img className='h-[130px]' src={spec4} alt="" />
        <p className='text-center'>General</p>
        </div>
        <div><img className='h-[130px] rounded-full' src={spec5} alt="" />
        <p className='text-center'>Gynecologist</p>
        </div>
        </section>
      
    </div>
  )
}

export default SpecialityMenu
