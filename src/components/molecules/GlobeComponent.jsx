import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Globe from "globe.gl";
import europeGeoJSON from "./geoJson.json"; // Import your Natural Earth GeoJSON file
import FranceVideo from "../../assets/videos/France3.mp4";
import GermanyVideo from "../../assets/videos/Germany3.mp4";
import ItalyVideo from "../../assets/videos/Italy3.mp4";
import SpainVideo from "../../assets/videos/Spain3.mp4";

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
  const fadeAnimationRef = useRef(null);

  // Define visible countries
  const visibleCountries = ["France", "Germany", "Spain", "Italy"];

  // Define country-specific colors - using useMemo to avoid recreating objects
  const countryColors = useMemo(() => ({ 
    France: "rgba(0, 35, 149, 0.3)",  // French flag blue
    Germany: "rgba(221, 0, 0, 0.3)",  // German flag red
    Italy: "rgba(0, 146, 70, 0.3)",   // Italian flag green
    Spain: "rgba(255, 196, 0, 0.3)"   // Spanish flag yellow
  }), []);
  
  // For highlighted states, use secondary colors from the flags
  const highlightedCountryColors = useMemo(() => ({
    France: "rgba(237, 41, 57, 0.8)",  // French flag red
    Germany: "rgba(255, 206, 0, 0.8)", // German flag gold
    Italy: "rgba(206, 43, 55, 0.8)",   // Italian flag red
    Spain: "rgba(198, 11, 30, 0.8)"    // Spanish flag red
  }), []);

  // Define background videos for each country
  const countryVideos = useMemo(() => ({
    France: FranceVideo,
    Germany: GermanyVideo,
    Italy: ItalyVideo,
    Spain: SpainVideo,
  }), []);

  // Debounce function to prevent too many video transitions
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

  // Preload videos
  useEffect(() => {
    // Preload all videos to improve performance
    Object.values(countryVideos).forEach(videoSrc => {
      const preloadVideo = document.createElement('video');
      preloadVideo.src = videoSrc;
      preloadVideo.preload = 'auto';
      preloadVideo.load();
    });
  }, [countryVideos]);

  // Initialize videos when component mounts or when activeVideoSrc changes
  useEffect(() => {
    if (currentVideoRef.current) {
      currentVideoRef.current.src = activeVideoSrc;
      currentVideoRef.current.load(); // Ensures video is loaded before playing
      currentVideoRef.current.play().catch(e => console.log("Video play prevented:", e));
    }
    
    if (nextVideoRef.current && !nextVideoRef.current.src) {
      nextVideoRef.current.src = activeVideoSrc;
      nextVideoRef.current.load(); // Ensures video is loaded before playing
      nextVideoRef.current.play().catch(e => console.log("Video play prevented:", e));
    }
  }, [activeVideoSrc]);

  // Handle video transition with optimized animation
  const handleVideoTransition = useCallback((newVideoSrc) => {
    // Cancel any ongoing animation
    if (fadeAnimationRef.current) {
      cancelAnimationFrame(fadeAnimationRef.current);
    }

    setPreviousVideoSrc(activeVideoSrc);
    setActiveVideoSrc(newVideoSrc);
    
    if (nextVideoRef.current) {
      nextVideoRef.current.src = newVideoSrc;
      nextVideoRef.current.style.opacity = "0";
      nextVideoRef.current.load();
      
      const playPromise = nextVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log("Video play prevented:", e));
      }
      
      // Start transition with requestAnimationFrame
      let start;
      const duration = 800; // Reduced from 1000ms to 800ms for better performance
      
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
          fadeAnimationRef.current = requestAnimationFrame(fadeAnimation);
        } else {
          // Swap references when animation completes
          const temp = currentVideoRef.current;
          currentVideoRef.current = nextVideoRef.current;
          nextVideoRef.current = temp;
          
          // Reset next video opacity
          if (nextVideoRef.current) {
            nextVideoRef.current.style.opacity = "0"; // Set to 0 instead of 0.5
          }
          
          fadeAnimationRef.current = null;
        }
      }
      
      fadeAnimationRef.current = requestAnimationFrame(fadeAnimation);
    }
  }, [activeVideoSrc]);

  // Initialize globe once when component mounts
  useEffect(() => {
    if (!globeRef.current) return;
    
    // Only create the globe instance if it doesn't exist
    if (!globeInstanceRef.current) {
      const globe = Globe()(globeRef.current);
      globeInstanceRef.current = globe;
      
      // Set focused view on Europe
      const europeView = { lat: 44, lng: 10, altitude: 0.75 };
  
      // Customize the globe appearance - minimal settings for better performance
      globe
        .globeImageUrl("")
        .backgroundColor("rgba(0, 0, 0, 0)") // Transparent background
        .pointOfView(europeView, 0) // Immediate transition, no animation
        .showGlobe(false)
        .showAtmosphere(false);
  
      const controls = globe.controls();
      controls.autoRotate = false;
      controls.minDistance = 90;
      controls.maxDistance = 500;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
  
      // Process GeoJSON data once
      const getCountryName = (feature) =>
        feature.properties.NAME ||
        feature.properties.name ||
        feature.properties.ADMIN ||
        feature.properties.NAME_LONG ||
        "";
  
      const filteredFeatures = europeGeoJSON.features.filter((feature) => {
        const countryName = getCountryName(feature);
        return visibleCountries.includes(countryName);
      });
  
      const polygonsData = filteredFeatures.map((feature) => {
        const countryName = getCountryName(feature);
        return {
          properties: {
            name: countryName,
            id: countryName.toLowerCase(),
          },
          geometry: feature.geometry,
        };
      });
      
      // Set the data once and never change it
      globe
        .polygonsData(polygonsData)
        .polygonSideColor(() => "rgba(189, 195, 199, 0.2)")
        .polygonStrokeColor(() => "rgba(236, 240, 241, 0.8)")
        .polygonsTransitionDuration(200)
        .polygonCapColor((d) => countryColors[d.properties.name])
        .polygonAltitude(() => 0.06);
    }
    
    return () => {
      // Only clean up globe on component unmount
      if (fadeAnimationRef.current) {
        cancelAnimationFrame(fadeAnimationRef.current);
      }
      
      if (globeInstanceRef.current) {
        globeInstanceRef.current._destructor();
        globeInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array means this runs only once on mount
  
  // Set up event handlers separately to avoid recreating the globe
  useEffect(() => {
    if (!globeInstanceRef.current) return;
    
    // Debounce the hover handler to prevent rapid state changes
    const debouncedHoverHandler = debounce((polygon) => {
      if (polygon) {
        const countryName = polygon.properties.name;
        const videoSrc = countryVideos[countryName];
        
        if (videoSrc && videoSrc !== activeVideoSrc) {
          handleVideoTransition(videoSrc);
        }
        setHighlightedCountry(countryName);
      } else {
        // Only change video if not already on default
        if (activeVideoSrc !== defaultVideo) {
          handleVideoTransition(defaultVideo);
        }
        setHighlightedCountry(null);
      }
    }, 50);

    // Set up event handlers
    globeInstanceRef.current
      .onPolygonHover(debouncedHoverHandler)
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
      // Clean up event handlers but don't destroy globe instance
      if (globeInstanceRef.current) {
        globeInstanceRef.current.onPolygonHover(null);
        globeInstanceRef.current.onPolygonClick(null);
      }
    };
  }, [cities, countryVideos, activeVideoSrc, defaultVideo, debounce, handleVideoTransition]);

  // Update only the styling properties when highlightedCountry changes
  // This is in a separate useEffect to prevent recreating the globe
  useEffect(() => {
    if (!globeInstanceRef.current) return;
    
    // Use requestAnimationFrame to prevent jank during updates
    // and to batch visual updates with browser's render cycle
    requestAnimationFrame(() => {
      if (!globeInstanceRef.current) return;
      
      const getCountryColor = (d) => {
        if (!d || !d.properties || !d.properties.name) return countryColors.Germany; // Fallback
        return highlightedCountry === d.properties.name
          ? highlightedCountryColors[d.properties.name]
          : countryColors[d.properties.name];
      };
  
      const getCountryAltitude = (d) => {
        if (!d || !d.properties || !d.properties.name) return 0.06; // Fallback
        return d.properties.name === highlightedCountry ? 0.08 : 0.06;
      };
  
      // Only update these specific properties, don't recreate polygons data
      globeInstanceRef.current
        .polygonCapColor(getCountryColor)
        .polygonAltitude(getCountryAltitude);
    });
      
  }, [highlightedCountry, countryColors, highlightedCountryColors]);

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

      {/* Display current country name */}
      {highlightedCountry && (
        <div
          className="absolute left-0 right-0 z-30 text-center top-5"
          style={{
            color: "#FFFFFF",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.8)"
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
          maxWidth: "100vw"
        }}
      />
    </div>
  );
};

export default GlobeComponent;