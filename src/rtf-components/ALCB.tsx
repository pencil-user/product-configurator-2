/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /home/dusan/Downloads/AsterChair4/ALCB.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { ColorRepresentation, MirroredRepeatWrapping } from 'three'
import { RepeatWrapping } from 'three'
import { WrapAroundEnding } from 'three'
import { MeshStandardMaterial } from 'three'
import { useProductStore } from '../store'

// material components
// textures are loaded via Suspense when the material component is first rendered on page

function WoodMaterial() {
  const woodTexture = useTexture({
    normalMap: './Wood/Wood005_2K_NormalGL.jpg',
    roughnessMap: './Wood/Wood005_2K_Roughness.png',
    map: './Wood/Wood005_2K_Color.jpg'
  })
  return <meshStandardMaterial {...woodTexture} />
}

function LeatherMaterial({ color }: { color: string }) {
  const leatherTexture = useTexture({
    normalMap: './FabricLeather/FabricLeatherBuffaloRustic001_NRM_1K.jpg',
    roughnessMap: './FabricLeather/FabricLeatherBuffaloRustic001_roughness_1K.jpg',
    map: './FabricLeather/FabricLeatherBuffaloRustic001_COL_VAR1_1K_mono_my.jpg'
  })

  return <meshStandardMaterial
    {...leatherTexture}
    color={color}
    metalness={0}
    roughness={0.7}
  />
}

function FabricMaterial({ color }: { color: string }) {
  const fabricTexture = useTexture({
    normalMap: './FabricPlain/FabricPlainGreyFlat015_NRM_1K.png',
    map: './FabricPlain/FabricPlainGreyFlat015_COL_1K.jpg',
  })

  return <meshStandardMaterial
    {...fabricTexture}
    color={color}
    metalness={0}
    roughness={0.9}
  />
}

function MetalMaterial() {
  return <meshStandardMaterial
    color={'white'}
    roughness={0.3}
    metalness={1}
  />
}

export function Model(props: any) {
  // values taken from Zustand global store
  const color = useProductStore((state) => state.color)
  const mainMaterial = useProductStore(select => select.mainMaterial)
  const frameMaterial = useProductStore(select => select.frameMaterial)

  // gltf model is loaded via suspense when first encountered
  const { nodes, materials } = useGLTF('./AsterAmrchair/AsterChair_III.gltf') as any

  return (
    <group {...props} dispose={null} position={[0, 0.015, 0]} rotation={[0, Math.PI / 2, 0]}>
      <mesh
        geometry={nodes.plank1.geometry}
        material={materials['Material.001']}
        position={[0.01, 0.07, -0.01]}
        castShadow
      >
        {frameMaterial === 'Wood' ? <WoodMaterial /> : <MetalMaterial />}
      </mesh>
      <mesh
        geometry={nodes.plank2.geometry}
        material={materials['Material.001']}
        position={[0.01, 0.47, 0.78]}
        rotation={[1.53, 0, 0]}
        castShadow
      >
        {frameMaterial === 'Wood' ? <WoodMaterial /> : <MetalMaterial />}
      </mesh>
      <mesh
        geometry={nodes.back.geometry}
        material={materials['Material.001']}
        position={[0.01, 0.53, -0.01]}
        rotation={[Math.PI / 2, 0, -1.57]}
        castShadow
      >
        {mainMaterial === 'Leather' ? <LeatherMaterial color={color} /> : <FabricMaterial color={color} />}
      </mesh>
      <mesh
        geometry={nodes.frame.geometry}
        material={materials['Material.001']}
        position={[0.01, 0.97, -0.01]}
        rotation={[0, 0, -Math.PI / 2]}
        castShadow
      >
        {frameMaterial === 'Wood' ? <WoodMaterial /> : <MetalMaterial />}
      </mesh>
      <mesh
        geometry={nodes.pillow1.geometry}
        material={materials['Material.001']}
        position={[0.01, 0.65, 0.25]}
        rotation={[1.54, 0, 0.01]}
        scale={[0.66, 0.55, 0.55]}
        castShadow >
        {mainMaterial === 'Leather' ? <LeatherMaterial color={color} /> : <FabricMaterial color={color} />}
      </mesh>
      <mesh
        geometry={nodes.pillow2.geometry}
        material={materials['Material.001']}
        position={[0.01, 1.15, -0.55]}
        rotation={[2.67, 0, 0.01]}
        scale={[0.66, 0.55, 0.55]}
        castShadow
      >
        {mainMaterial === 'Leather' ? <LeatherMaterial color={color} /> : <FabricMaterial color={color} />}
      </mesh>

    </group>
  )
}

/*
sometimes, textures need to be wraped like this:
  textures.normalMap.repeat.set(1, 1);
  textures.colorMap.repeat.set(1, 1);
  textures.roughnessMap.repeat.set(1, 1);

  textures.normalMap.wrapS = textures.normalMap.wrapT =
    RepeatWrapping;
  textures.colorMap.wrapS = textures.colorMap.wrapT =
    RepeatWrapping;
  textures.roughnessMap.wrapS = textures.roughnessMap.wrapT =
    RepeatWrapping;*/