import React from 'react';
import History from '../../assets/images/History.png';

const HistoryAndCulture = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 md:flex-row md:items-center md:pr-16">
      {/* Left Section (Image) */}
      <div className="md:w-1/2">
        <img
          src={History}
          alt="London Cityscape"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Section (Text Content) */}
      <div className="flex flex-col justify-center ml-32 text-left md:w-1/2 md:pl-12">
        <h3 className="text-4xl font-bold text-black">History and Culture</h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-700 ">
          England has a rich and varied history, with evidence of human habitation dating back
          to the Mesolithic era. The country has been influenced by numerous cultures—
          including the Romans, the Vikings, and the Normans. England is home to many
          world-renowned historical landmarks, including Stonehenge, Buckingham Palace,
          and the Tower of London. English culture is known for its love of tea, cricket,
          and football. The country is home to many world-class museums, galleries, and
          theatres, including the British Museum, the National Gallery, and the Royal
          Shakespeare Company.
        </p>
      </div>
    </div>
  );
};

export default HistoryAndCulture;
