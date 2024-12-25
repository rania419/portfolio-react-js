import React from 'react'

const Footer = () => {
  return (
    <section className='c-space my-20'>

      <div className='flex justify-between display-center items-center flex-wrap'>
        
        <div className='flex gap-2'>
          <p  className='text-white-500 font-light '>Terms & Conditions</p>
          <div className='border-[0.5px] border-black-200'></div>
          <p className='text-white-500 font-light'>Privacy Policy</p>   
        </div>


        <div className='flex gap-3'>
          <img src="/assets/github.svg" className='p-3 social-icon' alt="instagram" />
          <img src="/assets/twitter.svg" className='p-3 social-icon' alt="instagram" />
          <img src="/assets/instagram.svg" className='p-3 social-icon' alt="instagram" />

        </div>

        <p  className='text-white-500 font-light'>© 2024 Adrian Hajdin. All rights reserved.</p>
        

      </div>
      
      
    </section>

  )
}

export default Footer