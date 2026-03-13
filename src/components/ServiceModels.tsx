'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

export function CoreSphere() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.1;
      outerRef.current.rotation.y = t * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2;
      innerRef.current.rotation.y = -t * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group>
        {/* Outer Wireframe Sphere */}
        <Sphere ref={outerRef} args={[1.5, 32, 32]}>
          <meshPhongMaterial 
            color="#0ea5e9" 
            wireframe 
            transparent 
            opacity={0.15} 
            emissive="#0ea5e9"
            emissiveIntensity={0.5}
          />
        </Sphere>
        
        {/* Inner Distorted Core */}
        <mesh ref={innerRef} scale={0.8}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#0ea5e9"
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.9}
            roughness={0.1}
            distort={0.5}
            speed={2}
          />
        </mesh>

        {/* Central Point Light */}
        <pointLight intensity={2} distance={5} color="#0ea5e9" />
      </group>
    </Float>
  );
}

export function CyberTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.4;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.2}>
        <torusKnotGeometry args={[0.8, 0.25, 256, 64]} />
        <MeshWobbleMaterial
          color="#1e293b" // Deep Obsidian Blue
          factor={0.4}
          speed={1.5}
          roughness={0}
          metalness={1}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}
