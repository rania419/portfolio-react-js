import React, { Suspense }  from 'react'
import { myProjects } from '../constants'
import { useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import VR from '../components/VR'

import CanvasLoader from '../components/CanvasLoader'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Computer from '../components/Computer'

const Projects = () => {
    const currenProject = myProjects[0]
    
    const [selectedProjectIndex, setselectedProjectIndex] = useState(0)

    const projectCount = myProjects.length

    const handleNavigation = (direction) => {
        
        setselectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            } else {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            }
        })

    }

  return (
    <section className='c-space my-20'>

        {/* section title */}
        <p className='head-text'> My Work. </p>
            
        {/* grid container */}
         <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'> {/*client-container */}
            
            {/* Project spotlight section */}
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>

                    {/* spotlight image Background */}
                    <div className='absolute top-0 right-0 '>
                        <img src={myProjects[selectedProjectIndex].spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl'/>
                    </div>
                    
                    {/* logo project */}
                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={myProjects[selectedProjectIndex].logoStyle}>
                        <img className='w-10 h-10' src={myProjects[selectedProjectIndex].logo} alt="logo" />
                    </div>

                    {/* textt container */}
                    <div className='flex flex-col gap-5 text-white-600 my-5'>

                        <p className='text-white text-2xl font-semibold animatedText'>{currenProject.title}</p>
                        <p className='animatedText'>{myProjects[selectedProjectIndex].desc}</p>
                        <p className='animatedText'>{myProjects[selectedProjectIndex].subdesc}</p>
                    </div>
                   
                    {/* arrow = logos */}
                    <div className='flex items-center justify-between flex-wrap gap-5'>
                        
                        <div className='flex items-center gap-3'>
                            {currenProject.tags.map((tag, index) => (
                                <div key={index} className='tech-logo'>
                                    <img src={tag.path}></img>
                                </div>    
                            ))}
                        </div> 

                        <a className='flex items-center gap-2 cursor-pointer text-white-600' target="" href={currenProject.href} >
                            <p>Check Live SIte</p>
                            <img src="/assets/arrow-up.png"  className='w-3 h-3' alt='arrow' />
                        </a>

                    </div>

                    


                     {/* buttons */}
                     <div className='flex justify-between items-center mt-7 '>

                        <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left-arrow"  className='h-4 w-4'/>
                        </button>
                        
                        <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="left-arrow"  className='h-4 w-4'/>
                        </button>

                     </div>
                      
            </div>

            <div  className='border border-black-300  bg-black-200 rounded-lg h-96 md:h-full'>
                <Canvas>
                    <ambientLight intensity={6}/>
                    <directionalLight position={[10, 10, 5]} intensity={1}/>

                    <Center>
                    <Suspense fallback={<CanvasLoader />}>
                        <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                        <Computer texture={currenProject.texture} />
                        {/* <VR /> */}
                        </group>
                    </Suspense>
                    </Center>

                    <OrbitControls maxPolarAngle={Math.PI / 2}/>

                </Canvas>
            </div>
           

        </div>
    </section>
  )
}

export default  Projects;

