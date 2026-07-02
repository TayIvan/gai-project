import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { useAvatarStore } from '../store/avatarStore';

const Avatar: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const { isSpeaking } = useAvatarStore();

  useFrame(() => {
    if (!groupRef.current) return;
    if (isSpeaking) {
      groupRef.current.position.y += Math.sin(Date.now() * 0.005) * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Eyes */}
      <group position={[0, 0.15, 0.5]}>
        {/* Left Eye */}
        <mesh position={[-0.15, 0.1, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-0.15, 0.1, 0.08]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#4a90e2" />
        </mesh>

        {/* Right Eye */}
        <mesh position={[0.15, 0.1, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0.15, 0.1, 0.08]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#4a90e2" />
        </mesh>
      </group>

      {/* Nose */}
      <mesh position={[0, 0, 0.62]}>
        <coneGeometry args={[0.08, 0.15, 8]} />
        <meshStandardMaterial color="#ffcb9a" />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, -0.15, 0.55]}>
        <boxGeometry args={[0.2, 0.1, 0.05]} />
        <meshStandardMaterial color="#e74c3c" />
      </mesh>
    </group>
  );
};

export default Avatar;
