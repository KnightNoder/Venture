import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Tourist1 from "../../assets/images/Tourist1.png";
import Tourist2 from "../../assets/images/Tourist2.png";
import Tourist3 from "../../assets/images/Tourist3.png";
import Tourist4 from "../../assets/images/Tourist4.png";
import { tourismData } from './tourismData';

const PopularPlaces = ({ country }) => {
  const navigate = useNavigate();
  
  // Find the country data
  const countryData = tourismData.find(data => 
    data.country.toLowerCase() === country?.toLowerCase()
  );

  // Create places array from attractions data with sample images and prices
  const places = countryData ? countryData.popularAttractions.map((attraction, index) => ({
    name: attraction.name,
    description: attraction.description,
    price: 440 + (index * 20), // Generate varied prices
    image: [Tourist1, Tourist2, Tourist3, Tourist4][index % 4] // Cycle through images
  })) : [];

  // Rest of your existing state and logic remains the same
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const goToSlide = (index) => {
    const newIndex = Math.max(0, Math.min(index, places.length - 1));
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const visiblePlaces = isMobile 
    ? [places[currentSlide]] 
    : places.slice(currentSlide, currentSlide + 4);
  
  const maxSlide = isMobile 
    ? places.length - 1 
    : Math.max(0, places.length - 4);

  // Fallback if country not found
  if (!countryData) {
    return (
      <div className="p-6 text-center">
        <p>Places information not available for {country}</p>
      </div>
    );
  }

  return (
    <div className="px-5 py-10 md:px-36">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Places in {country}</h2>
        <button className="px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white">
          SEE ALL
        </button>
      </div>
      <p className="mb-4 text-gray-600">
        Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, 
        we've got the travel tools to get you to your destination.
      </p>

      {/* Carousel View */}
      <div className="relative">
        <div 
          ref={carouselRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${isMobile ? currentSlide * 100 : (currentSlide * 25)}%)` }}
          >
            {places.map((place, index) => (
              <div key={index} className={`flex-shrink-0 ${isMobile ? 'w-full' : 'w-1/4'} px-2`}>
                <div className="relative m-1 overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[500px]">
                  <img src={place.image} alt={place.name} className="object-cover w-full h-full" />
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-black bg-opacity-50">
                    <h3 className="text-lg font-bold">{place.name}</h3>
                    <p className="text-sm">{place.description}</p>
                    <p className="mt-1 text-sm font-semibold text-yellow-300">3 days and 4 nights package</p>
                    <p className="text-lg font-semibold">€{place.price}</p>
                    <button 
                      onClick={() => navigate('/contact-us')} 
                      className="w-full py-2 mt-2 font-bold text-red-600 bg-white rounded-lg hover:bg-red-600 hover:text-white"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots (only for mobile) */}
        {isMobile && (
          <div className="flex justify-center mt-4">
            {places.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === index ? 'bg-red-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Navigation arrows */}
        <button
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 ${
            currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 ${
            currentSlide === maxSlide ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
          onClick={nextSlide}
          disabled={currentSlide === maxSlide}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const TravelPage = ({ country }) => {
  return (
    <div>
      <PopularPlaces country={country} />
    </div>
  );
};

export default TravelPage;