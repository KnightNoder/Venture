import React from 'react';
import England1 from '../../assets/images/England1.png';

const CountryOverview = () => {
  return (
    <div className="flex flex-col p-10 mx-10 mt-20 overflow-hidden shadow-lg md:flex-row bg-red-50 md:mx-40 rounded-3xl">
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-bold text-red-600">England</h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          England, a country located in the United Kingdom, is a land of rich history,
          diverse culture, and breathtaking natural beauty. From the bustling streets of
          London to the rolling hills of the countryside, England is a destination that
          has something for everyone.
        </p>

        <h3 className="mt-5 text-xl font-bold text-black">Geography and Climate</h3>
        <p className="mt-3 leading-relaxed text-gray-700">
          England is located in the northern hemisphere, bordered by Scotland to the north,
          Wales to the west, and the Atlantic Ocean to the southwest. The country features
          a diverse landscape, including mountains, hills, valleys, and coastlines. 
          The highest point is Scafell Pike, standing at 978 meters. The climate is mild 
          and temperate, ranging from 3°C in winter to 22°C in summer, with significant 
          rainfall throughout the year.
        </p>
      </div>
      {/* Image without padding, extending fully to the right, top, and bottom */}
      <div className="h-auto md:w-1/3 md:h-full">
        <img
          src={England1}
          alt="England Landscape"
          className="object-cover w-full h-full rounded-r-3xl"
        />
      </div>
    </div>
  );
};

export default CountryOverview;
