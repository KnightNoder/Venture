import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "globe.gl";
import europeGeoJSON from "./geoJson.json"; // Import your Natural Earth GeoJSON file
import FranceVideo from "/videos/France4.mp4";
import GermanyVideo from "/videos/Germany4.mp4";
import ItalyVideo from "/videos/Italy4.mp4";
import SpainVideo from "/videos/Spain4.mp4";

const GlobeComponent = ({ cities, continent = "Europe" }) => {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const globeInstanceRef = useRef(null);
  const [highlightedCountry, setHighlightedCountry] = useState(null);
  
  // Track both videos for crossfade
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);
  
  // Define background videos for each country - NOT using useMemo to avoid stale references
  const countryVideos = {
    France: FranceVideo,
    Germany: GermanyVideo,
    Italy: ItalyVideo,
    Spain: SpainVideo,
  };
  
  // Default video
  const defaultVideo = GermanyVideo;
  const [activeVideoSrc, setActiveVideoSrc] = useState(defaultVideo);
  const [previousVideoSrc, setPreviousVideoSrc] = useState(null);
  const fadeAnimationRef = useRef(null);
  const [videosLoaded, setVideosLoaded] = useState({ default: false });

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
  
  // For highlighted states, use secondary colors from the flags
  const highlightedCountryColors = {
    France: "rgba(237, 41, 57, 0.8)",  // French flag red
    Germany: "rgba(255, 206, 0, 0.8)", // German flag gold
    Italy: "rgba(206, 43, 55, 0.8)",   // Italian flag red
    Spain: "rgba(198, 11, 30, 0.8)"    // Spanish flag red
  };

  // Define country centroids for labels (approximate centers of countries)
  const countryCentroids = [
    { lat: 46.0034, lng: 2.8883, name: 'France', country: 'France' },
    { lat: 50.0657, lng: 9.4515, name: 'Germany', country: 'Germany' },
    { lat: 42.5047, lng: 12.5674, name: 'Italy', country: 'Italy' },
    { lat: 40.4637, lng: -2.7492, name: 'Spain', country: 'Spain' }
  ];

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

  // Load default video immediately, then lazy load other videos
  useEffect(() => {
    // First priority: Load and play default video immediately
    if (currentVideoRef.current) {
      currentVideoRef.current.src = defaultVideo;
      currentVideoRef.current.load();
      
      // Listen for when default video starts playing
      const handleDefaultLoaded = () => {
        console.log("Default video loaded and playing");
        setVideosLoaded(prev => ({ ...prev, default: true }));
        
        // Begin preloading other videos only after default video is playing
        setTimeout(() => {
          // Then preload other videos in the background with low priority
          Object.entries(countryVideos).forEach(([country, videoSrc]) => {
            if (videoSrc !== defaultVideo) {
              console.log(`Background loading video for ${country}`);
              const preloadVideo = document.createElement('video');
              preloadVideo.preload = 'auto';
              
              // Use lower priority for non-default videos
              if ('fetchPriority' in preloadVideo) {
                preloadVideo.fetchPriority = 'low';
              }
              
              preloadVideo.src = videoSrc;
              
              // Track when each country's video is loaded
              preloadVideo.oncanplaythrough = () => {
                console.log(`Video for ${country} is loaded and ready`);
                setVideosLoaded(prev => ({ ...prev, [country]: true }));
              };
              
              preloadVideo.load();
            }
          });
        }, 100); // Small delay to ensure default video gets priority
      };
      
      currentVideoRef.current.oncanplaythrough = handleDefaultLoaded;
      const playPromise = currentVideoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Default video started playing"))
          .catch(e => {
            console.log("Video play prevented:", e);
            // Mark as loaded even if autoplay fails (user might need to interact first)
            handleDefaultLoaded();
          });
      }
    }
  }, []);

  // Handle video transition with optimized animation
  const handleVideoTransition = useCallback((newVideoSrc) => {
    // Check if the requested video has been loaded
    const requestedCountry = Object.keys(countryVideos).find(
      country => countryVideos[country] === newVideoSrc
    );
    
    // If the video isn't loaded yet, don't attempt transition
    if (requestedCountry && !videosLoaded[requestedCountry] && newVideoSrc !== defaultVideo) {
      console.log(`Video for ${requestedCountry} not loaded yet, staying with current video`);
      return;
    }
    
    console.log("handleVideoTransition called with:", newVideoSrc);
    
    // Cancel any ongoing animation
    if (fadeAnimationRef.current) {
      cancelAnimationFrame(fadeAnimationRef.current);
    }

    setPreviousVideoSrc(activeVideoSrc);
    setActiveVideoSrc(newVideoSrc);
    
    if (nextVideoRef.current) {
      // Explicit logging to debug video transitions
      console.log("Setting next video source to:", newVideoSrc);
      
      nextVideoRef.current.src = newVideoSrc;
      nextVideoRef.current.style.opacity = "0";
      nextVideoRef.current.load();
      
      const playPromise = nextVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Video started playing successfully"))
          .catch(e => console.log("Video play prevented:", e));
      }
      
      // Start transition with requestAnimationFrame
      let start;
      const duration = 600; // Even faster transition for better responsiveness
      
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
          console.log("Fade animation complete");
          // Swap references when animation completes
          const temp = currentVideoRef.current;
          currentVideoRef.current = nextVideoRef.current;
          nextVideoRef.current = temp;
          
          // Reset next video opacity
          if (nextVideoRef.current) {
            nextVideoRef.current.style.opacity = "0";
          }
          
          fadeAnimationRef.current = null;
        }
      }
      
      fadeAnimationRef.current = requestAnimationFrame(fadeAnimation);
    }
  }, [activeVideoSrc, countryVideos, defaultVideo, videosLoaded]);

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
        .polygonCapColor((d) => countryColors[d.properties.name])
        .polygonAltitude(() => 0.06);
      
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
    
    // Direct hover handler without debounce to ensure immediate response
    const hoverHandler = (polygon) => {
      if (polygon) {
        const countryName = polygon.properties.name;
        console.log("Hover detected on country:", countryName);
        
        // Get the correct video for this country
        const videoSrc = countryVideos[countryName];
        console.log("Video source for country:", videoSrc);
        
        // Only transition if video is loaded or it's the default video
        const isVideoLoaded = videosLoaded[countryName] || videoSrc === defaultVideo;
        if (videoSrc && videoSrc !== activeVideoSrc && isVideoLoaded) {
          console.log("Transitioning to video:", videoSrc);
          handleVideoTransition(videoSrc);
        } else if (!isVideoLoaded) {
          console.log(`Video for ${countryName} not loaded yet, showing loading state`);
          // You could show a loading indicator here if needed
        }
        
        setHighlightedCountry(countryName);
      } else {
        // Mouse left a country, return to default
        console.log("Exiting country, returning to default video");
        if (activeVideoSrc !== defaultVideo) {
          handleVideoTransition(defaultVideo);
        }
        setHighlightedCountry(null);
      }
    };

    // Set up event handlers
    globeInstanceRef.current
      .onPolygonHover(hoverHandler)
      .onPolygonClick((polygon) => {
        if (polygon && polygon.properties) {
          const country = polygon.properties.name;
          const targetCity = cities?.find((city) => city.country === country);
          if (targetCity && targetCity.url) {
            // window.open(targetCity.url, "_blank");
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
  }, [cities, countryVideos, activeVideoSrc, defaultVideo, handleVideoTransition, videosLoaded]);

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
      
      {/* First video (starts as active) */}
      <video
        ref={currentVideoRef}
        className="absolute inset-0 object-cover w-full h-full z-1"
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
        autoPlay
        loop
        muted
        playsInline
        style={{ 
          opacity: 0,
          transition: "none", // We handle transition manually
        }}
      />

      {/* Loading indicator - show while default video is loading */}
      {!videosLoaded.default && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-lg text-white">Loading...</div>
        </div>
      )}

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
          {/* Show loading indicator if video for this country isn't loaded yet */}
          {highlightedCountry !== 'Germany' && !videosLoaded[highlightedCountry] && (
            <span className="ml-2 text-sm opacity-70">(loading...)</span>
          )}
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