import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = () => {
  const [europeGeoJSON, setEuropeGeoJSON] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  
  // List of countries we want to highlight
  const highlightedCountries = ['France', 'Germany', 'Spain', 'Italy'];
  
  // Define distinct colors for each country
  const countryColors = {
    'France': '#3498db',
    'Germany': '#9b59b6',
    'Spain': '#e74c3c',
    'Italy': '#2ecc71'
  };

  // Load GeoJSON data
  useEffect(() => {
    // For testing, we'll use a public GeoJSON of countries
    // In your actual app, replace this with your local import
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(response => response.json())
      .then(data => {
        // Filter to only European countries if needed
        setEuropeGeoJSON(data);
      })
      .catch(error => console.error('Error loading GeoJSON:', error));
  }, []);

  // Style function that will be used by Leaflet
  const getCountryStyle = (feature) => {
    const countryName = feature.properties.ADMIN || feature.properties.name;
    
    // Check if this is one of our highlighted countries
    if (highlightedCountries.includes(countryName)) {
      const isHovered = hoveredCountry === countryName;
      
      return {
        fillColor: countryColors[countryName],
        weight: isHovered ? 3 : 1,
        opacity: 1,
        color: isHovered ? '#ffffff' : '#666666',
        dashArray: isHovered ? '' : '3',
        fillOpacity: isHovered ? 0.8 : 0.5,
        // We can't use transform with Leaflet GeoJSON directly
      };
    }
    
    // Style for non-highlighted countries
    return {
      fillColor: '#cccccc',
      weight: 1,
      opacity: 0.5,
      color: '#999999',
      dashArray: '2',
      fillOpacity: 0.2
    };
  };

  // Add event handlers to each feature
  const onEachFeature = (feature, layer) => {
    const countryName = feature.properties.ADMIN || feature.properties.name;
    
    if (highlightedCountries.includes(countryName)) {
      // We use closures to store the original style
      const originalStyle = {
        fillColor: countryColors[countryName],
        weight: 1,
        opacity: 1,
        color: '#666666',
        dashArray: '3',
        fillOpacity: 0.5
      };
      
      const highlightStyle = {
        fillColor: countryColors[countryName],
        weight: 3,
        opacity: 1,
        color: '#ffffff',
        dashArray: '',
        fillOpacity: 0.8
      };
      
      layer.on({
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle(highlightStyle);
          layer.bringToFront();
          setHoveredCountry(countryName);
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle(originalStyle);
          setHoveredCountry(null);
        },
        click: () => {
          console.log(`Clicked on ${countryName}`);
          // You can add navigation or other actions here
        }
      });
      
      // Set initial style
      layer.setStyle(originalStyle);
    }
  };

  // Filter function to only include countries we want
  const filterFeatures = (feature) => {
    const countryName = feature.properties.ADMIN || feature.properties.name;
    // You can either show all countries or only highlighted ones
    return true; // To show all countries
    // return highlightedCountries.includes(countryName); // To show only highlighted countries
  };

  return (
    <div className="map-wrapper" style={{ position: 'relative' }}>
      <MapContainer 
        center={[48.8566, 2.3522]} 
        zoom={4} 
        style={{ height: '800px', width: '100%' }}
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {europeGeoJSON && (
          <GeoJSON 
            data={europeGeoJSON} 
            style={getCountryStyle}
            filter={filterFeatures}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
      
      {/* Custom tooltip that follows cursor */}
      {hoveredCountry && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '4px',
          fontWeight: 'bold',
          zIndex: 1000
        }}>
          {hoveredCountry}
        </div>
      )}
    </div>
  );
};

export default MapComponent;