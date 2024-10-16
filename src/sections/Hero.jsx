import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const Hero = () => {
  return (
    <section className='min-h-screen border-2 w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>

            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                Hi, I am Rania <span className='waving-hand'>👋</span>
            </p>

            <p className='hero_tag text-gray_gradient'>
                Building Products & Brands
            </p>

        </div>

        <div className='w-full h-full '>

            <canvas className='w-full h-full'>

                <Suspense fallback={<CanvasLoader/>}>

                <PerspectiveCamera makeDefault position={[0,0,30]}/>
                
                <HackerRoom scale={0.05} position={[0,0,0]} wrotation={[0, -Math.PI/2 , 0]}/>
                
                <ambientLight intensity={1} />
                <directionalLight intensity={1} position={[10, 10, 10]} />
                
                </Suspense>

                
            </canvas>

        </div>
     
    </section>
  )
}

export default Hero