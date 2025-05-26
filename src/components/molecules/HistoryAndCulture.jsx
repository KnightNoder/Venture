import React from 'react';
import History from '../../assets/images/History.png';
import ItalyMarker from '../../assets/images/italy-marker.png';
import { tourismData } from './tourismData';

const HistoryAndCulture = ({ country }) => {
  // Find the country data
  const countryData = tourismData.find(data => 
    data.country.toLowerCase() === country?.toLowerCase()
  );

  // Fallback if country not found
  if (!countryData) {
    return (
      <div className="p-6 text-center">
        <p>Attractions information not available for {country}</p>
      </div>
    );
  }

  const { popularAttractions } = countryData;

  return (
    <div className="flex flex-col-reverse items-center justify-center my-20 md:flex-row md:items-center md:pr-16">
      {/* Left Section (Image) */}
      <div className="w-full mt-8 md:mt-0 md:w-1/2">
        <img
          src={History}
          alt={`${country} Cityscape`}
          className="h-[250px] w-full md:h-[600px] object-cover md:rounded-lg md:shadow-md"
        />
      </div>

      {/* Right Section (Text Content) */}
      <div className="flex flex-col justify-center mx-6 text-left md:ml-8 md:w-1/2 md:pl-12">
        <h3 className="mb-8 text-4xl font-bold text-black">Popular attractions in {country}</h3>
        <ul className="space-y-8 text-lg text-gray-700">
          {popularAttractions.map((attraction, index) => (
            <li key={index} className="flex items-start">
              <img 
                src={ItalyMarker} 
                alt="Location marker" 
                className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" 
              />
              <span className="pt-1">
                {attraction.name} – {attraction.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryAndCulture;