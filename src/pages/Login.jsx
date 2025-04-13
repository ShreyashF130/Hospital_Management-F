import React from 'react'
import { useState } from 'react'

const Login = () => {
  const[state,setState] = useState('Sign up')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const[name,setName]=useState('') 

  const submitHandler = async (event)=>
    {
      event.preventDefault()
    }
  return (
    <form className=''>
      <div className='flex flex-col justify-center gap-3 m-auto items-start p-8 w-[350px] border  border-gray-300 rounded-xl text-sm shadow-lg'>

        <p className='text-xl font-medium'>{state === 'Sign up'?"Create Accout":"Login"}</p>
        <p className='text-gray-700'>Please {state === 'Sign up'?"sign up":"log in"} to book appointment</p>
        {
          state==="Sign up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-gray-400 rounded w-full p-2 mt-1 ' type="text" onChange={(e)=> setName(e.target.name)} value={name} required/>
          </div>
        }
      
      <div className='w-full'>
        <p className='text-gray-800'>Email</p>
        <input className='border border-gray-400 rounded-[6px] w-full p-2' type="text" onChange={(e)=>setEmail(e.target.name)} value={email} required/>
      </div>
      <div>
        <p className='text-gray-800'>Password</p>
        <input className='border border-gray-400 rounded-[6px] w-full p-2' type="text" onChange={(e)=>setPassword(e.target.name)} value={password} required/>
      </div>
      <div>
        <button className='bg-gradient-to-r from-violet-600 to-indigo-600 p-2.5 text-white bordder-0 rounded-[5px] px-6 w-full '>{state === 'Sign up'?"Create Accout":"Login"}</button>
        {
          state==="Sign up"?<p>Already have an account?<span onClick={()=>setState('Login')} className='text-blue-600 cursor-pointer'>Login here</span></p>: <p>Create a new Account?<span onClick={()=>setState('Sign up')} className='text-blue-700 cursor-pointer'>click here</span> </p>
        }
      </div>
      </div>
    </form>
  )
}

export default Login