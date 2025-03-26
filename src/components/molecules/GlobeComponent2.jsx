import { useEffect, useRef, useState } from "react";
import Globe from "globe.gl";
import * as THREE from "three"; // Import THREE.js for custom materials
import europeGeoJSON from './geoJson.json'; // Import your Natural Earth GeoJSON file

const GlobeComponent = ({ cities, continent = "Europe" }) => {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const globeInstanceRef = useRef(null);
  const [highlightedCountry, setHighlightedCountry] = useState(null);

  // Define only the countries we want to be visible
  const visibleCountries = ['France', 'Germany', 'Spain', 'Italy'];

  // Define background images for each country
  const countryBackgrounds = {
    'France': 'url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop)', // Paris
    'Germany': 'url(https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2073&auto=format&fit=crop)', // Berlin
    'Italy': 'url(https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=2076&auto=format&fit=crop)',   // Rome
    'Spain': 'url(https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop)',   // Madrid
    'default': 'url(https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2070&auto=format&fit=crop)'  // Default Europe
  };

  const [backgroundImage, setBackgroundImage] = useState(countryBackgrounds['default']);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = Math.min(window.innerWidth, 1200);
        const height = window.innerWidth < 768 ? window.innerHeight * 0.6 : window.innerHeight * 0.9;
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
    const europeView = { lat: 48, lng: 10, altitude: 1.5 };

    globe
      .globeImageUrl("") // No image for the globe
      .backgroundColor("rgba(0, 0, 0, 0)") // Transparent background
      .pointOfView(europeView, 1000) // Smooth transition to Europe view
      .showGlobe(false) // Hide the globe sphere completely
      .showAtmosphere(false); // No atmosphere

    const getCountryName = (feature) => feature.properties.NAME || feature.properties.name || '';

    const filteredGeoJSON = {
      type: "FeatureCollection",
      features: europeGeoJSON.features.filter(feature => visibleCountries.includes(getCountryName(feature)))
    };

    const polygonsData = filteredGeoJSON.features.map(feature => ({
      properties: { name: getCountryName(feature), id: getCountryName(feature).toLowerCase() },
      geometry: feature.geometry
    }));

    const getCountryColor = (d) => d.properties.name === highlightedCountry ? "rgba(255, 100, 100, 0.9)" : "rgba(100, 100, 100, 0.3)";

    const getCountryAltitude = (d) => d.properties.name === highlightedCountry ? 0.15 : 0.06;

    const getCountryTexture = (d) => {
      const countryName = d.properties.name;
      return visibleCountries.includes(countryName) ? new THREE.TextureLoader().load(countryBackgrounds[countryName]) : null;
    };

    globe
      .polygonsData(polygonsData)
      .polygonCapMaterial(d => {
        const texture = getCountryTexture(d);
        if (texture) {
          const material = new THREE.MeshLambertMaterial({ map: texture });
          return material;
        }
        return new THREE.MeshLambertMaterial({ color: getCountryColor(d) });
      })
      .polygonSideColor(() => "rgba(255, 255, 255, 0.15)")
      .polygonStrokeColor(() => "#FFF")
      .polygonAltitude(getCountryAltitude)
      .polygonsTransitionDuration(300);

  }, [highlightedCountry]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh", backgroundImage }}>
      <div ref={globeRef} style={{ width: dimensions.width, height: dimensions.height }} />
    </div>
  );
};

export default GlobeComponent;
