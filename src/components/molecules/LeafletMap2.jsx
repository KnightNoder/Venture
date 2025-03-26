import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import europeGeoJSON from './geoJson.json'; // Load a GeoJSON file with country data

const highlightedCountries = ['France', 'Germany', 'Spain', 'Italy'];

const MapComponent = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const onEachCountry = (feature, layer) => {
    if (highlightedCountries.includes(feature.properties.name)) {
      layer.setStyle({ fillColor: 'blue', fillOpacity: 0.5, weight: 1 });
      
      layer.on('mouseover', () => {
        layer.setStyle({ fillOpacity: 0.8, weight: 2, transform: 'scale(1.1)' });
        setHoveredCountry(feature.properties.name);
      });
      
      layer.on('mouseout', () => {
        layer.setStyle({ fillOpacity: 0.5, weight: 1, transform: 'scale(1)' });
        setHoveredCountry(null);
      });
    }
  };

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={europeGeoJSON} onEachFeature={onEachCountry} />
      {hoveredCountry && <div className="tooltip">{hoveredCountry}</div>}
    </MapContainer>
  );
};

export default MapComponent;
