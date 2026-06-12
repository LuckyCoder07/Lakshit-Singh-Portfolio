import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import './Motivation3D.css';

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={2.5}>
      <MeshDistortMaterial 
        color="#58a6ff" 
        attach="material" 
        distort={0.6} 
        speed={1.5} 
        roughness={0.2}
      />
    </Sphere>
  );
};

const Motivation3D = () => {
  return (
    <section className="motivation-section">
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1.5} />
          <AnimatedShape />
        </Canvas>
      </div>
      
      {/* Heavy Blur Overlay */}
      <div className="blur-overlay"></div>

      <div className="motivation-content container">
        <motion.div 
          className="quote-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="quote mono-text">
            "First, solve the problem. Then, write the code."
          </p>
          <span className="quote-author">— John Johnson</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Motivation3D;
