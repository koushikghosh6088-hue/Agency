'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function SystemScanner() {
  const meshRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);

  // Generate data-stream particles
  const particles = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      pts.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ),
        speed: 0.01 + Math.random() * 0.02
      });
    }
    return pts;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Animate scanning beam
    if (beamRef.current) {
      beamRef.current.position.y = Math.sin(t * 1.5) * 2;
    }

    // Rotate computer model slightly
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    }

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        child.position.y += particles[i].speed;
        if (child.position.y > 2) child.position.y = -2;
        child.rotation.x += 0.01;
        child.rotation.z += 0.01;
      });
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* The Diagnostic Neural Hub (Lucrative High-End Design) */}
        <group ref={meshRef}>
          {/* Main Ultrawide Curved Screen Housing */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[4, 1.8, 0.2]} />
            <meshStandardMaterial 
              color="#020202" 
              roughness={0.05} 
              metalness={1} 
            />
          </mesh>

          {/* Screen Glass (High-Fidelity Ultrawide) */}
          <mesh position={[0, 0, 0.11]}>
            <planeGeometry args={[3.8, 1.6]} />
            <MeshTransmissionMaterial
              backside
              samples={6}
              thickness={0.1}
              chromaticAberration={0.02}
              anisotropy={1}
              distortion={0}
              color="#000000"
              transmission={1}
            />
          </mesh>

          {/* Technical Detail: Sidebar Modules (Left/Right) */}
          <mesh position={[-2.1, 0, 0]}>
            <boxGeometry args={[0.2, 2.2, 0.6]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={1} />
          </mesh>
          <mesh position={[2.1, 0, 0]}>
            <boxGeometry args={[0.2, 2.2, 0.6]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={1} />
          </mesh>

          {/* Glowing Red Technical Data Lines (Internal) */}
          <group position={[0, 0, 0.05]}>
            {[...Array(5)].map((_, i) => (
              <mesh key={i} position={[(i - 2) * 0.6, Math.sin(i) * 0.2, 0]}>
                <boxGeometry args={[0.1, 0.8, 0.01]} />
                <meshBasicMaterial color="#ef4444" transparent opacity={0.3} />
              </mesh>
            ))}
          </group>

          {/* The Neural Core (Center Glow) */}
          <mesh position={[0, 0, -0.1]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <MeshDistortMaterial
              color="#ef4444"
              speed={5}
              distort={0.4}
              radius={1}
              transparent
              opacity={0.1}
            />
          </mesh>

          {/* Technical Detail: Base Stand (Minimalist Blade) */}
          <mesh position={[0, -1.4, -0.2]}>
             <boxGeometry args={[0.8, 1.0, 0.05]} />
             <meshStandardMaterial color="#111111" metalness={1} />
          </mesh>
          <mesh position={[0, -1.9, 0]}>
             <boxGeometry args={[2, 0.05, 1.5]} />
             <meshStandardMaterial color="#050505" roughness={0} metalness={1} />
          </mesh>

          {/* Red Indicator LEDs */}
          <mesh position={[-1.7, -0.7, 0.15]}>
            <boxGeometry args={[0.3, 0.05, 0.05]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>
          <mesh position={[-1.7, -0.6, 0.15]}>
            <boxGeometry args={[0.2, 0.05, 0.05]} />
            <meshBasicMaterial color="#ef4444" opacity={0.5} transparent />
          </mesh>
        </group>

        {/* Orbiting Technical Data Ring */}
        <group rotation={[Math.PI / 6, 0, 0]}>
          <mesh>
            <ringGeometry args={[4.5, 4.55, 64]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.15} side={THREE.DoubleSide} />
          </mesh>
        </group>

        {/* Scanning Beam Visual (Intense & Detailed) */}
        <group ref={beamRef}>
          {/* Main Red Line */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[3.5, 3.55, 64]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.8} side={THREE.DoubleSide} />
          </mesh>
          {/* Volumetric Scan Field */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.01]}>
            <ringGeometry args={[0, 3.5, 64]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.08} side={THREE.DoubleSide} />
          </mesh>
          <pointLight color="#ef4444" intensity={12} distance={5} />
        </group>

        {/* Neural Data Particles (Red/Blue Binary) */}
        <group ref={particlesRef}>
          {particles.map((p, i) => (
            <mesh key={i} position={p.position}>
              <boxGeometry args={[0.02, 0.02, 0.02]} />
              <meshBasicMaterial color={i % 3 === 0 ? "#ef4444" : "#000000"} transparent opacity={0.6} />
            </mesh>
          ))}
        </group>

        {/* Ambient background grid lines */}
        <gridHelper args={[10, 20, "#1e293b", "#0f172a"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]} />
      </group>
    </Float>
  );
}
