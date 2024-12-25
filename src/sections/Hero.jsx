import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import Drone from '../components/drone'
import { Leva, useControls } from 'leva'
import {useMediaQuery} from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera.jsx'
import Lab from '../components/Lab'
import Button from '../components/Button.jsx'
const Hero = () => {
    

    // const controls = useControls('Drone' , {
    //     posX: {
    //         value: 2.5,
    //         // scale: 0.3,
    //         min: -10,
    //         max: 10,
    //     },

    //     posY: {
    //         value: 2.5,
    //         // scale: 0.3,
    //         min: -10,
    //         max: 10,
    //     },

    //     posZ: {
    //         value: 2.5,
    //         // scale: 0.3,
    //         min: -10,
    //         max: 10,
    //     } ,

    //     rotateX: {
    //         value: 2.5,
    //         // scale: 0.3,
    //         min: -10,
    //         max: 10,
    //     },

    //     rotateY: {
    //         value: 2.5,
    //         // scale: 0.3,
    //         min: -10,
    //         max: 10,
    //     },

    //     rotateZ: {
    //         value: 2.5,
    //         // scale: 0.3,
    //         min: -10,
    //         max: 10,
    //     },

    //     scale: {
    //         value: 0.3,
    //         // scale: 0.3,
    //         min: 0.1,
    //         max: 1,
    //     }



    // })

    // const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
    // const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })


    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
   
    
    return (
        <section className='min-h-screen w-full flex flex-col relative' id="home">
      
        <div className='w-full h-full flex flex-col sm:mt-30 mt-20 c-space gap-2'>

                <p className=' sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                    Hi, I'm Ibrahim Khadraoui <span className='waving-hand'>👋</span>
                </p>

                <p className='hero_tag text-gray_gradient'>
                    Electronic Engineer
                </p>

            </div>
            <Leva />
            <div className='w-full h-full absolute inset-0'>
           

                <Canvas className='w-full h-full'>

                    <Suspense fallback={<CanvasLoader/>}>

                    <PerspectiveCamera makeDefault position={[0, 0, 30]}  />

                
                    {/* <OrbitControls enableZoom={true} enablePan={true}/> */}
                    
                    
                    {/* <HeroCamera isMobile={isMobile}> */}
                    {/* <HackerRoom scale={0.1} position={[0, -10, 0]} rotation={[0.1, -Math.PI, 0]} /> */}
                    {/* <Lab 
                        scale={sizes.deskScale} 
                        position={sizes.deskPosition}
                        rotation={[0.1, -Math.PI, 0]} />
                        
                    </HeroCamera> */}

                    {/* <Drone 
                    scale={isMobile ? 0.23 : isTablet ? 0.33 : 0.4} 
                    position={[1.7, -5.1,0]} 
                    rotation={[-8.7, -0.9, -8.5]}/> */}
                    

                    {/* <Drone scale={[controls.scale, controls.scale, controls.scale]} 
                    position={[controls.posX, controls.posY, controls.posZ]} 
                    rotation={[controls.rotateX, controls.rotateY, controls.rotateZ]} */}
                    
                    <HeroCamera isMobile={isMobile}>
                        <Drone 
                        scale={sizes.deskScale} 
                        position={sizes.deskPosition}
                        rotation={[Math.PI / 6, Math.PI / 4, 0]}/>
                    </HeroCamera>
                 

                    

                    <group>
                        <ReactLogo position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}  />
                    </group>
                    
                    
                    


                    <directionalLight position={[0, 0, 10]} intensity={7} />
                    <ambientLight  intensity={1} />
                    <spotLight position={[15, 20, 20]} intensity={3}   />
                    </Suspense>

                </Canvas>

            </div>

            <div className='absolute bottom-7 md:bottom-20 sm:bottom-20 left-0 right-0 w-full z-10 c-space '>

                <a href="#contact" className='w-fit'>
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>

            

        
        </section>
    )
}

export default Hero