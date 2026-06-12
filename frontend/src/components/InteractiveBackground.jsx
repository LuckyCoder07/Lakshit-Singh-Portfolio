import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import './InteractiveBackground.css';

const ParticleSwarm = (props) => {
  const ref = useRef();
  const { mouse } = useThree();
  
  // Generate 5000 random points in a sphere
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 10 }), []);

  useFrame((state, delta) => {
    // Base rotation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Mouse tracking rotation (inverse for parallax feel)
    const targetX = (mouse.x * Math.PI) / 4;
    const targetY = (mouse.y * Math.PI) / 4;
    
    ref.current.rotation.y += 0.05 * (targetX - ref.current.rotation.y);
    ref.current.rotation.x += 0.05 * (-targetY - ref.current.rotation.x);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial 
          transparent 
          color="#58a6ff" 
          size={0.05} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
};

const InteractiveBackground = () => {
  return (
    <div className="interactive-bg-container">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ParticleSwarm />
      </Canvas>
      <div className="global-blur-overlay"></div>
    </div>
  );
};

export default InteractiveBackground;
