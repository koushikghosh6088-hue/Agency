'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const CODE_CHARS = ['{', '}', '[', ']', '(', ')', '/', '<', '>', ';', '1', '0', '!', '?', '='];

function CodeParticle({ position }: { position: [number, number, number] }) {
  const char = useMemo(() => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)], []);
  const meshRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  const speed = useMemo(() => 0.1 + Math.random() * 0.2, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(t * speed + position[0]) * 0.5;
      meshRef.current.rotation.y = t * speed * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Text
        fontSize={0.2}
        color="#0ea5e9"
        fillOpacity={0.1}
      >
        {char}
      </Text>
    </group>
  );
}

export default function HeroEnvironment() {
  const particles = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 50; i++) {
      pts.push({
        id: i,
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10 - 5
        ] as [number, number, number]
      });
    }
    return pts;
  }, []);

  return (
    <group>
      {particles.map((p) => (
        <CodeParticle key={p.id} position={p.position} />
      ))}
      
      {/* Subtle Light Rays */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        color="#0ea5e9"
        castShadow
      />
      
      <ambientLight intensity={0.2} />
    </group>
  );
}
