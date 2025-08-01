import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
  const gltf = useGLTF('/src/assets/mainmodel.glb')
  return <primitive object={gltf.scene} dispose={null} scale={2} />
}

export default function ModelViewer() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [-300, 0, 0] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableDamping={true} dampingFactor={0.1} rotateSpeed={1.5} enableZoom={false} />
    </Canvas>
  )
}
