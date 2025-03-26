import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as d3 from 'd3';

const InteractiveGlobe = ({ countries = [] }) => {
  const containerRef = useRef(null);
  const globeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  
  // Initialize the globe
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000033);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 300;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);
    
    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.minDistance = 150;
    controls.maxDistance = 400;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    
    // Earth sphere
    const earthGeometry = new THREE.SphereGeometry(100, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/api/placeholder/800/400'), // Placeholder for actual Earth texture
      bumpMap: new THREE.TextureLoader().load('/api/placeholder/800/400'), // Placeholder for bump map
      bumpScale: 1,
      specular: new THREE.Color(0x111111),
      shininess: 10
    });
    
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);
    globeRef.current = { scene, camera, renderer, controls, earthMesh };
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Load GeoJSON data to create country boundaries
    loadCountryData(scene, earthMesh);
    
    setIsLoading(false);
    
    return () => {
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);
  
  // Handle zooming to specified countries
  useEffect(() => {
    if (!globeRef.current || countries.length === 0 || isLoading) return;
    
    const { camera, controls } = globeRef.current;
    
    // Calculate the center point of all countries
    const center = calculateCenterPoint(countries);
    
    // Convert lat/lng to 3D coordinates
    const point = latLngToVector3(center.lat, center.lng, 150);
    
    // Animate camera to new position
    const startPosition = camera.position.clone();
    const endPosition = point.clone().multiplyScalar(1.5);
    
    // Look at the center point
    const lookAtPoint = point.clone();
    
    // Animation duration in seconds
    const duration = 2.5;
    const startTime = Date.now();
    
    function animateCamera() {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeProgress = easeInOutCubic(progress);
      
      // Interpolate camera position
      camera.position.lerpVectors(startPosition, endPosition, easeProgress);
      
      // Update controls target to look at center point
      controls.target.copy(lookAtPoint);
      controls.update();
      
      if (progress < 1) {
        requestAnimationFrame(animateCamera);
      }
    }
    
    animateCamera();
    
  }, [countries, isLoading]);
  
  // Helper function: Convert latitude and longitude to 3D vector
  const latLngToVector3 = (lat, lng, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    
    return new THREE.Vector3(x, y, z);
  };
  
  // Helper function: Calculate center point of multiple countries
  const calculateCenterPoint = (countries) => {
    if (countries.length === 0) return { lat: 0, lng: 0 };
    if (countries.length === 1) return { lat: countries[0].lat, lng: countries[0].lng };
    
    // Average the lat/lng values for simplicity
    // For more complex scenarios, you might want to use a more sophisticated algorithm
    const total = countries.reduce((acc, country) => {
      return {
        lat: acc.lat + country.lat,
        lng: acc.lng + country.lng
      };
    }, { lat: 0, lng: 0 });
    
    return {
      lat: total.lat / countries.length,
      lng: total.lng / countries.length
    };
  };
  
  // Easing function for smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  
  // Load country GeoJSON data and create meshes
  const loadCountryData = async (scene, earthMesh) => {
    // In a real app, you would load actual GeoJSON data
    // For this example, we'll create some placeholder country polygons
    
    const createCountryMesh = (countryName, coordinates, color) => {
      const shape = new THREE.Shape();
      
      // Create a simple polygon shape for demonstration
      coordinates.forEach((coord, i) => {
        const point = latLngToVector3(coord[0], coord[1], 101); // Slightly above the globe surface
        if (i === 0) {
          shape.moveTo(point.x, point.y);
        } else {
          shape.lineTo(point.x, point.y);
        }
      });
      
      const geometry = new THREE.ShapeGeometry(shape);
      const material = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { countryName };
      
      // Add hover interaction
      mesh.onBeforeRender = () => {
        if (hoveredCountry === countryName) {
          mesh.position.set(
            mesh.position.x * 1.01,
            mesh.position.y * 1.01,
            mesh.position.z * 1.01
          );
          mesh.material.opacity = 0.9;
        } else {
          mesh.position.set(0, 0, 0);
          mesh.material.opacity = 0.7;
        }
      };
      
      scene.add(mesh);
      return mesh;
    };
    
    // Example countries (in a real app, these would come from GeoJSON)
    const sampleCountries = [
      {
        name: "United States",
        color: 0x3388ff,
        coords: [
          [37, -100],
          [37, -120],
          [45, -120],
          [45, -100]
        ]
      },
      {
        name: "Brazil",
        color: 0x33cc33,
        coords: [
          [-10, -55],
          [-10, -40],
          [-20, -40],
          [-20, -55]
        ]
      },
      {
        name: "Russia",
        color: 0xff3333,
        coords: [
          [60, 30],
          [60, 100],
          [70, 100],
          [70, 30]
        ]
      }
    ];
    
    // Create meshes for each country
    sampleCountries.forEach(country => {
      createCountryMesh(country.name, country.coords, country.color);
    });
    
    // Implement country hovering
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    containerRef.current.addEventListener('mousemove', (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, globeRef.current.camera);
      const intersects = raycaster.intersectObjects(scene.children);
      
      if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object.userData && object.userData.countryName) {
          setHoveredCountry(object.userData.countryName);
        } else {
          setHoveredCountry(null);
        }
      } else {
        setHoveredCountry(null);
      }
    });
  };
  
  return (
    <div className="relative w-full h-screen">
      <div 
        ref={containerRef} 
        className="w-full h-full"
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <p className="text-lg text-white">Loading globe...</p>
        </div>
      )}
      {hoveredCountry && (
        <div className="absolute px-4 py-2 text-white bg-gray-800 rounded-md top-4 left-4">
          {hoveredCountry}
        </div>
      )}
    </div>
  );
};

export default InteractiveGlobe;