
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const headphones = (props) => {
  const { nodes, materials } = useGLTF('/retro_microphone.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.223, 0]} scale={[0.165, 0.071, 0.165]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['.002']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/retro_microphone.glb')
 export default headphones

