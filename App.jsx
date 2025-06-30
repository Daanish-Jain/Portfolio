import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GalleryWalls from './components/GalleryWalls'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <GalleryWalls />
      <OrbitControls enablePan={false} />
    </Canvas>
  )
}
