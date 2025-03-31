import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "globe.gl";
import europeGeoJSON from "./geoJson.json"; // Import your Natural Earth GeoJSON file
import FranceVideo from "../../assets/videos/France2.mp4";
import GermanyVideo from "../../assets/videos/Germany2.mp4";
import ItalyVideo from "../../assets/videos/Italy2.mp4";
import SpainVideo from "../../assets/videos/Spain2.mp4";

const GlobeComponent = ({ cities, continent = "Europe" }) => {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const globeInstanceRef = useRef(null);
  const [highlightedCountry, setHighlightedCountry] = useState(null);
  
  // Track both videos for crossfade
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);
  
  // Default video
  const defaultVideo = GermanyVideo;
  const [activeVideoSrc, setActiveVideoSrc] = useState(defaultVideo);
  const [previousVideoSrc, setPreviousVideoSrc] = useState(defaultVideo);

  // Define visible countries
  const visibleCountries = ["France", "Germany", "Spain", "Italy"];

  // Define country-specific colors
  const countryColors = { 
    France: "rgba(0, 35, 149, 0.3)",  // French flag blue
    Germany: "rgba(221, 0, 0, 0.3)",  // German flag red
    Italy: "rgba(0, 146, 70, 0.3)",   // Italian flag green
    Spain: "rgba(255, 196, 0, 0.3)"   // Spanish flag yellow
  };
  
  // For highlighted states, use secondary colors from the flags
  const highlightedCountryColors = {
    France: "rgba(237, 41, 57, 0.8)",  // French flag red
    Germany: "rgba(255, 206, 0, 0.8)", // German flag gold
    Italy: "rgba(206, 43, 55, 0.8)",   // Italian flag red
    Spain: "rgba(198, 11, 30, 0.8)"    // Spanish flag red
  };

  // Define background videos for each country
  const countryVideos = {
    France: FranceVideo,
    Germany: GermanyVideo,
    Italy: ItalyVideo,
    Spain: SpainVideo,
  };

  // We're no longer using this function since we've moved the video changing logic
  // directly into the hover handler for more reliable behavior
  const changeVideo = useCallback((newVideoSrc) => {
    console.log("This function is no longer used");
  }, []);

  // Update dimensions on resize
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
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Initialize videos when component mounts or when activeVideoSrc changes
  useEffect(() => {
    console.log("Setting up video with source:", activeVideoSrc);
    
    if (currentVideoRef.current) {
      currentVideoRef.current.src = activeVideoSrc;
      currentVideoRef.current.play().catch(e => console.log("Video play prevented:", e));
    }
    
    if (nextVideoRef.current && !nextVideoRef.current.src) {
      nextVideoRef.current.src = activeVideoSrc;
      nextVideoRef.current.play().catch(e => console.log("Video play prevented:", e));
    }
  }, [activeVideoSrc]);

  // Initialize globe when component mounts (only once)
  useEffect(() => {
    if (!globeRef.current) return;

    const globe = Globe()(globeRef.current);
    globeInstanceRef.current = globe;

    // Set focused view on Europe
    const europeView = { lat: 44, lng: 10, altitude: 0.75 };

    // Customize the globe appearance
    globe
      .globeImageUrl("")
      .backgroundColor("rgba(0, 0, 0, 0)") // Transparent background
      .pointOfView(europeView, 100)
      .showGlobe(false)
      .showAtmosphere(false);

    const controls = globe.controls();
    controls.autoRotate = false;
    controls.enableZoom = true;
    controls.minDistance = 90;
    controls.maxDistance = 500;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.minAzimuthAngle = -Infinity;
    controls.maxAzimuthAngle = Infinity;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.mouseButtons.wheel = null;
    controls.touches.two = null;

    const getCountryName = (feature) =>
      feature.properties.NAME ||
      feature.properties.name ||
      feature.properties.ADMIN ||
      feature.properties.NAME_LONG ||
      "";

    const filteredGeoJSON = {
      type: "FeatureCollection",
      features: europeGeoJSON.features.filter((feature) => {
        const countryName = getCountryName(feature);
        return visibleCountries.includes(countryName);
      }),
    };

    const polygonsData = filteredGeoJSON.features.map((feature) => {
      const countryName = getCountryName(feature);
      return {
        properties: {
          name: countryName,
          id: countryName.toLowerCase(),
        },
        geometry: feature.geometry,
      };
    });

    // Function to handle polygon hover event
    const handlePolygonHover = (polygon) => {
      if (polygon) {
        const countryName = polygon.properties.name;
        const videoSrc = countryVideos[countryName];
        console.log("Hover over:", countryName, "Video:", videoSrc);
        
        // Always force the video change regardless of current state
        if (videoSrc) {
          // Force setting of previous video first to ensure transition happens
          setPreviousVideoSrc(activeVideoSrc);
          setActiveVideoSrc(videoSrc);
          
          // Then call changeVideo to handle the transition
          if (nextVideoRef.current) {
            nextVideoRef.current.src = videoSrc;
            nextVideoRef.current.style.opacity = "0";
            nextVideoRef.current.currentTime = 0;
            
            const playPromise = nextVideoRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch(e => console.log("Video play prevented:", e));
            }
            
            // Start transition with requestAnimationFrame
            let start;
            const duration = 1000; 
            
            function fadeAnimation(timestamp) {
              if (!start) start = timestamp;
              const elapsed = timestamp - start;
              const progress = Math.min(elapsed / duration, 1);
              
              // Fade out current video
              if (currentVideoRef.current) {
                currentVideoRef.current.style.opacity = 1 - progress;
              }
              
              // Fade in next video
              if (nextVideoRef.current) {
                nextVideoRef.current.style.opacity = progress;
              }
              
              if (progress < 1) {
                requestAnimationFrame(fadeAnimation);
              } else {
                // Swap references when animation completes
                const temp = currentVideoRef.current;
                currentVideoRef.current = nextVideoRef.current;
                nextVideoRef.current = temp;
                
                // Reset next video opacity
                if (nextVideoRef.current) {
                  nextVideoRef.current.style.opacity = "0";
                }
              }
            }
            
            requestAnimationFrame(fadeAnimation);
          }
        }
        setHighlightedCountry(countryName);
      } else {
        // Do the same direct manipulation for default video
        setPreviousVideoSrc(activeVideoSrc);
        setActiveVideoSrc(defaultVideo);
        
        if (nextVideoRef.current) {
          nextVideoRef.current.src = defaultVideo;
          nextVideoRef.current.style.opacity = "0";
          nextVideoRef.current.currentTime = 0;
          
          // Similar transition logic...
          nextVideoRef.current.play().catch(e => console.log("Video play prevented:", e));
          
          let start;
          const duration = 1000;
          
          function fadeAnimation(timestamp) {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            
            if (currentVideoRef.current) currentVideoRef.current.style.opacity = 1 - progress;
            if (nextVideoRef.current) nextVideoRef.current.style.opacity = progress;
            
            if (progress < 1) {
              requestAnimationFrame(fadeAnimation);
            } else {
              const temp = currentVideoRef.current;
              currentVideoRef.current = nextVideoRef.current;
              nextVideoRef.current = temp;
              if (nextVideoRef.current) nextVideoRef.current.style.opacity = "0";
            }
          }
          
          requestAnimationFrame(fadeAnimation);
        }
        
        setHighlightedCountry(null);
      }
    };

    globe
      .polygonsData(polygonsData)
      .polygonSideColor(() => "rgba(189, 195, 199, 0.2)")
      .polygonStrokeColor(() => "rgba(236, 240, 241, 0.8)")
      .polygonsTransitionDuration(300)
      .onPolygonHover(handlePolygonHover)
      .onPolygonClick((polygon) => {
        if (polygon && polygon.properties) {
          const country = polygon.properties.name;
          const targetCity = cities?.find((city) => city.country === country);
          if (targetCity && targetCity.url) {
            window.open(targetCity.url, "_blank");
          }
        }
      });

    return () => {
      if (globeInstanceRef.current) {
        globeInstanceRef.current._destructor();
      }
    };
  }, [cities, changeVideo, defaultVideo]);

  // Update only the styling properties when highlightedCountry changes
  useEffect(() => {
    if (!globeInstanceRef.current) return;
    
    const getCountryColor = (d) => {
      return highlightedCountry === d.properties.name
        ? highlightedCountryColors[d.properties.name]
        : countryColors[d.properties.name];
    };

    const getCountryAltitude = (d) =>
      d.properties.name === highlightedCountry ? 0.08 : 0.06;

    globeInstanceRef.current
      .polygonCapColor(getCountryColor)
      .polygonAltitude(getCountryAltitude);
      
  }, [highlightedCountry]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden" 
      style={{ 
        height: dimensions.height,
        backgroundColor: "black" // Black background to prevent any grey flash
      }}
    >
      {/* Background placeholder to prevent grey flash */}
      <div className="absolute inset-0 z-0 bg-transparent"></div>
      
      {/* First video (starts as active) */}
      <video
        ref={currentVideoRef}
        className="absolute inset-0 object-cover w-full h-full z-1"
        src={activeVideoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{ 
          opacity: 1,
          transition: "none", // We handle transition manually
        }}
      />
      
      {/* Second video (for crossfade) */}
      <video
        ref={nextVideoRef}
        className="absolute inset-0 object-cover w-full h-full z-1"
        src={previousVideoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{ 
          opacity: 0,
          transition: "none", // We handle transition manually
        }}
      />

      {/* Semi-transparent overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: "rgba(0, 0, 20, 0.5)",
          transition: "all 0.1s ease-in-out",
        }}
      />

      {/* Display current country name */}
      {highlightedCountry && (
        <div
          className="absolute left-0 right-0 z-30 text-center top-5"
          style={{
            color: "#FFFFFF",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {highlightedCountry}
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
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default GlobeComponent;