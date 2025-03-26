import { useEffect, useRef, useState } from "react"
import Globe from "globe.gl";
import europeGeoJSON from './geoJson.json'; // Import your Natural Earth GeoJSON file

const GlobeComponent = ({ cities, continent = "Europe" }) => {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const globeInstanceRef = useRef(null);
  const [highlightedCountry, setHighlightedCountry] = useState(null);


  // Define only the countries we want to be visible
  const visibleCountries = ['France', 'Germany', 'Spain', 'Italy'];

  // Define country-specific colors
  const countryColors = {
    'France': 'rgba(41, 128, 185, 0)',  // Blue (Transparent)
    'Germany': 'rgba(142, 68, 173, 0)', // Purple (Transparent)
    'Italy': 'rgba(39, 174, 96, 0)',    // Green (Transparent)
    'Spain': 'rgba(192, 57, 43, 0)'     // Red (Transparent)
  };
  
  // Define background images for each country
  const countryBackgrounds = {
    'France': 'url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop)', // Paris
    'Germany': 'url(https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2073&auto=format&fit=crop)', // Berlin
    'Italy': 'url(https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=2076&auto=format&fit=crop)',   // Rome
    'Spain': 'url(https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop)',   // Madrid
    'default': 'url(https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2070&auto=format&fit=crop)'  // Default Europe
  };

const [backgroundImage, setBackgroundImage] = useState(countryBackgrounds['default'])


  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = Math.min(window.innerWidth, 1200); // Cap max width
        const height =
          window.innerHeight < 500
            ? window.innerHeight * 0.7 // For very small heights
            : window.innerWidth < 768
              ? window.innerHeight * 0.6 // Mobile
              : window.innerHeight * 0.9; // Desktop

        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = Globe()(globeRef.current);
    globeInstanceRef.current = globe;

    // Set focused view on Europe
    const europeView = { lat: 48, lng: 10, altitude: 0.75 };

    // Make the globe completely transparent with a transparent background
    globe
      .globeImageUrl("") // No image for the globe
      .backgroundColor("rgba(0, 0, 0, 0)") // Transparent background
      .pointOfView(europeView, 100) // Smooth transition to Europe view
      .showGlobe(false) // Hide the globe sphere completely
      .showAtmosphere(false); // No atmosphere
      
    // Enable custom bounds for the globe view
    globe.controls().autoRotate = false;
    globe.controls().enableZoom = true;
    globe.controls().minDistance = 90; // Prevent zooming out too far
    globe.controls().maxDistance = 500; // Prevent zooming in too far
    
    // Allow full rotation in all directions
    const controls = globe.controls();
    
    // Remove rotation restrictions
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    
    // Allow full azimuthal rotation
    controls.minAzimuthAngle = -Infinity;
    controls.maxAzimuthAngle = Infinity;

    // Process the GeoJSON data
    const getCountryName = (feature) => {
      return feature.properties.NAME || 
             feature.properties.name || 
             feature.properties.ADMIN ||
             feature.properties.NAME_LONG ||
             '';
    };

    // Filter GeoJSON to ONLY include the four visible countries
    const filteredGeoJSON = {
      type: "FeatureCollection",
      features: europeGeoJSON.features.filter(feature => {
        const countryName = getCountryName(feature);
        return visibleCountries.includes(countryName);
      })
    };

    // Convert GeoJSON to the format expected by Globe.gl
    const polygonsData = filteredGeoJSON.features.map(feature => {
      const countryName = getCountryName(feature);
      return {
        properties: { 
          name: countryName,
          id: countryName.toLowerCase()
        },
        geometry: feature.geometry
      };
    });

    // Function to get country color
    const getCountryColor = (d) => {
      // If country is highlighted, return highlight color
      if (d.properties.name === highlightedCountry) {
        return "rgba(255, 140, 0, 0.9)"; // Red when highlighted
      }
      
      // Otherwise return the country-specific color
      return countryColors[d.properties.name];
    };

    // Altitude settings for 3D effect
    const getCountryAltitude = (d) => {
      return d.properties.name === highlightedCountry ? 0.15 : 0.06;
    };

    globe
      .polygonsData(polygonsData)
      .polygonCapColor(getCountryColor)
      .polygonSideColor(() => "rgba(189, 195, 199, 0.2)") // Brighter sides
      .polygonStrokeColor(() => "rgba(236, 240, 241, 0.8)") // White borders
      .polygonAltitude(getCountryAltitude)
      .polygonsTransitionDuration(300) // smooth transition
      .polygonLabel(({ properties: d }) => `
        <div style="
          background-color: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 10px;
          border-radius: 5px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          border: 1px solid ${countryColors[d.name]};
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        ">
          <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">${d.name}</div>
          <div>Click to explore ${d.name}</div>
        </div>
      `)
      .onPolygonHover((polygon) => {
        if (polygon) {
          const countryName = polygon.properties.name;
          setHighlightedCountry(countryName);
          // Update background image based on hovered country
          setBackgroundImage(countryBackgrounds[countryName] || countryBackgrounds['default']);
        } else {
          setHighlightedCountry(null);
          // Reset to default background when not hovering any country
          setBackgroundImage(countryBackgrounds['default']);
        }
      })
      .onPolygonClick((polygon) => {
        if (polygon && polygon.properties) {
          const country = polygon.properties.name;
          const targetCity = cities?.find(city => city.country === country);
          if (targetCity && targetCity.url) {
            window.open(targetCity.url, "_blank");
          }
        }
      });

    // Add city markers if cities are provided
    if (cities && cities.length > 0) {
      // Filter to only include cities from the four visible countries
      const visibleCities = cities.filter(city => 
        visibleCountries.includes(city.country)
      );
      
      globe
        .pointsData(visibleCities)
        .pointAltitude(0.001)
        .pointRadius(0.5)
        .pointResolution(1)
        .pointsMerge(true)
        .onPointClick(({ url }) => window.open(url, "_blank"))
        .onPointHover((point) => {
          if (point && point.country) {
            const countryName = point.country;
            setHighlightedCountry(countryName);
            // Change globe background instead of point color
            const newBackground = countryBackgrounds[countryName] || countryBackgrounds['default'];
            globe.backgroundImage(newBackground);
          }
        })
        .labelsData(visibleCities)
        .labelText("name")
        .labelSize(d => d.country === highlightedCountry ? 2.0 : 1.5)
        .labelColor("#DDDDDD")
        .labelResolution(2)
        .labelAltitude(0.01)
        .labelDotRadius(d => d.country === highlightedCountry ? 0.5 : 0.3)
        .labelDotOrientation(() => 'bottom');

    }

    return () => {
      if (globeInstanceRef.current) {
        globeInstanceRef.current._destructor();
      }
    };
  }, [cities]);

  useEffect(() => {
    if (globeInstanceRef.current) {
      // Update visual elements when highlighted country changes
      globeInstanceRef.current
        .polygonCapColor((d) => {
          if (d.properties.name === highlightedCountry) {
            return "rgba(255, 255, 255, 0.15)";
          }
          return countryColors[d.properties.name];
        })
        .polygonAltitude((d) => d.properties.name === highlightedCountry ? 0.15 : 0.06)
        .pointAltitude(d => d.country === highlightedCountry ? 0.18 : 0.09)
        .pointColor(d => d.country === highlightedCountry ? "#FFDD00CC" : "#FFD70080")
        .pointRadius(d => d.country === highlightedCountry ? 0.8 : 0.5)
        .labelSize(d => d.country === highlightedCountry ? 2.0 : 1.5)
        .labelColor(d => d.country === highlightedCountry ? "#FFFFFF" : "#DDDDDD")
        .labelDotRadius(d => d.country === highlightedCountry ? 0.5 : 0.3);
    }
  }, [highlightedCountry]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ 
          height: dimensions.height,
        }}
      >
        {/* Background image container with transition effect */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'all 1s ease-in-out',
            opacity: 0.4, // Dimmed background so the 3D countries are still visible
          }}
        />
        
        {/* Semi-transparent overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: 'rgba(0, 0, 20, 0.7)',
            transition: 'all 0.5s ease-in-out',
          }}
        />
        
        {/* Display current country name */}
        {highlightedCountry && (
          <div 
            className="absolute left-0 right-0 z-30 text-center top-5"
            style={{
              color: '#FFFFFF',
              fontSize: '2rem',
              fontWeight: 'bold',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
              transition: 'all 0.3s ease-in-out',
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
    </>
  );
};

export default GlobeComponent;