import React from 'react'
// import {useParams} from 'react-router-dom'
// import AppContext from '../context/AppContext'
import { useContext } from 'react'
import { useState } from 'react'
import doc1 from '../assets/doctor1.png'
import doc2 from '../assets/doctor2.png'
import doc3 from '../assets/doctor3.png'
import doc4 from '../assets/doctor4.png'
import doc5 from '../assets/doctor5.png'
const doctors = () => {

  const [selected,setSelected]=useState("doc")
  const cards=
  {
General_Physician:
[
  {id:"General_Physician1",name:"gp1"},
  {id:"General_Physician2",name:"gp2"},
],
Gynecologist:
[
  {id:"Gynecologist1",name:"Gy1"},
  {id:"Gynecologist2",name:"Gy2"},
],
Dermatologist:
[
  {id:"Dermatologist1",name:"De1"},
  {id:"Dermatologist2",name:"De2"},
],
Pediatrician:
[
  {id:"Pediatrician1", name:"Pe1"},
  {id:"Pediatrician2" , name:"Pe2"},
],
Neurologist:
[
  {id:"Neurologist1",name:"Ne1"},
  {id:"Neurologist2",name:"Ne2"},
],
Gastroentrologist:
[
  {id:"Gastroentrologist1",name:"Ga1"},
  {id:"Gastroentrologist2",name:"Ga2"},
]

  };


    // const {doctors} = useContext(AppContext)
  return (
    <div className='flex mb-12'>
        <div className=''>
      <p className='text-center font-medium text-[18px]'>Browse through the doctors specialist:</p>
      <div className='flex flex-col justify-center items-center mt-5 gap-8 '>
        <p onClick={()=>setSelected("General_Physician")} className={` cursor-pointer border text-center h-[35px] ${selected==="General_Physician"?"bg-blue-50":"bg-white"} w-[200px] rounded-[10px]`}>General Physician</p>
        <p onClick={()=>setSelected("Gynecologist")} className={`cursor-pointer  border text-center h-[35px]  w-[200px] ${selected==="Gynecologist"?"bg-blue-50":"bg-white"} rounded-[10px] `}>Gynecologist</p>
        <p onClick={()=>setSelected("Dermatologist")} className={`cursor-pointer  border text-center h-[35px] ${selected==="Dermatologist"?"bg-blue-50":"bg-white"} w-[200px] rounded-[10px]` }>Dermatologist</p>
        <p onClick={()=>setSelected("Pediatrician")} className={`cursor-pointer  border text-center h-[35px] ${selected==="Pediatrician"?"bg-blue-50":"bg-white"} w-[200px] rounded-[10px]  bg-blue-50`}>Pediatrician</p>
        <p onClick={()=>setSelected("Neurologist")} className={`cursor-pointer  border text-center h-[35px] ${selected==="Neurologist"?"bg-blue-50":"bg-white"} w-[200px] rounded-[10px]  bg-blue-50`}>Neurologist</p>
        <p onClick={()=>setSelected("Gastroentrologist")} className={`cursor-pointer  order text-center h-[35px] ${selected==="Gastroentrologist"?"bg-blue-50":"bg-white"} w-[200px] rounded-[10px] border `}>Gastroentrologist</p>
      </div>
      </div>
      <div className='w-[900px] '>
        <div className='flex flex-wrap justify-center items-center gap-3'> 
          {selected==="General_Physician" && (<>
        <div className='mt-4  rounded-[12px]  hover:-translate-y-[10px] transition-all duration-500 i' id='General_Physician1'>
                {/* first block */}
                <div>
                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc1} alt="" />
                <div className='flex items-center gap-2'>
                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                <p className='text-green-600 mt-1'>Available</p>
                </div>
                <p className='font-bold text-[20px] mt-1'>Dr.Richard James</p>
                <p className='text-gray-600 mb-1.5'>General Physician</p>
                </div>
                </div>


                <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 ' id='General_Physician2'>
                        {/* first block */}
                        <div>
                        <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px]' src={doc2} alt="" />
                        <div className='flex items-center gap-2'>
                        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                        <p className='text-green-600 mt-1'>Available</p>
                        </div>
                        <p className='font-bold text-[20px] mt-1'>Dr.Namita Singh</p>
                        <p className='text-gray-600 mb-1.5'>General Physician</p>
                        </div>
                        </div>
                        </>
                        )}

