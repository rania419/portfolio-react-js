/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: GreenG (https://sketchfab.com/AngelNebesniy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/drone-dccc3772dffe4daba458cf5ad75f6752
Title: Drone
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

// const RotatingDrone =() =>{

//   const meshRef = useRef();
//   useFrame( () => {{/*useFrame is a hook provided by react-three-fiber. It is called on every frame, just like requestAnimationFrame in vanilla JavaScript, and allows you to create animations or continuous updates.*/} 
//     if(meshRef.current){
//       meshRef.current.rotation.y += 0.01
//       meshRef.current.rotation.x += 0.01
//       /*meshRef.current: This is the actual 3D object (a mesh) in the scene. 
//       Once the component renders, meshRef.current will point to the mesh DOM node.*/
//     }
    
//   })

//   return(
//     <mesh ref={meshRef}>
//       <cylinderGeometry args={[1,1,1]}/>
//       {/* <meshLambertMaterial color="#468585"  emmisive="#468585"/> */}
      
//       <meshStandardMaterial color="#468585"  emmisive="#468585cd"/>
//       <Sparkles count={100} scale={1} speed={0.002} noise={0.2} color="orange" />
//       {/* adding shadow to the cylinder  */}
     
      

//     </mesh>
//   )
  
  
// }



const Drone = (props) => {


  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/drone/drone.glb')
  const { actions } = useAnimations(animations, group)
  // const monitortexture = useTexture('/Textures/desk/monitor.png')
  // const screentexture = useTexture('/Textures/desk/screen.png')


  const FanRef1 = useRef();  // Assuming "4_L" is the left fan
  const FanRef2 = useRef();  // Assuming "4_L" is the left fan
  const FanRef3 = useRef();  // Assuming "4_L" is the left fan
  const FanRef4 = useRef();  // Assuming "4_L" is the left fan

  const ArmRef1 = useRef();  // Reference to the left arm
  const ArmRef2 = useRef();  // Reference to the left arm
  const ArmRef3 = useRef();  // Reference to the left arm
  const ArmRef4 = useRef();  // Reference to the left arm
  
  

  // Rotate the fans continuously
  useFrame((state, delta) => {
    
    FanRef1.current.rotation.z += delta * 5; // Speed of rotation
    FanRef2.current.rotation.z += delta * 5; // Speed of rotation

    
    FanRef3.current.rotation.z += delta * 5; // Speed of rotation
    FanRef4.current.rotation.z += delta * 5; // Speed of rotation
   
  });


  useFrame((state, delta) => {
    // Control the rotation of the left and right arms based on 'opening'
  
      const speed = delta * 2; // Adjust the speed of opening
  
        // Rotate the arms to open (adjust angles based on model structure)
      ArmRef4.current.rotation.z = Math.min(ArmRef4.current.rotation.z + speed, Math.PI/18 );  // Open to 45 degrees
      ArmRef1.current.rotation.z = Math.max(ArmRef1.current.rotation.z - speed, -Math.PI / 18); // Open to -45 degrees
     


      ArmRef2.current.rotation.z = Math.min(ArmRef4.current.rotation.z + speed, Math.PI / 18);  // Open to 45 degrees
      ArmRef3.current.rotation.z = Math.max(ArmRef1.current.rotation.z - speed, -Math.PI / 18); // Open to -45 degrees
     
       // Change the position of the drone slightly over time
    group.current.position.y += Math.sin(state.clock.getElapsedTime()) * 0.005;

    // Rotate the drone along the Y axis for turning effect
    group.current.rotation.y += delta * 0.2; 
    
  });

 

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="cc9fea1cfb8e481899fb153dd500599cfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                
                  name="4_L"
                  position={[0, 798.585, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="4_L_LOL_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['4_L_LOL_0'].geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  // arm to be opened
                  ref={ArmRef1}
                  name="4_L008"
                  position={[1017.407, 787.012, 1081.725]}
                  rotation={[-Math.PI / 2, 0, 1.833]}
                  scale={100}>
                  <mesh
                    name="4_L008_LOL_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['4_L008_LOL_0'].geometry}
                    material={materials.material}
                  />
                  {/* Right Fan */}
                  <group name="4_L004" position={[8.693, -5.505, 5.418]} rotation={[0, 0, 1.683]}>
                    <mesh
                      ref={FanRef1}
                      name="4_L004_LOL_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['4_L004_LOL_0'].geometry}
                      material={materials.material}
                    />
                  </group>
                </group>
                <group
                  // arm to be opened
                  ref={ArmRef2}
                  name="4_L009"
                  position={[-978.039, 787.017, 1081.72]}
                  rotation={[-Math.PI / 2, 0, -1.818]}
                  
                  scale={100}>
                  <mesh
                    name="4_L009_LOL_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['4_L009_LOL_0'].geometry}
                    material={materials.material}
                  />
                  {/* Left Fan */}
                  <group name="4_L001" position={[-8.75, -5.504, 5.419]} rotation={[0, 0, -1.663]}>
                    <mesh
                      //  ref={FanRef}
                      ref={FanRef2}
                      name="4_L001_LOL_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['4_L001_LOL_0'].geometry}
                      material={materials.material}
                    />
                  </group>
                </group>
                <group
                // arm to be opened
                  ref={ArmRef3}
                  name="4_L010"
                  position={[-978.043, 787.02, -1277.645]}
                  rotation={[-Math.PI / 2, 0, 2.325]}
                  scale={100}>
                    
                  <mesh
                    name="4_L010_LOL_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['4_L010_LOL_0'].geometry}
                    material={materials.material}
                  />
                  <group name="4_L002" position={[-8.75, 5.506, 5.419]} rotation={[0, 0, 1.731]}>
              
                    <mesh
                     // right fan
                     ref={FanRef3}
                      name="4_L002_LOL_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['4_L002_LOL_0'].geometry}
                      material={materials.material}
                    />
                  </group>
                </group>
                {/* arm */}
                <group
                  // arm to be opened
                  ref={ArmRef4}
                  name="4_L011"
                  position={[1017.423, 787.02, -1277.641]}
                  rotation={[-Math.PI / 2, 0, -2.325]}
                  scale={100}>
                  <mesh
                  
                    name="4_L011_LOL_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['4_L011_LOL_0'].geometry}
                    material={materials.material}
                  />
                  <group name="4_L003" position={[8.693, 5.504, 5.418]} rotation={[0, 0, -1.807]}>
                    <mesh
                      // fan
                      ref={FanRef4}
                      name="4_L003_LOL_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['4_L003_LOL_0'].geometry}
                      material={materials.material}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/drone/drone.glb')

export default Drone