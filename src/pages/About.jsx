import React from 'react'
import aboutus from '../assets/aboutus2.jpg'
const About = () => {
  return (
    <div>
      <h1 className='text-2xl text-center mb-16'>ABOUT <span className='font-bold'>US</span></h1>
      <div className='flex flex-wrap gap-4 '>
    
      <div>
          <img src={aboutus} alt="" />
      </div>
      <div className='w-[550px] mt-3 flex flex-col justify-center'>
       <p className='mb-10'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Possimus dolorem quaerat voluptate suscipit rem, cumque saepe
          aut illum error odit aperiam voluptas dolor quae velit itaque 
          iusto quod assumenda pariatur! Minima omnis, soluta aperiam non. </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae libero labore adipisci, recusandae deleniti 
            molestias eius exercitationem et numquam soluta veritatis, 
            sunt, corporis itaque atque?</p>

            <h2 className='font-bold my-6'>OUR VISION</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Earum quisquam distinctio beatae suscipit tenetur id nobis 
              magni quam quis atque!</p>
      </div>
      
      <div><h1 className='font-medium text-[20px] mb-4 mt-3'>WHY CHOOSE US</h1></div>
    <div className='flex flex-wrap'>
      <div className='my-4'>
      
        <div className='border rounded-[4px] border-gray-400 h-[270px] w-[300px] p-[20px] flex flex-col juststify-center'>
          <h2 className='text-[19px] text-gray-800 mb-5'>Efficiency</h2>
          <p className='text-[16px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi, nesciunt at distinctio dignissimos, voluptas ut 
            rerum enim similique culpa cum, eos non a earum vero ipsam 
            corporis laboriosam unde autem.</p>
        </div>
      </div>

      <div className='my-4'>
    
        <div className='border rounded-[4px] border-gray-400 h-[270px] w-[300px] p-[20px] flex flex-col juststify-center'>
          <h2 className='text-[19px] text-gray-800 mb-5'>Convenience</h2>
          <p className='text-[16px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi, nesciunt at distinctio dignissimos, voluptas ut 
            rerum enim similique culpa cum, eos non a earum vero ipsam 
            corporis laboriosam unde autem.</p>
        </div>
      </div>

      <div className='my-4'>
     
        <div className='border rounded-[4px] border-gray-400 h-[270px] w-[300px] p-[20px] flex flex-col juststify-center'>
          <h2 className='text-[19px] text-gray-800 mb-5'>Personalisation</h2>
          <p className='text-[16px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi, nesciunt at distinctio dignissimos, voluptas ut 
            rerum enim similique culpa cum, eos non a earum vero ipsam 
            corporis laboriosam unde autem.</p>
        </div>
      </div>

      <div className='my-4'>
     
        <div className='border rounded-[4px] border-gray-400 h-[270px] w-[300px] p-[20px] flex flex-col juststify-center'>
          <h2 className='text-[19px] text-gray-800 mb-5'>Relaible</h2>
          <p className='text-[16px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi, nesciunt at distinctio dignissimos, voluptas ut 
            rerum enim similique culpa cum, eos non a earum vero ipsam 
            corporis laboriosam unde autem.</p>
        </div>
      </div>


      

      </div>
     
      </div>
    </div>
  )
}

export default About
