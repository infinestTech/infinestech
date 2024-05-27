import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50; // Adjust camera position to decrease the apparent size
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particle materials
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const gapParticleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: new THREE.Color(0x87cefa), // Blue-silver color for gap and sprinkle
      blending: THREE.AdditiveBlending,
      opacity: 0.5,
      transparent: true,
    });

    const checkIntersect = (touch) => {
      let mouse = new THREE.Vector2();
      mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;

      let raycaster = new THREE.Raycaster();
      raycaster.params.Points.threshold = 0.1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000); // Example: Change color to red
      }

      console.log(intersects); // Add this inside checkIntersect

    };

    // Event listener for touch start
    const handleTouchStart = (event) => {
      event.preventDefault();
      if (event.touches.length > 0) {
        checkIntersect(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    // Inside useEffect


const handleTouchMove = (event) => {
  event.preventDefault(); // Consider if your earlier preventDefault is sufficient or if it's needed here as well
  console.log("Handling touch move");
  // Directly call checkIntersect without throttling for testing
  checkIntersect(event.touches[0].clientX, event.touches[0].clientY);
};


    renderer.domElement.addEventListener('touchstart', handleTouchStart);
    renderer.domElement.addEventListener('touchmove', handleTouchMove, { passive: false });


    // Function to generate a single spiral arm with specific colors
    const generateSpiralArm = (armIndex, totalArms, particleCount, particleDistance, depthFactor) => {
      const spiralArmGeometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const colorCenter = new THREE.Color(0xff0000); // Center color (red)
      const colorMiddle = new THREE.Color(0xffd700); // Middle color (gold)
      const colorOutside = new THREE.Color(0x87ceeb); // Outside color (blue)

      for (let i = 0; i < particleCount; i++) {
        const fraction = i / particleCount;
        const angle = (Math.PI * 2 * (armIndex / totalArms)) + (fraction * Math.PI * 2); // Only one full rotation
        const radius = fraction * particleDistance;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 2 * depthFactor;

        positions.push(x, y, z);

        // Color transition from center to outside
        let color;
        if (fraction < 0.5) { // Transition from red to gold in the first half
          color = new THREE.Color().lerpColors(colorCenter, colorMiddle, fraction * 2);
        } else { // Transition from gold to blue in the second half
          color = new THREE.Color().lerpColors(colorMiddle, colorOutside, (fraction - 0.5) * 2);
        }
        colors.push(color.r, color.g, color.b);
      }

      spiralArmGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      spiralArmGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      return new THREE.Points(spiralArmGeometry, particleMaterial);
    };

    // Generate spiral arms
    const totalArms = 3; // Three arms
    const particleCountPerArm = 800; // Fewer particles per arm
    const particleDistance = 100; // Increase distance for a wider gap
    const depthFactor = 500;

    // Add each spiral arm to the scene with increased spacing
    for (let i = 0; i < totalArms; i++) {
      const spiralArm = generateSpiralArm(i, totalArms, particleCountPerArm, particleDistance, depthFactor);
      scene.add(spiralArm);
    }

     // Function to generate particles for filling the gaps and sprinkling
     const generateGapParticles = (particleCount, distance) => {
      const gapGeometry = new THREE.BufferGeometry();
      const positions = [];

      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos((Math.random() * 2) - 1);
        const radius = distance + (Math.random() - 0.5) * 10; // Slight variation in distance

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = (Math.random() - 0.5) * 2 * depthFactor;

        positions.push(x, y, z);
      }

      gapGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      return new THREE.Points(gapGeometry, gapParticleMaterial);
    };

    // Add gap particles in between spiral arms and as a sprinkle effect
    const gapParticleCount = 5000; // Number of gap particles
    const gapDistance = 100; // Distance matching the spiral arm radius
    const gapParticles = generateGapParticles(gapParticleCount, gapDistance);
    scene.add(gapParticles);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) * 0.05;
      mouseY = (event.clientY - windowHalfY) * 0.05;
    }

    function onDocumentMouseWheel(event) {
      camera.position.z += event.deltaY * 0.1; // Adjust zoom speed here
    }

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('wheel', onDocumentMouseWheel, false);

    // Animation loop with default slow rotation and interactive rotation
    const animate = () => {
      requestAnimationFrame(animate);

      // Default slow rotation
      scene.rotation.x += 0.005;
      scene.rotation.y += 0.01;

      // Interactive rotation
      scene.rotation.x += (mouseY - scene.rotation.x) * 0.005;
      scene.rotation.y += (mouseX - scene.rotation.y) * 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('wheel', onDocumentMouseWheel);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      renderer.domElement.removeEventListener('touchmove', handleTouchMove);
      renderer.dispose(); // Dispose of renderer

      // Dispose of each spiral arm
      scene.children.forEach(child => {
        if (child.isPoints) {
          child.geometry.dispose(); // Dispose of the geometry of each point
        }
      });

      // Additional checks before removing the child
      if (containerRef.current && renderer.domElement) {
        // Ensure containerRef.current is still valid and renderer.domElement exists
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement); // Remove the canvas from the DOM
        }
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default SpaceScene;