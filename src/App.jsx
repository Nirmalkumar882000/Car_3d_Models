import React, { useRef, useState } from 'react'
import { animated, useSpring,config } from '@react-spring/three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      {/* <OrbitControls autoRotate/> */}
      <Box/>
    </Canvas>
  )
}

export default App



function Box(){

  const springs = useSpring({
    from: { position: [-2, 0, 0], color: '#ff6d6d' },
    to: async next => {
      while (1) {
        await next({ position: [2, 0, 0]}); 
      }
    },
    config: { duration: 4000 },

  });


  return(
    <animated.mesh {...springs } >
      <boxGeometry/>
      <meshPhongMaterial attach="material" color={"red"}/>
     </animated.mesh>
  )
}
