import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let canvas: HTMLCanvasElement;
    try {
      canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    // Determine performance profile
    const isMobile = window.innerWidth < 768;
    const segmentsX = isMobile ? 36 : 64;
    const segmentsY = isMobile ? 36 : 64;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090c10, 0.045);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 4, 11);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: !isMobile,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x090c10, 1);
    container.appendChild(renderer.domElement);

    // Flowing Fabric Wave Geometry
    const planeGeo = new THREE.PlaneGeometry(24, 18, segmentsX, segmentsY);
    planeGeo.rotateX(-Math.PI / 2.6);

    // Save initial vertex positions for wave calculations
    const posAttr = planeGeo.attributes.position;
    const initialPositions = new Float32Array(posAttr.array.length);
    initialPositions.set(posAttr.array);

    // Fabric Mesh with sheen and subtle weave texture
    const fabricMat = new THREE.MeshStandardMaterial({
      color: 0x121722,
      roughness: 0.65,
      metalness: 0.25,
      wireframe: false,
      flatShading: false,
      side: THREE.DoubleSide,
    });

    const fabricMesh = new THREE.Mesh(planeGeo, fabricMat);
    fabricMesh.position.set(0, -1.2, 0);
    scene.add(fabricMesh);

    // Secondary subtle fiber wireframe overlay for textile texture
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    });
    const wireframeMesh = new THREE.Mesh(planeGeo, wireframeMat);
    wireframeMesh.position.set(0, -1.18, 0);
    scene.add(wireframeMesh);

    // Textile threads / floating fiber particles
    const particleCount = isMobile ? 40 : 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const emeraldColor = new THREE.Color(0x10b981);
    const purpleColor = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 20;
      particlePositions[i3 + 1] = (Math.random() - 0.2) * 8;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 14;

      const mixed = Math.random() > 0.5 ? emeraldColor : purpleColor;
      particleColors[i3] = mixed.r;
      particleColors[i3 + 1] = mixed.g;
      particleColors[i3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Lighting (Green + Purple + Charcoal contrast)
    const ambientLight = new THREE.AmbientLight(0x0f141c, 2.5);
    scene.add(ambientLight);

    // Emerald Green Light
    const greenLight = new THREE.PointLight(0x10b981, 4.5, 24);
    greenLight.position.set(-6, 3, 4);
    scene.add(greenLight);

    // Royal Purple Light
    const purpleLight = new THREE.PointLight(0x9333ea, 4.8, 24);
    purpleLight.position.set(6, 4, 3);
    scene.add(purpleLight);

    // Subtle center accent fill
    const accentLight = new THREE.PointLight(0x059669, 2.0, 16);
    accentLight.position.set(0, 1, 6);
    scene.add(accentLight);

    // Smooth Mouse Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 768 ? 1.5 : 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth damping mouse movement
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      camera.position.x = mouseX * 1.5;
      camera.position.y = 4 + -mouseY * 0.8;
      camera.lookAt(0, 0, 0);

      // Animate Green and Purple lights like cinematic fabric factory illumination
      greenLight.position.x = Math.sin(elapsedTime * 0.4) * 7 - 2;
      greenLight.position.z = Math.cos(elapsedTime * 0.3) * 4 + 2;

      purpleLight.position.x = Math.cos(elapsedTime * 0.35) * 7 + 2;
      purpleLight.position.z = Math.sin(elapsedTime * 0.45) * 4 + 2;

      // Deform fabric plane to simulate gentle flowing textile drape
      const positions = planeGeo.attributes.position.array as Float32Array;
      const count = positions.length / 3;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const initX = initialPositions[i3];
        const initY = initialPositions[i3 + 1];

        // Harmonic textile wave equation: primary roll + cross weave ripple
        const wave1 = Math.sin(initX * 0.35 + elapsedTime * 0.65) * 0.65;
        const wave2 = Math.cos(initY * 0.4 + elapsedTime * 0.5) * 0.55;
        const wave3 = Math.sin((initX + initY) * 0.25 + elapsedTime * 0.4) * 0.4;
        const interactiveRipple = Math.sin(initX * 0.2 + mouseX * 2) * 0.25;

        positions[i3 + 2] = initialPositions[i3 + 2] + wave1 + wave2 + wave3 + interactiveRipple;
      }

      planeGeo.attributes.position.needsUpdate = true;
      planeGeo.computeVertexNormals();

      // Slowly drift floating textile thread particles
      const pPositions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pPositions[i3 + 1] += Math.sin(elapsedTime + i) * 0.003;
        pPositions[i3] += Math.cos(elapsedTime * 0.5 + i) * 0.002;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      planeGeo.dispose();
      fabricMat.dispose();
      wireframeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="three-background-container"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Three.js canvas mount target */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle vignettes and dark charcoal overlays for WCAG AAA text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090c10]/80 via-[#090c10]/70 to-[#090c10]/95 pointer-events-none" />

      {/* Delicate grain/mesh texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#10b981 1px, transparent 1px), radial-gradient(#8b5cf6 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />
    </div>
  );
};
