import React from 'react';
import Tourist1 from "../../assets/images/Tourist1.png";
import Tourist2 from "../../assets/images/Tourist2.png";
import Tourist3 from "../../assets/images/Tourist3.png";
import Tourist4 from "../../assets/images/Tourist4.png";
import Travel1 from "../../assets/images/Travel1.png";
import Travel2 from "../../assets/images/Travel2.png";
import Travel3 from "../../assets/images/Travel3.png";
import Travel4 from "../../assets/images/Travel4.png";
import Icons from '../../assets/Icons/Icons';

// Country Overview Component
export const  CountryOverview = () => {
  return (
    <div className="flex flex-col px-2 mt-12 overflow-hidden shadow-lg md:mt-20 md:p-10 md:flex-row bg-red-50 md:mx-40 md:rounded-3xl">
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-bold text-red-600">France</h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          France is a dream destination known for its rich culture, world-class cuisine, romantic cities, 
          and stunning landscapes. From the iconic Eiffel Tower to the glamorous French Riviera, France 
          blends art, elegance, and adventure like no other destination in Europe.
        </p>

        <h3 className="mt-5 text-xl font-bold text-black">Key Information</h3>
        <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Capital: Paris</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Currency: Euro (€)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Language: French</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Time Zone: CET (UTC+1)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Visa: Schengen visa for non-EU citizens</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Voltage: 230V, 50Hz (Type C & E plugs)</span>
          </div>
        </div>

        <h3 className="mt-5 text-xl font-bold text-black">Weather & Best Time to Visit</h3>
        <p className="mt-3 leading-relaxed text-gray-700">
          France enjoys a temperate climate with distinct seasons. Winters (December-February) are cold to mild 
          with average temperatures between 3°C to 10°C. Summers (June-August) are warm and sunny with temperatures 
          ranging from 20°C to 30°C. The best time to visit is during spring (April-June) and autumn (September-October) 
          when the weather is pleasant and there are fewer crowds.
        </p>
      </div>
      {/* Image section */}
      <div className="h-[250px] md:w-1/3 md:h-full">
        <img
          src={Tourist1}
          alt="France Landscape"
          className="object-cover w-full h-full md:rounded-r-3xl"
        />
      </div>
    </div>
  );
};

export default CountryOverview;