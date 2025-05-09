import React from 'react';
import History from '../../assets/images/History.png';
import ItalyMarker from '../../assets/images/italy-marker.png';

const HistoryAndCulture = ({country}) => {
  return (
    <div className="flex flex-col-reverse items-center justify-center my-20 md:flex-row md:items-center md:pr-16">
      {/* Left Section (Image) */}
      <div className="w-full mt-8 md:mt-0 md:w-1/2">
        <img
          src={History}
          alt="Paris Cityscape"
          className="h-[250px] w-full md:h-[600px] object-cover md:rounded-lg md:shadow-md"
        />
      </div>

      {/* Right Section (Text Content) */}
      <div className="flex flex-col justify-center mx-6 text-left md:ml-8 md:w-1/2 md:pl-12">
        <h3 className="mb-8 text-4xl font-bold text-black">Popular attractions in {country}</h3>
        <ul className="space-y-8 text-lg text-gray-700">
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Grandvalira Ski Resort – One of the largest ski areas in the Pyrenees</span>
          </li>
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Vallnord-Pal Arinsal – Popular for skiing, snowboarding, and mountain biking</span>
          </li>
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Sant Joan de Caselles Church – A stunning Romanesque church from the 11th century</span>
          </li>
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Casa de la Vall – Historic parliament building in Andorra la Vella</span>
          </li>
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Caldea Spa – One of Europe's largest mountain spas with thermal waters</span>
          </li>
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Madriu-Perafita-Claror Valley – UNESCO World Heritage Site for hiking and nature</span>
          </li>
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Andorra la Vella – Famous for duty-free shopping and charming city streets</span>
          </li>
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Coma Pedrosa Natural Park – Ideal for hiking and nature lovers</span>
          </li>
          <li className="flex items-start">
            <img src={ItalyMarker} alt="Location marker" className="w-8 h-8 mr-4 mt-0.5 flex-shrink-0" />
            <span className="pt-1">Tobotronc at Naturlandia – The world's longest alpine toboggan run</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HistoryAndCulture;