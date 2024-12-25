import React from 'react'
import Navbar from './sections/navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    // <main className='bg-cover relative max-w-7xl mx-auto text-white ' style={{ backgroundImage: 'url(/assets/Background.png)' }}>
   
    // <div className='absolute inset-0 bg-cover bg-center z-10' style={{ backgroundImage: 'url(/assets/Abstract Design.png)' }}>
    //   <Navbar />
    //   <Hero />

    // </div>
      
    // </main>


    <main >
      {/* First Background */}
      <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: 'url(/assets/Background.png)' }}></div>

      /* Second Background */
      <div className='absolute inset-0 bg-cover md:bg-cover lg:bg-cover xl:bg-contain bg-no-repeat bg-center z-10' style={{ backgroundImage: 'url(/assets/Abstract-design.png)'}}></div>

      {/* Content */}
      <div className='relative z-20 mx-auto '>
        <Navbar/>
        <Hero />
      
      </div>

      <div  className="relative max-w-7xl mx-auto    ">
        <About />
        <Projects />
        {/* < Testimonials/> */}
        < Experience/>
        <Contact />
        < Footer/>
      </div>

     

     
   
    </main>
    
  )
}

export default App

