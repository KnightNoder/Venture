import React from 'react';
import Tourist2 from "../../assets/images/Tourist2.png";
import { tourismData } from './tourismData';

const  CountryFAQ = ({ country }) => {
  // Find the country data
  const countryData = tourismData.find(data => 
    data.country.toLowerCase() === country?.toLowerCase()
  );

  // Fallback if country not found
  if (!countryData) {
    return (
      <div className="p-6 text-center">
        <p>FAQ information not available for {country}</p>
      </div>
    );
  }

  const { faq } = countryData;

  return (
    <div className="flex flex-col h-auto px-2 mt-12 mb-20 overflow-hidden shadow-lg md:mt-20 md:p-10 md:flex-row bg-red-50 md:mx-40 md:rounded-3xl">
      {/* Left content section */}
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-bold text-red-600">{country} Tourism FAQs</h2>
        
        <div className="mt-4 space-y-5">
          {/* Famous For */}
          <div>
            <h3 className="text-xl font-semibold text-black">Famous For:</h3>
            <ul className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2">
              {faq.famousFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 font-bold text-blue-600">•</span>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Entry Requirements */}
          <div>
            <h3 className="text-xl font-semibold text-black">Entry Requirements:</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 font-bold text-blue-600">•</span>
                <span className="font-medium text-gray-700">{faq.entryRequirements}</span>
              </li>
            </ul>
          </div>

          {/* Combined section for shorter items */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Tipping */}
            <div>
              <h3 className="text-xl font-semibold text-black">Tipping:</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-blue-600">•</span>
                  <span className="font-medium text-gray-700">{faq.tipping}</span>
                </li>
              </ul>
            </div>

            {/* Weather */}
            <div>
              <h3 className="text-xl font-semibold text-black">Weather:</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-blue-600">•</span>
                  <span className="font-medium text-gray-700">
                    Winter ({faq.weather.winter.months}): {faq.weather.winter.description} ({faq.weather.winter.temperature})
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-blue-600">•</span>
                  <span className="font-medium text-gray-700">
                    Summer ({faq.weather.summer.months}): {faq.weather.summer.description} ({faq.weather.summer.temperature})
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div>
            <h3 className="text-xl font-semibold text-black">Best Time to Visit:</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 font-bold text-blue-600">•</span>
                <span className="font-medium text-gray-700">
                  Winter: {faq.bestTimeToVisit.winter}
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-blue-600">•</span>
                <span className="font-medium text-gray-700">
                  Spring/Summer: {faq.bestTimeToVisit.springSummer}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Right image section */}
      <div className="h-[250px] md:w-1/3 md:h-full">
        <img
          src={Tourist2}
          alt={`${country} Tourism`}
          className="object-cover w-full h-full md:rounded-r-3xl"
        />
      </div>
    </div>
  );
};

export default CountryFAQ;