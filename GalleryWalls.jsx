import React from 'react'
import { Text } from '@react-three/drei'

export default function GalleryWalls() {
  const sections = ['Photography', 'Design', 'Social Work', 'Education', 'Coding', 'Experiences']
  return (
    <>
      {sections.map((name, i) => {
        const angle = (i / sections.length) * Math.PI * 2
        const x = Math.cos(angle) * 5
        const z = Math.sin(angle) * 5
        return (
          <group key={name} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <mesh>
              <boxGeometry args={[3, 2, 0.2]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            <Text position={[0, 1.5, 0.2]} fontSize={0.3} color="black">
              {name}
            </Text>
          </group>
        )
      })}
    </>
  )
}
