import React from 'react'
 import doc1 from '../assets/doctor1.png'
 import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
    const navigate=useNavigate();
  return (
    <div className='mt-20 flex flex-col items-center'>
        <h1 className='font-bold text-3xl'>Top Doctors to book</h1>
        <p className='mt-4'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='flex gap-4 flex-wrap mt-3.5'>
      <div className='mt-4  rounded-[20px]  hover:-translate-y-[10px] transition-all duration-500 '>
        {/* first block */}
        <div>
        <img className='bg-blue-50 border-0 rounded-t-[20px] h-[290px] w-[240px] ' src={doc1} alt="" />
        <div className='flex items-center gap-2'>
        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
        <p className='text-green-600 mt-1'>Available</p>
        </div>
        <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
        <p className='text-gray-600 mb-1.5'>General Physician</p>
        </div>

      </div>


      <div className='mt-4 border-0  rounded-full hover:-translate-y-[10px] transition-all duration-500  '>
        {/* first block */}
        <div>
        <img className='bg-blue-50 border-0 rounded-t-[20px] h-[290px] w-[240px] ' src={doc1} alt="" />
        <div className='flex items-center gap-2'>
        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
        <p className='text-green-600 mt-1'>Available</p>
        </div>
        <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
        <p className='text-gray-600 mb-1.5'>General Physician</p>
        </div>

      </div>



      <div className='mt-4  rounded-[20px] hover:-translate-y-[10px] transition-all duration-500  '>
        {/* first block */}
        <div>
        <img className='bg-blue-50 border-0 rounded-t-[20px] h-[290px] w-[240px] ' src={doc1} alt="" />
        <div className='flex items-center gap-2'>
        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
        <p className='text-green-600 mt-1'>Available</p>
        </div>
        <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
        <p className='text-gray-600 mb-1.5'>General Physician</p>
        </div>

      </div>
      

       

      <div className='mt-4 rounded-[20px] hover:-translate-y-[10px] transition-all duration-500 '>
        {/* first block */}
        <div>
        <img className='bg-blue-50 border-0 rounded-t-[20px] h-[290px] w-[240px] ' src={doc1} alt="" />
        <div className='flex items-center gap-2'>
        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
        <p className='text-green-600 mt-1'>Available</p>
        </div>
        <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
        <p className='text-gray-600 mb-1.5'>General Physician</p>
        </div>

      </div>
      </div>
      <div className='flex gap-4 mt-3.5 flex-wrap'>
      <div className='cursor-pointer mt-4 border-0 rounded-[12px] hover:-translate-y-[10px] transition-all duration-500'>
        {/* first block */}
        <div>
        <img className='bg-blue-50 border-0 rounded-t-[20px] h-[290px] w-[240px] ' src={doc1} alt="" />
        <div className='flex items-center gap-2'>
        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
        <p className='text-green-600 mt-1'>Available</p>
        </div>
        <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
        <p className='text-gray-600 mb-1.5'>General Physician</p>
        </div>

      </div>
      



      <div className='mt-4  rounded-[20px] hover:-translate-y-[10px] transition-all duration-500'>
        {/* first block */}
        <div>
        <img className='bg-blue-50 border-0 rounded-t-[20px] h-[290px] w-[240px] ' src={doc1} alt="" />
        <div className='flex items-center gap-2'>
        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
        <p className='text-green-600 mt-1'>Available</p>
        </div>
        <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
        <p className='text-gray-600 mb-1.5'>General Physician</p>
        </div>

      </div>

      <div className='mt-4 rounded-[20px]  hover:-translate-y-[10px] transition-all duration-500'>
        {/* first block */}
        <div>
        <img className='bg-blue-50 border-0 rounded-t-[20px] h-[290px] w-[240px] ' src={doc1} alt="" />
        <div className='flex items-center gap-2'>
        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
        <p className='text-green-600 mt-1'>Available</p>
        </div>
        <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
        <p className='text-gray-600 mb-1.5'>General Physician</p>
        </div>

      </div>

      <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 '>
        {/* first block */}
        <div>
        <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[290px] w-[240px] ' src={doc1} alt="" />
        <div className='flex items-center gap-2'>
        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
        <p className='text-green-600 mt-1'>Available</p>
        </div>
        <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
        <p className='text-gray-600 mb-1.5'>General Physician</p>
        </div>
        </div>
      </div>

      <button className='mt-10 bg-blue-100 text-blue-700 font-bold p-2 px-5 border-0 rounded-[10px]' onClick={()=>navigate("/doctors")}>More</button>
      </div>

   
  )
}

export default TopDoctors
