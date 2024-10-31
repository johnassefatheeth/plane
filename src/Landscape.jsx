import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export function Landscape(props) {
  const { nodes, materials } = useGLTF('assets/models/scene.glb')
  const [lightMaterial,waterMaterial] = useMemo(() => {
    return[new MeshStandardMaterial({
        
    }), new MeshStandardMaterial({color: 'blue', transparent: true, opacity: 0.5})]
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.landscape_gltf.geometry}
        material={materials['Material.009']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.landscape_borders.geometry}
        material={materials['Material.010']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trees_light.geometry}
        material={materials['Material.008']}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={nodes.walls.material}
        position={[0, 3, -5.109]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5, 1, 3]}
      /> */}
      <mesh castShadow receiveShadow geometry={nodes.water.geometry} material={materials.Water} />
      <mesh castShadow receiveShadow geometry={nodes.water1.geometry} material={materials.Water} />
      <mesh castShadow receiveShadow geometry={nodes.water2.geometry} material={materials.Water} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('/scene.glb')


