import Button from '../components/Button.jsx'
import { Lathe } from '@react-three/drei'
import React, { useState } from 'react'
import Globe from 'react-globe.gl'

const About = () => {

    const [hasCopied, sethasCopied] = useState()

    const handleCopy = () =>{
        navigator.clipboard.writeText('khadraouiibrahim@gmail.com') // add your email here

        sethasCopied(true)

        setTimeout(() => {
            sethasCopied(false)
            
        }, 2000);
    } 

  return (
    <section className='c-space my-20' id='about'>

          <p className='head-text mb-10'> About Me. </p>
        
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            
            {/* grid 1 */}
            <div className='col-span-1 xl:row-span-3 '>
                <div className='grid-container '>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-container'/>
                    <div>
                        <p className='grid-headtext'> Hi, I'm Ibrahim </p>
                        <p className='grid-subtext'> I am an Embedded System Engineer capable of translating an idea on a whiteboard into a reliable working prototype, covering both hardware and software aspects. I am a great problem solver with a keen ability to manage and execute projects from concept to completion.</p>
                    </div>

                </div>

            </div>
            {/* grid 2 */}
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-container'/>
                    <div>
                        <p className='grid-headtext'> Tech Stack </p>
                        <p className='grid-subtext'> I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications</p>
                    </div>

                </div>

            </div>
            {/* grid 3 */}
            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>

                <div className='flex items-center justify-center'>
                    <Globe
                    height={326} 
                    width={326}
                    backgroundColor='rgba(0,0,0,0)'
                    backgroundImageOpacity={0.5}
                    showAtmosphere={true}
                    showGraticules
                    // globeImageUrl={'/assets/earth-night.jpg'}
                    globeImageUrl={'/assets/earth-dark.jpg'}
                    
                    />
                </div>
                  
                    <div >
                        <p className='grid-headtext'>
                            I work remotly across most tinezones
                        </p>
                        <p className='grid-subtext'>
                            I'm based in Abudhabi, UAE
                        </p>

                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>

                    </div>

                </div>

              

            </div>

            {/* grid 4 */}
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container  '>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-container' />
                    <div >
                    
                        <p className='grid-headtext'> My Passion for Coding </p>
                        <p className='grid-subtext'>I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
                
                    </div>
                </div>

            </div>

            {/* grid 5 */}

            <div className='xl:col-span-1 xl:row-span-2 ' >
                <div className='grid-container'>
                    
                    <img src="/assets/grid4.png" alt="grid-4" className=' w-full md:h-[126px] xl:h-[200px]  sm:h-[276px] h-fit object-cover sm:oject-top'/>
                   
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact me</p>

                        <div className='copy-container' onClick={handleCopy}>

                            <img src= {hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                            <p className='text-xl font-medium text-gray_gradient text-white'> khadraouiibrahim@gmail.com  </p>

                        </div>
                        
                    </div>

                </div>

            </div>


        </div>
    </section>
  )
}

export default About