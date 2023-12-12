import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import Ground from "./Ground";
import FloatingGrid from "./FloatingGrid";
import { Car } from "./Car";

function Experiance() {
  return (
    <>
      <OrbitControls
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        maxDistance={10}
        minDistance={5}
      />
      <PerspectiveCamera makeDefault fov={50} position={[-2, -6, -5]} />
      <ambientLight color={"white"} intensity={1} />
      <spotLight
       color={'white'}
       intensity={1.5}
       angle={0.6}
       penumbra={0.5}
       position={[5, 5, 0]}
       castShadow
       shadow-bias={-0.0001}
      />
      <spotLight
      color={'white'}
      intensity={2}
      angle={0.6}
      penumbra={0.5}
      position={[-5, 5, 0]}
      castShadow
      shadow-bias={-0.0001} 
      />
      <Ground />
      <FloatingGrid />
      <Car rotation-y={[-Math.PI/1.1]}/>
    </>
  );
}

export default Experiance;
