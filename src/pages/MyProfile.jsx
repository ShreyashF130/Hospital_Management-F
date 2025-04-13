import React from 'react'
import profile_pic from '../assets/profile_pic.jpg'
import { useState } from 'react';
const MyProfile = () => {
  const[userData,setUserData]=useState({
  name:"Sam Theory",
  image:profile_pic,
  Email:"medcure@gmail.com",
  Phone_no:'91-234-6545',
  Address:
  {
    line1:"Sone B",
    line2:"NITP"
  },
  gender:"Male",
  age:20
});
const[isEdit,setIsEdit] = useState(false);
  return (
    <div>
       <img src={userData.image} alt="" />

{
  isEdit?<input type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} />:<p> {userData.name}</p>
}

<hr />
<div>
  <p></p>
  <div>
    <p className='font-bold text-gray-700'> Email Id</p>
    <p>{userData.Email}</p>
    <p className='font-bold text-gray-700'> Phone:</p>
    {
  isEdit?<input type="text" value={userData.Phone_no} onChange={e=>setUserData(prev=>({...prev,Phone_no:e.target.value}))} />:<p> {userData.Phone_no}</p>
}

<p className='font-bold text-gray-700'>Address:</p>
{
  isEdit?
  <p><input type="text" onChange={(e)=>setUserData(prev=>({...prev,Address:{...prev.Address,line1:e.target.value}}))} value={userData.Address.line1}/>
  <input type="text"  onChange={(e)=>setUserData(prev=>({...prev,Address:{...prev.Address,line2:e.target.value}}))} value={userData.Address.line2} />
  </p>:
  <p>
    {userData.Address.line1}
    {userData.Address.line2}
  </p>
}

  </div>
</div>
<div>
  <p>BASIC INFORMATION</p>
  <div>
    <p className='font-bold text-gray-700'>Gender:</p>
    {
      isEdit?<select onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>:
      <p>{userData.gender}</p>
    }

   <div className='mt-3.5'>
    {
      isEdit?
      <button onClick={()=>setIsEdit(false)} className='  cursor-pointer border px-3 bg-black text-white py-1 hover:bg-white hover:text-black transition-all duration-500'>Save Information</button>
     : <button onClick={()=>setIsEdit(true)} className='cursor-pointer border px-3 bg-black text-white py-1 hover:bg-white hover:text-black transition-all duration-500'>Edit</button>
    }
   </div>
  </div>
</div>

    </div>
  )
}

export default MyProfile