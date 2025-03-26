import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const CustomGlobe = ({ cities = [], continent = 'World' }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const earthRef = useRef(null);
  const markersRef = useRef([]);
  const [hoveredCity, setHoveredCity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const animationsRef = useRef({});
  
  // Initialize the 3D scene
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050a30);
    sceneRef.current = scene;
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 280;
    cameraRef.current = camera;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 150;
    controls.maxDistance = 400;
    controlsRef.current = controls;
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create Earth sphere
    createEarth();
    
    // Create stars background
    createStarField();
    
    // Add window resize handler
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();
    
    // Add city markers
    createCityMarkers();
    
    // Intro animation sequence
    const tl = gsap.timeline();
    
    // Initial loading animation
    tl.from(camera.position, {
      z: 600,
      duration: 2,
      ease: "power3.out",
      onComplete: () => {
        setIsLoading(false);
      }
    });
    
    // Auto-rotation for the earth (subtle)
    gsap.to(earthRef.current.rotation, {
      y: Math.PI * 2,
      duration: 120,
      ease: "none",
      repeat: -1
    });
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Cleanup Three.js resources
      if (containerRef.current && rendererRef.current && rendererRef.current.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Kill all GSAP animations
      Object.values(animationsRef.current).forEach(anim => anim.kill());
      gsap.killTweensOf(camera.position);
      if (earthRef.current) {
        gsap.killTweensOf(earthRef.current.rotation);
      }
      
      // Dispose Three.js objects
      sceneRef.current.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      rendererRef.current.dispose();
    };
  }, []);
  
  // Create Earth with atmosphere
  const createEarth = () => {
    if (!sceneRef.current) return;
    
    // Earth main sphere
    const radius = 100;
    const segments = 64;
    const earthGeometry = new THREE.SphereGeometry(radius, segments, segments);
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
      specular: 0x112233,
      shininess: 30,
      map: new THREE.TextureLoader().load('/api/placeholder/800/400'), // Placeholder for Earth texture
    });
    
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    sceneRef.current.add(earth);
    earthRef.current = earth;
    
    // Atmosphere glow
    const glowGeometry = new THREE.SphereGeometry(radius + 2, segments, segments);
    const glowMaterial = new THREE.MeshPhongMaterial({
      color: 0x0077ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    sceneRef.current.add(glow);
    
    // Cloud layer (subtle)
    const cloudGeometry = new THREE.SphereGeometry(radius + 1, segments, segments);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/api/placeholder/800/400'), // Placeholder for cloud texture
      transparent: true,
      opacity: 0.4
    });
    
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    sceneRef.current.add(clouds);
    
    // Add slow cloud rotation
    gsap.to(clouds.rotation, {
      y: Math.PI * 2,
      duration: 80,
      ease: "none",
      repeat: -1
    });
  };
  
  // Create a star field background
  const createStarField = () => {
    if (!sceneRef.current) return;
    
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      // Position (random distribution on a sphere much larger than earth)
      const radius = 800 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Color (slightly random but mostly white)
      colors[i * 3] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      
      // Size (random)
      sizes[i] = Math.random() * 2;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const starMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const stars = new THREE.Points(starGeometry, starMaterial);
    sceneRef.current.add(stars);
    
    // Add subtle twinkling animation
    gsap.to(starMaterial, {
      opacity: 0.5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };
  
  // Create city markers on the globe
  const createCityMarkers = () => {
    if (!sceneRef.current || !cities.length) return;
    
    markersRef.current = [];
    
    cities.forEach((city, index) => {
      // Convert lat/lng to 3D position
      const position = latLngToPosition(city.lat, city.lng, 101);
      
      // Create marker
      const markerGeometry = new THREE.SphereGeometry(1.5, 16, 16);
      const markerMaterial = new THREE.MeshPhongMaterial({
        color: 0xff3333,
        emissive: 0xff0000,
        emissiveIntensity: 0.5,
        specular: 0xffffff
      });
      
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      marker.userData = {
        type: 'marker',
        city: city
      };
      
      // Add to scene and store reference
      sceneRef.current.add(marker);
      markersRef.current.push(marker);
      
      // Create glow effect
      const glowGeometry = new THREE.SphereGeometry(2, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff8888,
        transparent: true,
        opacity: 0.4,
        side: THREE.BackSide
      });
      
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.copy(position);
      sceneRef.current.add(glow);
      markersRef.current.push(glow);
      
      // Create pin line
      const lineGeometry = new THREE.BufferGeometry();
      const lineStart = position.clone();
      const lineEnd = position.clone().normalize().multiplyScalar(100);
      
      const vertices = new Float32Array([
        lineStart.x, lineStart.y, lineStart.z,
        lineEnd.x, lineEnd.y, lineEnd.z
      ]);
      
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0xff3333, 
        transparent: true, 
        opacity: 0.6 
      });
      
      const line = new THREE.Line(lineGeometry, lineMaterial);
      sceneRef.current.add(line);
      markersRef.current.push(line);
      
      // Create text label
      const labelDiv = document.createElement('div');
      labelDiv.className = 'absolute hidden px-2 py-1 text-sm text-white transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded pointer-events-none';
      labelDiv.textContent = `${city.name}, ${city.country}`;
      containerRef.current.appendChild(labelDiv);
      
      marker.userData.labelElement = labelDiv;
      
      // Create entrance animation with staggered delay
      const delay = 2 + index * 0.2;
      
      // Start from scale 0
      marker.scale.set(0, 0, 0);
      glow.scale.set(0, 0, 0);
      line.material.opacity = 0;
      
      // Marker pop-in animation
      animationsRef.current[`marker-${index}`] = gsap.to(marker.scale, {
        x: 1, y: 1, z: 1,
        duration: 1,
        delay: delay,
        ease: "elastic.out(1, 0.3)"
      });
      
      // Glow fade-in
      animationsRef.current[`glow-${index}`] = gsap.to(glow.scale, {
        x: 1, y: 1, z: 1,
        duration: 1,
        delay: delay + 0.1,
        ease: "elastic.out(1, 0.3)"
      });
      
      // Line draw animation
      animationsRef.current[`line-${index}`] = gsap.to(line.material, {
        opacity: 0.6,
        duration: 1,
        delay: delay + 0.2,
        ease: "power2.inOut"
      });
      
      // Add pulse animation that repeats
      setTimeout(() => {
        animationsRef.current[`pulse-${index}`] = gsap.to(glow.scale, {
          x: 1.5, y: 1.5, z: 1.5,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }, (delay + 1) * 1000);
    });
    
    // Setup interaction
    setupInteraction();
    
    // Zoom to all cities
    setTimeout(() => {
      zoomToContinent();
    }, 2500);
  };
  
  // Convert lat/lng to 3D position
  const latLngToPosition = (lat, lng, radius = 100) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    
    return new THREE.Vector3(x, y, z);
  };
  
  // Setup mouse interaction
  const setupInteraction = () => {
    if (!containerRef.current || !sceneRef.current || !cameraRef.current) return;
    
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    const onMouseMove = (event) => {
      // Calculate mouse position in normalized device coordinates
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Update the raycaster
      raycaster.setFromCamera(mouse, cameraRef.current);
      
      // Find intersections
      const intersects = raycaster.intersectObjects(markersRef.current);
      
      // Reset all markers
      markersRef.current.forEach(object => {
        if (object.userData && object.userData.type === 'marker') {
          // Hide all labels
          if (object.userData.labelElement) {
            object.userData.labelElement.classList.add('hidden');
          }
          
          // Reset any hover animations
          gsap.to(object.scale, {
            x: 1, y: 1, z: 1,
            duration: 0.3,
            overwrite: true
          });
        }
      });
      
      // Handle intersection
      if (intersects.length > 0) {
        const object = intersects[0].object;
        
        if (object.userData && object.userData.type === 'marker') {
          const cityData = object.userData.city;
          
          // Update hovered city state
          setHoveredCity(cityData);
          
          // Scale up on hover
          gsap.to(object.scale, {
            x: 1.8, y: 1.8, z: 1.8,
            duration: 0.3,
            ease: "back.out(1.7)",
            overwrite: true
          });
          
          // Show label
          if (object.userData.labelElement) {
            // Position the label at the right spot in 2D space
            const vector = new THREE.Vector3();
            vector.copy(object.position);
            vector.project(cameraRef.current);
            
            const x = (vector.x * 0.5 + 0.5) * containerRef.current.clientWidth;
            const y = (vector.y * -0.5 + 0.5) * containerRef.current.clientHeight;
            
            object.userData.labelElement.style.left = `${x}px`;
            object.userData.labelElement.style.top = `${y - 30}px`;
            object.userData.labelElement.classList.remove('hidden');
          }
        }
      } else {
        setHoveredCity(null);
      }
    };
    
    const onClick = (event) => {
      // Calculate mouse position in normalized device coordinates
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Update the raycaster
      raycaster.setFromCamera(mouse, cameraRef.current);
      
      // Find intersections
      const intersects = raycaster.intersectObjects(markersRef.current);
      
      if (intersects.length > 0) {
        const object = intersects[0].object;
        
        if (object.userData && object.userData.type === 'marker') {
          const cityData = object.userData.city;
          
          // Click animation
          gsap.to(object.scale, {
            x: 0.8, y: 0.8, z: 0.8,
            duration: 0.1,
            ease: "power2.in",
            onComplete: () => {
              gsap.to(object.scale, {
                x: 1.8, y: 1.8, z: 1.8,
                duration: 0.2,
                ease: "power2.out",
                onComplete: () => {
                  // Navigate to URL
                  if (cityData.url) {
                    window.location.href = cityData.url;
                  }
                }
              });
            }
          });
        }
      }
    };
    
    containerRef.current.addEventListener('mousemove', onMouseMove);
    containerRef.current.addEventListener('click', onClick);
    
    // Store cleanup function
    const cleanup = () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', onMouseMove);
        containerRef.current.removeEventListener('click', onClick);
        
        // Remove labels
        markersRef.current.forEach(object => {
          if (object.userData && object.userData.labelElement) {
            containerRef.current.removeChild(object.userData.labelElement);
          }
        });
      }
    };
    
    return cleanup;
  };
  
  // Calculate center point of cities
  const calculateCenterPoint = () => {
    if (cities.length === 0) return { lat: 0, lng: 0 };
    if (cities.length === 1) return { lat: cities[0].lat, lng: cities[0].lng };
    
    const total = cities.reduce((acc, city) => {
      return {
        lat: acc.lat + city.lat,
        lng: acc.lng + city.lng
      };
    }, { lat: 0, lng: 0 });
    
    return {
      lat: total.lat / cities.length,
      lng: total.lng / cities.length
    };
  };
  
  // Zoom to fit all cities
  const zoomToContinent = () => {
    if (!cameraRef.current || !controlsRef.current || cities.length === 0) return;
    
    const center = calculateCenterPoint();
    const centerPoint = latLngToPosition(center.lat, center.lng, 100);
    
    // Calculate appropriate camera position
    const cameraTarget = centerPoint.clone();
    const cameraPosition = centerPoint.clone().multiplyScalar(1.8);
    
    // Animate camera
    gsap.to(cameraRef.current.position, {
      x: cameraPosition.x,
      y: cameraPosition.y,
      z: cameraPosition.z,
      duration: 2,
      ease: "power2.inOut"
    });
    
    // Animate controls target
    gsap.to(controlsRef.current.target, {
      x: cameraTarget.x,
      y: cameraTarget.y,
      z: cameraTarget.z,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        controlsRef.current.update();
      }
    });
  };
  
  // Effect to handle cities prop change
  useEffect(() => {
    if (!isLoading && sceneRef.current) {
      // Clear existing markers
      markersRef.current.forEach(marker => {
        if (marker.userData && marker.userData.labelElement) {
          containerRef.current.removeChild(marker.userData.labelElement);
        }
        sceneRef.current.remove(marker);
      });
      
      // Create new markers
      createCityMarkers();
    }
  }, [cities, isLoading]);
  
  return (
    <div className="relative w-full h-full">
      {/* Info panel */}
      <div className="absolute z-10 p-4 text-white bg-black rounded top-4 left-4 bg-opacity-40">
        <h2 className="mb-2 text-xl font-bold">{continent} Explorer</h2>
        {hoveredCity ? (
          <div>
            <p className="font-medium">{hoveredCity.name}, {hoveredCity.country}</p>
            <p className="mt-1 text-sm text-gray-300">Click to explore</p>
          </div>
        ) : (
          <p className="text-sm">Hover over a city to see details</p>
        )}
      </div>
      
      {/* Globe container */}
      <div 
        ref={containerRef} 
        className="w-full h-full"
      />
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-200 rounded-full border-t-blue-500 animate-spin"></div>
            <p className="text-lg text-white">Loading globe...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomGlobe;