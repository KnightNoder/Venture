import React from 'react';
import History from '../../assets/images/History.png';

const HistoryAndCulture = ({country}) => {
  return (
    <div className="flex flex-col-reverse items-center justify-center my-20 md:flex-row md:items-center md:pr-16">
      {/* Left Section (Image) */}
      <div className="w-full mt-8 md:mt-0">
        <img
          src={History}
          alt="Paris Cityscape"
          className="h-[250px] w-full md:h-full md:rounded-lg md:shadow-md"
        />
      </div>

      {/* Right Section (Text Content) */}
      <div className="flex flex-col justify-center mx-6 text-left md:ml-8 md:w-1/2 md:pl-12">
        <h3 className="text-4xl font-bold text-black">Popular attractions in {country}</h3>
        <ul className="mt-4 space-y-2 text-lg text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Grandvalira Ski Resort – One of the largest ski areas in the Pyrenees</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Vallnord-Pal Arinsal – Popular for skiing, snowboarding, and mountain biking</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Sant Joan de Caselles Church – A stunning Romanesque church from the 11th century</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Casa de la Vall – Historic parliament building in Andorra la Vella</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Caldea Spa – One of Europe's largest mountain spas with thermal waters</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Madriu-Perafita-Claror Valley – UNESCO World Heritage Site for hiking and nature</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Andorra la Vella – Famous for duty-free shopping and charming city streets</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Coma Pedrosa Natural Park – Ideal for hiking and nature lovers</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span>Tobotronc at Naturlandia – The world's longest alpine toboggan run</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HistoryAndCulture;