{selected==="Gynecologist" && (<>
                        <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 ' id='Gynecologist1'>
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc2} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr.Mithali Shah</p>
                                <p className='text-gray-600 mb-1.5'>Gynecologist</p>
                                </div>
                                </div>

                                <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 ' id='Gynecologist2' >
                                        {/* first block */}
                                        <div>
                                        <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc3} alt="" />
                                        <div className='flex items-center gap-2'>
                                        <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                        <p className='text-green-600 mt-1'>Available</p>
                                        </div>
                                        <p className='font-bold text-[20px] mt-1'>Dr.Meena Mehta</p>
                                        <p className='text-gray-600 mb-1.5'>Gynecologist</p>
                  </div>
                                        </div>
                                        </>
                                      )}
                                        </div>
                                    
                   {/* row2                      */}
                   <div className='flex flex-wrap justify-center items-center gap-3'>
                   {selected==="Dermatologist" && (<>
                   <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 ' id='Dermatologist1' >
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc3} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr.Anjali Kumari</p>
                                <p className='text-gray-600 mb-1.5'>Dermatologist</p>
                                </div>
                                </div>

                      <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 ' id='Dermatologist2'>
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc4} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr.Max Lois</p>
                                 <p className='text-gray-600 mb-1.5'>Dermatologist</p>
                                </div>
                                </div>
                                </>)}
                                {selected==="Pediatrician" && (<>
                         <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 'id='Pediatrician1' >
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc4} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr.Peter Stoke</p>
                                <p className='text-gray-600 mb-1.5'>Pediatrician</p>
                                </div>
                                </div>


                       <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 ' id='Pediatrician2'>
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc5} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr.Ronaldino James</p>
                                <p className='text-gray-600 mb-1.5'>Pediatrician</p>
                                </div>
                                </div></>)}                             
                   </div>

                   {/* row3 */}
                   <div className='flex flex-wrap justify-center items-center gap-3'>
                   {selected==="Neurologist" && (<>
                   <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 'id='Neurologist1'>
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc2} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr.Smita Patel</p>
                                <p className='text-gray-600 mb-1.5'>Neurologist</p>
                                </div>
                                </div>  

               <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 'id='Neurologist2'>
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc5} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr.Karl Pan</p>
                                <p className='text-gray-600 mb-1.5'>Neurologist</p>
                                </div>
                                </div>  </>)}
                                {selected==="Gastroentrologist" && (<>
              <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 ' id='Gastroentrologist1'>
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc3} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr.Natasha Bolt</p>
                                <p className='text-gray-600 mb-1.5'>Gastroentrologist</p>
                                </div>
                                </div>  

           <div className='mt-4  rounded-[12px] hover:-translate-y-[10px] transition-all duration-500 'id='Gastroentrologist2'>
                                {/* first block */}
                                <div>
                                <img className= 'bg-blue-50 border-0 rounded-t-[20px] h-[200px] w-[180px] ' src={doc4} alt="" />
                                <div className='flex items-center gap-2'>
                                <div className='bg-green-600 h-2 w-2 border-0 rounded-full'></div>
                                <p className='text-green-600 mt-1'>Available</p>
                                </div>
                                <p className='font-bold text-[20px] mt-1'>Dr. James Parker</p>
                                <p className='text-gray-600 mb-1.5'>Gastroentrologist</p>
                                </div>
                                </div> </>)}  
                                </div>                                                             
      </div>
    </div>
  )
}

export default doctors
