import React, { useState } from 'react';

const EuropeanMapComponent = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  
  // Define the countries we want to highlight
  const countries = [
    {
      id: 'france',
      name: 'France',
      path: 'M263,343 L290,330 L315,335 L320,325 L350,317 L355,295 L340,275 L350,255 L330,240 L325,220 L295,218 L285,200 L270,215 L255,210 L240,230 L225,225 L220,240 L235,265 L225,275 L245,290 L240,310 L250,325 L263,343Z',
      color: '#3498db'
    },
    {
      id: 'germany',
      name: 'Germany',
      path: 'M335,220 L360,215 L380,200 L400,210 L410,200 L420,220 L400,240 L405,260 L390,280 L370,275 L355,295 L350,317 L320,325 L315,335 L290,330 L325,220 L335,220Z',
      color: '#f1c40f'
    },
    {
      id: 'italy',
      name: 'Italy',
      path: 'M340,275 L355,295 L370,275 L390,280 L400,295 L380,320 L390,350 L410,360 L415,380 L385,390 L375,425 L355,430 L345,410 L340,390 L325,360 L340,340 L320,325 L350,317 L355,295 L340,275Z',
      color: '#2ecc71'
    },
    {
      id: 'spain',
      name: 'Spain',
      path: 'M150,345 L175,330 L200,335 L220,320 L240,310 L245,290 L225,275 L235,265 L220,240 L200,245 L175,265 L160,290 L130,310 L150,345Z',
      color: '#e74c3c'
    }
  ];
  
  // Other European countries for context (simplified paths)
  const otherCountries = [
    {
      id: 'uk',
      name: 'United Kingdom',
      path: 'M235,200 L255,180 L275,185 L285,170 L275,155 L250,160 L230,175 L235,200Z'
    },
    {
      id: 'ireland',
      name: 'Ireland',
      path: 'M200,175 L220,165 L230,175 L225,190 L205,185 L200,175Z'
    },
    {
      id: 'portugal',
      name: 'Portugal',
      path: 'M130,310 L160,290 L175,265 L160,275 L150,305 L130,310Z'
    },
    {
      id: 'benelux',
      name: 'Benelux',
      path: 'M285,200 L295,218 L325,220 L325,200 L305,195 L295,190 L285,200Z'
    },
    {
      id: 'switzerland',
      name: 'Switzerland',
      path: 'M315,335 L290,330 L325,220 L335,220 L320,325 L315,335Z'
    },
    {
      id: 'austria',
      name: 'Austria',
      path: 'M380,320 L390,280 L405,260 L420,265 L430,280 L410,290 L390,295 L380,320Z'
    }
  ];
  
  // Handle mouse events
  const handleMouseEnter = (countryId) => {
    setHoveredCountry(countryId);
  };
  
  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };
  
  return (
    <div className="w-full max-w-4xl p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-bold text-center">Interactive European Map</h2>
      
      <div className="relative w-full aspect-[4/3] bg-blue-50 rounded-lg shadow-lg overflow-hidden">
        {/* Ocean background */}
        <div className="absolute inset-0 bg-blue-100"></div>
        
        <svg 
          viewBox="100 100 350 350" 
          className="absolute inset-0 w-full h-full"
        >
          {/* Other European countries for context */}
          {otherCountries.map(country => (
            <path
              key={country.id}
              d={country.path}
              fill="#d1d5db" // Gray color
              stroke="#9ca3af"
              strokeWidth="1"
              opacity="0.7"
            />
          ))}
          
          {/* Main interactive countries */}
          {countries.map(country => (
            <g key={country.id} transform={`translate(0, ${hoveredCountry === country.id ? -10 : 0})`}>
              {/* Shadow effect when elevated */}
              {hoveredCountry === country.id && (
                <path
                  d={country.path}
                  fill="rgba(0,0,0,0.3)"
                  transform="translate(3, 13)"
                  filter="blur(4px)"
                />
              )}
              
              {/* Country shape */}
              <path
                d={country.path}
                fill={country.color}
                fillOpacity={hoveredCountry === country.id ? 0.9 : 0.6}
                stroke="#000"
                strokeWidth={hoveredCountry === country.id ? 2 : 1}
                onMouseEnter={() => handleMouseEnter(country.id)}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, fill-opacity 0.3s ease, stroke-width 0.3s ease'
                }}
              />
              
              {/* Country label */}
              <text
                textAnchor="middle"
                x={country.id === 'france' ? 280 : 
                   country.id === 'germany' ? 370 : 
                   country.id === 'italy' ? 370 : 
                   country.id === 'spain' ? 190 : 0}
                y={country.id === 'france' ? 275 : 
                   country.id === 'germany' ? 240 : 
                   country.id === 'italy' ? 380 : 
                   country.id === 'spain' ? 300 : 0}
                fill={hoveredCountry === country.id ? "#000" : "#333"}
                fontWeight={hoveredCountry === country.id ? "bold" : "normal"}
                fontSize={hoveredCountry === country.id ? "12" : "10"}
                pointerEvents="none"
                style={{ transition: 'font-size 0.3s ease, font-weight 0.3s ease, fill 0.3s ease' }}
              >
                {country.name}
              </text>
            </g>
          ))}
        </svg>
        
        {/* Information panel */}
        {hoveredCountry && (
          <div className="absolute p-3 text-center transform -translate-x-1/2 bg-white rounded-lg shadow-md bottom-4 left-1/2 bg-opacity-90">
            <h3 className="font-bold">
              {countries.find(c => c.id === hoveredCountry)?.name}
            </h3>
            <p className="text-sm text-gray-600">Click to explore</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EuropeanMapComponent;