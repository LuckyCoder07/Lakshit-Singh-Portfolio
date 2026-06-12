import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import './InteractiveBackground.css';

const LiquidBlob = () => {
  const ref = useRef();
  const { mouse } = useThree();

  useFrame((state, delta) => {
    // Base rotation
    ref.current.rotation.x += delta * 0.1;
    ref.current.rotation.y += delta * 0.15;
    
    // Mouse tracking rotation (follows cursor)
    const targetX = (mouse.x * Math.PI) / 4;
    const targetY = (mouse.y * Math.PI) / 4;
    
    ref.current.rotation.y += 0.05 * (targetX - ref.current.rotation.y);
    ref.current.rotation.x += 0.05 * (-targetY - ref.current.rotation.x);
  });

  return (
    <Sphere ref={ref} args={[1, 100, 100]} scale={3.5}>
      <MeshDistortMaterial 
        color="#2c3e50" 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.1} 
        metalness={1} 
        envMapIntensity={1}
      />
    </Sphere>
  );
};

const InteractiveBackground = () => {
  return (
    <div className="interactive-bg-container">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#58a6ff" />
        <Environment preset="city" />
        <LiquidBlob />
      </Canvas>
      <div className="global-blur-overlay"></div>
    </div>
  );
};

export default InteractiveBackground;
