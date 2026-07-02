import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Avatar from './Avatar';

const AvatarScene: React.FC = () => {
  return (
    <Canvas className="avatar-canvas">
      <PerspectiveCamera position={[0, 1.5, 3]} fov={75} />
      <OrbitControls autoRotate autoRotateSpeed={2} />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 3, 2]} intensity={0.5} />
      
      <Avatar />
      
      <color attach="background" args={['#e0e7ff']} />
    </Canvas>
  );
};

export default AvatarScene;
