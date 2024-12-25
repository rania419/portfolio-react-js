import React from 'react'
import { clientReviews } from '../constants'
import { useState } from 'react'

const Testimonials = () => {
    const clientR = clientReviews[0]
    

    

  return (
    // section container
    <section className='c-space my-20'>
        {/* section title */}
        <p className='head-text'>Hear from My Clients</p>

        {/* client review container */}
        <div className='client-container '> {/* grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full */}

                {clientReviews.map((client) => (

                    <div key={`${client.id}`} className=' client-review '>
                        
                        <p className='text-white-800 font-light'>{client.review}</p>
                        
                        <div className='client-content'>

                            <div className='flex  gap-3'>

                        
                                    <img src={client.img} alt="client image" className='w-12 h-12 rounded-full ' />
                                
                                    <div className='flex flex-col'>
                                        <span className='font-semibold text-white-800'>{client.name}</span>
                                        <span className='text-white-500 md:text-base font-light text-sm'>{client.position}</span>
                                    </div>
                        


                            </div>

                            <div className="flex self-end items-center gap-2">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                                ))}
                            </div>
                
                        </div> 
                    </div>
                
                ))}
        </div>
    </section>
  )
}

export default Testimonials