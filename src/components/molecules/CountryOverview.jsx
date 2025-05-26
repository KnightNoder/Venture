import React from 'react';
import Tourist1 from "../../assets/images/Tourist1.png";
import { tourismData } from './tourismData'; // Import your data

const CountryOverview = ({ country }) => {
  // Find the country data
  const countryData = tourismData.find(data => 
    data.country.toLowerCase() === country?.toLowerCase()
  );

  // Fallback if country not found
  if (!countryData) {
    return (
      <div className="p-6 text-center">
        <p>Country information not available for {country}</p>
      </div>
    );
  }

  const { description, basicInfo } = countryData;

  return (
    <div className="flex flex-col h-auto px-2 mt-12 overflow-hidden shadow-lg md:mt-20 md:p-10 md:flex-row bg-red-50 md:mx-40 md:rounded-3xl">
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-bold text-red-600">Tourism at glance</h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          {description}
        </p>

        <h3 className="mt-5 text-xl font-bold text-black">Key Information</h3>
        <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Capital: {basicInfo.capital}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Currency: {basicInfo.currency}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Language: {basicInfo.officialLanguage}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Time Zone: {basicInfo.timeZone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Voltage: {basicInfo.voltage} (Type {basicInfo.plugTypes.join(' & ')} plugs)</span>
          </div>
          {basicInfo.otherLanguages.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">Other Languages: {basicInfo.otherLanguages.join(', ')}</span>
            </div>
          )}
        </div>
      </div>
      {/* Image section */}
      <div className="h-[250px] md:w-1/3 md:h-full">
        <img
          src={Tourist1}
          alt={`${country} Landscape`}
          className="object-cover w-full h-full md:rounded-r-3xl"
        />
      </div>
    </div>
  );
};

export default CountryOverview;