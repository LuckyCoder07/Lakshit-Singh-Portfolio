import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { PerformanceMonitor } from '@react-three/drei';
import './InteractiveBackground.css';

// --------------------------------------------------------
// DARK MODE: Cyber-Grid
// --------------------------------------------------------
const CyberGrid = () => {
  const meshRef = useRef();
  const { mouse } = useThree();

  const { geometry, positions } = useMemo(() => {
    const segments = 50; // slightly reduced for performance
    const geo = new THREE.PlaneGeometry(30, 30, segments, segments);
    const pos = geo.attributes.position;
    const originalPos = new Float32Array(pos.array.length);
    originalPos.set(pos.array);
    return { geometry: geo, positions: originalPos };
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    const pos = meshRef.current.geometry.attributes.position;
    const count = pos.count;

    const mx = mouse.x * 2;
    const my = mouse.y * 2;

    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];

      const dx = x / 15 - mx;
      const dy = y / 15 - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const wave1 = Math.sin(x * 0.4 + time * 1.2) * 0.4;
      const wave2 = Math.cos(y * 0.4 + time * 0.8) * 0.4;
      const mouseRipple = Math.exp(-dist * 1.5) * Math.sin(dist * 4 - time * 3) * 1.2;

      pos.setZ(i, wave1 + wave2 + mouseRipple);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.5, 0, 0]}
      position={[0, -4, 0]}
    >
      <meshBasicMaterial
        color="#00d4ff"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
};

const FloatingOrbs = () => {
  const groupRef = useRef();

  const orbs = useMemo(() => {
    return Array.from({ length: 6 }, () => ({
      pos: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
      ],
      speed: 0.2 + Math.random() * 0.4,
      offset: Math.random() * Math.PI * 2,
      radius: 0.15 + Math.random() * 0.25,
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      child.position.y = orbs[i].pos[1] + Math.sin(t * orbs[i].speed + orbs[i].offset) * 1.5;
      child.position.x = orbs[i].pos[0] + Math.cos(t * orbs[i].speed * 0.7 + orbs[i].offset) * 0.8;
    });
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.pos}>
          <sphereGeometry args={[orb.radius, 16, 16]} />
          <meshBasicMaterial color="#58a6ff" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

// --------------------------------------------------------
// LIGHT MODE: Crystal Cubes Data-Flow
// --------------------------------------------------------
const GlassDataFlow = () => {
  const groupRef = useRef();
  const linesRef = useRef();
  const { mouse } = useThree();

  const nodes = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 - 2
      ),
      speed: Math.random() * 0.2 + 0.1,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  const lineGeo = useMemo(() => new THREE.BufferGeometry(), []);

  useFrame(({ clock }) => {
    if (!groupRef.current || !linesRef.current) return;
    const t = clock.getElapsedTime();
    const mx = mouse.x * 5;
    const my = mouse.y * 5;

    const positions = [];

    groupRef.current.children.forEach((child, i) => {
      const baseX = nodes[i].pos.x + Math.sin(t * nodes[i].speed + nodes[i].offset) * 1.5;
      const baseY = nodes[i].pos.y + Math.cos(t * nodes[i].speed + nodes[i].offset) * 1.5;
      
      const dx = baseX - mx;
      const dy = baseY - my;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const push = dist < 3 ? (3 - dist) * 0.5 : 0;
      
      child.position.set(baseX + dx*push, baseY + dy*push, nodes[i].pos.z);
      child.rotation.x += 0.01;
      child.rotation.y += 0.01;
      
      positions.push(child.position.x, child.position.y, child.position.z);
    });

    const linePositions = [];
    for (let i = 0; i < positions.length / 3; i++) {
      for (let j = i + 1; j < positions.length / 3; j++) {
        const v1 = new THREE.Vector3(positions[i*3], positions[i*3+1], positions[i*3+2]);
        const v2 = new THREE.Vector3(positions[j*3], positions[j*3+1], positions[j*3+2]);
        if (v1.distanceTo(v2) < 4.5) {
          linePositions.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
        }
      }
    }
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
      
      <group ref={groupRef}>
        {nodes.map((_, i) => (
          <mesh key={i}>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              transmission={0.9} 
              opacity={1} 
              transparent 
              roughness={0.1} 
              ior={1.5} 
              thickness={1} 
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        ))}
      </group>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial color="#94a3b8" transparent opacity={0.3} />
      </lineSegments>
    </>
  );
};

// --------------------------------------------------------
// Main Component
// --------------------------------------------------------
const InteractiveBackground = ({ theme }) => {
  const isDark = theme !== 'light';
  const bgColor = isDark ? '#0d1117' : 'transparent';

  return (
    <div className="interactive-bg-container" style={{ background: bgColor }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]} // Cap max pixel ratio for mobile performance
      >
        <PerformanceMonitor bounds={() => [30, 60]}>
          {isDark ? (
            <>
              <CyberGrid />
              <FloatingOrbs />
            </>
          ) : (
            <GlassDataFlow />
          )}
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;
