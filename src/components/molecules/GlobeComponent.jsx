import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "globe.gl";
import europeGeoJSON from "./geoJson.json"; // Import your Natural Earth GeoJSON file
import PlacesVideo from "/videos/Places.mp4"; // Single video for continuous loop

const GlobeComponent = ({ cities, continent = "Europe" }) => {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const globeInstanceRef = useRef(null);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Define visible countries
  const visibleCountries = ["France", "Germany", "Spain", "Italy"];

  const processEuropeanTerritories = useCallback((features) => {
    const getCountryName = (feature) =>
      feature.properties.NAME ||
      feature.properties.name ||
      feature.properties.ADMIN ||
      feature.properties.NAME_LONG ||
      "";
    
    // First filter for countries we want to display
    let filteredFeatures = features.filter((feature) => {
      const countryName = getCountryName(feature);
      return visibleCountries.includes(countryName);
    });
    
    // Process each feature - special handling for France
    const processedFeatures = filteredFeatures.map(feature => {
      const countryName = getCountryName(feature);
      
      // Only need special processing for France (to exclude French Guiana, etc.)
      if (countryName === "France" && 
          feature.geometry && 
          feature.geometry.type === "MultiPolygon") {
        
        // Create a new feature with the same properties
        const europeanFrance = {
          ...feature,
          geometry: {
            ...feature.geometry,
            coordinates: [] // We'll filter coordinates to include only European parts
          }
        };
        
        // Filter the coordinates to include only European polygons
        feature.geometry.coordinates.forEach(polygon => {
          // Sample the first coordinate from the polygon to check if it's in Europe
          const sampleCoord = polygon[0][0];
          const longitude = sampleCoord[0];
          const latitude = sampleCoord[1];
          
          // Define rough bounds for continental Europe
          const inEurope = longitude > -10 && longitude < 40 && 
                           latitude > 36 && latitude < 70;
          
          if (inEurope) {
            // If this polygon is in Europe, keep it
            europeanFrance.geometry.coordinates.push(polygon);
          }
        });
        
        return europeanFrance;
      }
      
      // For other countries, no special processing needed
      return feature;
    });
    
    // Transform to the format needed for globe.gl
    return processedFeatures.map((feature) => {
      const countryName = getCountryName(feature);
      return {
        properties: {
          name: countryName,
          id: countryName.toLowerCase(),
        },
        geometry: feature.geometry,
      };
    });
  }, [visibleCountries]);

  // Define country-specific colors - using constants to avoid recreating objects
  const countryColors = { 
    France: "rgba(0, 35, 149, 0.3)",  // French flag blue
    Germany: "rgba(221, 0, 0, 0.3)",  // German flag red
    Italy: "rgba(0, 146, 70, 0.3)",   // Italian flag green
    Spain: "rgba(255, 196, 0, 0.3)"   // Spanish flag yellow
  };

  // Define country centroids for labels (approximate centers of countries)
  const countryCentroids = [
    { lat: 46.0034, lng: 2.8883, name: 'France', country: 'France' },
    { lat: 50.0657, lng: 9.4515, name: 'Germany', country: 'Germany' },
    { lat: 42.5047, lng: 12.5674, name: 'Italy', country: 'Italy' },
    { lat: 40.4637, lng: -2.7492, name: 'Spain', country: 'Spain' }
  ];

  // Debounce function to prevent too many operations during resize
  const debounce = useCallback((func, delay) => {
    let timerId;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), delay);
    };
  }, []);

  // Update dimensions on resize with debouncing
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = Math.min(window.innerWidth, 1200);
        const height =
          window.innerHeight < 500
            ? window.innerHeight * 0.7
            : window.innerWidth < 768
            ? window.innerHeight * 0.6
            : window.innerHeight * 0.9;

        setDimensions({ width, height });
      }
    };

    updateDimensions();
    
    // Debounce the resize event to prevent excessive recalculations
    const debouncedUpdateDimensions = debounce(updateDimensions, 100);
    window.addEventListener("resize", debouncedUpdateDimensions);
    
    return () => window.removeEventListener("resize", debouncedUpdateDimensions);
  }, [debounce]);

  // Load and play the Places video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = PlacesVideo;
      videoRef.current.load();
      
      // Listen for when video starts playing
      const handleVideoLoaded = () => {
        console.log("Places video loaded and playing");
        setVideoLoaded(true);
      };
      
      videoRef.current.oncanplaythrough = handleVideoLoaded;
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Places video started playing"))
          .catch(e => {
            console.log("Video play prevented:", e);
            // Mark as loaded even if autoplay fails (user might need to interact first)
            handleVideoLoaded();
          });
      }
    }
  }, []);

  // Initialize globe once when component mounts
  useEffect(() => {
    if (!globeRef.current) return;
    
    // Only create the globe instance if it doesn't exist
    if (!globeInstanceRef.current) {
      const globe = Globe()(globeRef.current);
      globeInstanceRef.current = globe;
      
      // Set focused view on Europe based on device size
      const isMobile = window.innerWidth < 768;
      const europeView = isMobile 
        ? { lat: 38, lng: 5, altitude: 0.75 }  // Mobile view
        : { lat: 44, lng: 10, altitude: 0.75 }; // Desktop/tablet view
  
      // Customize the globe appearance - minimal settings for better performance
      globe
        .globeImageUrl("")
        .backgroundColor("rgba(0, 0, 0, 0)") // Transparent background
        .pointOfView(europeView, 0) // Immediate transition, no animation
        .showGlobe(false)
        .showAtmosphere(false);
  
      const controls = globe.controls();
      // Disable rotation and movement but allow mouse interaction for clicking countries
      controls.enabled = true;       // Enable controls for interaction
      controls.autoRotate = false;   // No auto-rotation
      controls.enableRotate = false; // No manual rotation
      controls.enablePan = false;    // No panning
      controls.enableZoom = false;   // No zooming
      controls.enableDamping = false;// No damping
  
      // Process GeoJSON data with our new function
      const polygonsData = processEuropeanTerritories(europeGeoJSON.features);
      
      // Set the data once and never change it
      globe
        .polygonsData(polygonsData)
        .polygonSideColor(() => "rgba(189, 195, 199, 0.2)")
        .polygonStrokeColor(() => "rgba(236, 240, 241, 0.8)")
        .polygonsTransitionDuration(200)
        .polygonCapColor((d) => countryColors[d.properties.name] || countryColors.Germany)
        .polygonAltitude(() => 0.06); // Set all countries to the same altitude
      
      // Use HTML elements for country labels at centroids instead of capitals
      globe
        .htmlElementsData(countryCentroids)
        .htmlElement(d => {
          const el = document.createElement('div');
          el.className = 'country-label';
          el.textContent = d.country;
          el.style.color = 'white';
          el.style.fontWeight = 'bold';
          el.style.fontSize = '14px';
          el.style.textAlign = 'center';
          el.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.8), 0 0 3px rgba(0, 0, 0, 0.8)';
          el.style.pointerEvents = 'none'; // Don't interfere with mouse events
          el.style.userSelect = 'none'; // Prevent text selection
          el.style.transform = 'translate(-50%, -50%)'; // Center the element
          el.style.whiteSpace = 'nowrap'; // Keep text on one line
          return el;
        })
        .htmlAltitude(0.1) // Keep slightly above the polygons
        .htmlLat(d => d.lat)
        .htmlLng(d => d.lng);
    }
    
    return () => {
      // Only clean up globe on component unmount
      if (globeInstanceRef.current) {
        globeInstanceRef.current._destructor();
        globeInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array means this runs only once on mount
  
  // Handle click events on countries
  useEffect(() => {
    if (!globeInstanceRef.current) return;
    
    // Set up click handler for countries
    globeInstanceRef.current.onPolygonClick((polygon) => {
      if (polygon && polygon.properties) {
        const country = polygon.properties.name;
        const targetCity = cities?.find((city) => city.country === country);
        if (targetCity && targetCity.url) {
          window.open(targetCity.url, "_blank");
        }
      }
    });
      
    return () => {
      // Clean up event handlers but don't destroy globe instance
      if (globeInstanceRef.current) {
        globeInstanceRef.current.onPolygonClick(null);
      }
    };
  }, [cities]);

  // Force the globe to stay in position
  useEffect(() => {
    // This is a backup to make sure the globe stays in place
    // It resets the view to the initial position periodically
    if (!globeInstanceRef.current) return;
    
    // Reset the view every second (overkill but ensures it stays fixed)
    const updateViewByDevice = () => {
      const isMobile = window.innerWidth < 768;
      const europeView = isMobile 
        ? { lat: 38, lng: 5, altitude: .75 }  // Mobile view
        : { lat: 43, lng: 10, altitude: .75 }; // Desktop/tablet view
      
      if (globeInstanceRef.current) {
        globeInstanceRef.current.pointOfView(europeView, 0);
      }
    };
    
    // Set initial view
    updateViewByDevice();
    
    // Continue setting view periodically
    const intervalId = setInterval(updateViewByDevice, 1000);
    
    // Also update when window resizes
    window.addEventListener('resize', updateViewByDevice);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateViewByDevice);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden" 
      style={{ 
        height: dimensions.height,
        backgroundColor: "rgba(0,0,0,1)" // Black background to prevent any grey flash
      }}
    >
      {/* Background placeholder to prevent grey flash */}
      <div className="absolute inset-0 z-0 bg-black"></div>
      
      {/* Single video playing in loop */}
      <video
        ref={videoRef}
        className="absolute inset-0 object-cover w-full h-full z-1"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Loading indicator - show while video is loading */}
      {!videoLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-lg text-white">Loading...</div>
        </div>
      )}

      {/* Globe container */}
      <div
        ref={globeRef}
        className="relative z-20"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          // Allow pointer events for country clicks
          pointerEvents: "auto" 
        }}
      />
    </div>
  );
};

export default GlobeComponent;