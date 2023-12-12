

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'








export function Car(props) {
  const { nodes, materials } = useGLTF('/models/car.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials['1RX7VS_Calipers']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['1RX7VS_Rims']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.RRBaseMatGlass} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.RRBaseMatWM} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.RRRX7VS_BrakeLight} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.RRRX7VS__Blinker_L} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.RRRX7VS__Blinker_R} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.RRRX7VS__BrakeLight2} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.RRRX7VS__ReverseLights} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.RRBaseMatGeneral} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.RRRX7VS_Body} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.RRRX7VS_Body2} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.RRRX7VS_HeadLights} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/car.glb')
