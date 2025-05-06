import React from 'react';
import History from '../../assets/images/History.png';

const HistoryAndCulture = () => {
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
      <div className="flex flex-col justify-center mx-6 text-left md:ml-32 md:w-1/2 md:pl-12">
        <h3 className="text-4xl font-bold text-black">History and Culture</h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          France boasts a rich historical tapestry dating back to prehistoric times. The country has been shaped by 
          Gauls, Romans, and Franks, evolving through the Middle Ages, Renaissance, French Revolution, and two World Wars. 
          Today, France stands as a global cultural icon known for its art, literature, philosophy, fashion, and cuisine.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          The French way of life celebrates art, beauty, and gastronomy. From the cafés of Paris to the lavender 
          fields of Provence, French culture embodies elegance and sophistication. The country is famous for its 
          artistic heritage, with legendary figures like Monet, Renoir, and Matisse, as well as literary giants 
          including Victor Hugo and Marcel Proust.
        </p>
      </div>
    </div>
  );
};


export default HistoryAndCulture;
