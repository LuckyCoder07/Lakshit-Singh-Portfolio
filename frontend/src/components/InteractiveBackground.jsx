import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import './InteractiveBackground.css';

// Creates a flowing 3D cyber-grid wireframe plane that reacts to the mouse
const CyberGrid = ({ isDark }) => {
  const meshRef = useRef();
  const { mouse, size } = useThree();

  const { geometry, positions } = useMemo(() => {
    const segments = 60;
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

      // Distance from mouse (in world-ish space)
      const dx = x / 15 - mx;
      const dy = y / 15 - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Two overlapping sine waves + mouse ripple
      const wave1 = Math.sin(x * 0.4 + time * 1.2) * 0.4;
      const wave2 = Math.cos(y * 0.4 + time * 0.8) * 0.4;
      const mouseRipple = Math.exp(-dist * 1.5) * Math.sin(dist * 4 - time * 3) * 1.2;

      pos.setZ(i, wave1 + wave2 + mouseRipple);
    }
    pos.needsUpdate = true;
  });

  const lineColor = isDark ? '#00d4ff' : '#0969da';
  const opacity = isDark ? 0.25 : 0.18;

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.5, 0, 0]}
      position={[0, -4, 0]}
    >
      <meshBasicMaterial
        color={lineColor}
        wireframe
        transparent
        opacity={opacity}
      />
    </mesh>
  );
};

// Floating glowing orbs drifting through the scene
const FloatingOrbs = ({ isDark }) => {
  const groupRef = useRef();

  const orbs = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
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

  const orbColor = isDark ? '#58a6ff' : '#0969da';

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.pos}>
          <sphereGeometry args={[orb.radius, 16, 16]} />
          <meshBasicMaterial color={orbColor} transparent opacity={isDark ? 0.6 : 0.4} />
        </mesh>
      ))}
    </group>
  );
};

const InteractiveBackground = ({ theme }) => {
  const isDark = theme !== 'light';
  const bgColor = isDark ? '#0d1117' : '#f0f6ff';

  return (
    <div className="interactive-bg-container">
      <Canvas
        camera={{ position: [0, 4, 12], fov: 60 }}
        style={{ background: bgColor }}
        gl={{ antialias: true, alpha: false }}
      >
        <CyberGrid isDark={isDark} />
        <FloatingOrbs isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;
