import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Tourist1 from "../../assets/images/Tourist1.png";
import Tourist2 from "../../assets/images/Tourist2.png";
import Tourist3 from "../../assets/images/Tourist3.png";
import Tourist4 from "../../assets/images/Tourist4.png";
import Icons from '../../assets/Icons/Icons';

const TouristAttractions = () => {
  return (
    <div className="flex flex-col px-8 py-10 bg-red-50 md:px-56 md:flex-row md:items-center">
      {/* Left Content Section */}
      <div className="md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-black">Tourist Attractions</h2>
        <p className="mb-4 text-lg text-gray-700">
          France is home to some of the world's most iconic landmarks and attractions, drawing millions of visitors 
          each year. From magnificent architectural wonders to natural landscapes, here are some must-visit places:
        </p>
        <ul className="w-full space-y-3 list-none">
          {[
            "Eiffel Tower: The iconic symbol of Paris and France, offering panoramic views of the city.",
            "Louvre Museum: Home to thousands of artworks including the famous Mona Lisa.",
            "Mont-Saint-Michel: A magical island abbey off Normandy's coast with medieval architecture.",
            "Palace of Versailles: Stunning royal residence with exquisite gardens and Hall of Mirrors.",
            "French Riviera: Glamorous beaches and festivals in Nice, Cannes, and Saint-Tropez.",
            "Loire Valley: Famous for its magnificent châteaux, vineyards, and scenic drives."
          ].map((attraction, index) => (
            <li key={index} className="flex gap-3">
              {Icons && <Icons variant="left-marker" className="flex-shrink-0 w-6 h-6" />}
              <span className="text-lg text-gray-700">{attraction}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="grid grid-cols-2 gap-12 mt-6 md:gap-2 md:mt-0 md:w-1/2 md:grid-cols-2 md:pl-12">
        {[Tourist1, Tourist2, Tourist3, Tourist4].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="France attraction"
            className={`object-cover w-[200px] h-64 rounded-md shadow-md ${
              index % 2 === 0 ? "mt-0" : "mt-6"
            }`} // Zig-zag effect
          />
        ))}
      </div>
    </div>
  );
};




const PopularPlaces = () => {
  // Sample data for places in France
  const navigate = useNavigate();
  const places = [
    { name: "Paris", price: 600, image: Tourist1 },
    { name: "Nice", price: 500, image: Tourist2 },
    { name: "Bordeaux", price: 450, image: Tourist3 },
    { name: "Lyon", price: 400, image: Tourist4 },
  ];

  // State for tracking current slide in the carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to determine if we're on mobile view
  const [isMobile, setIsMobile] = useState(false);
  // Reference to the carousel container for touch events
  const carouselRef = useRef(null);
  // For tracking touch positions
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Check if we're on mobile view when component mounts
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Handle slide navigation
  const goToSlide = (index) => {
    // Make sure index stays within bounds
    const newIndex = Math.max(0, Math.min(index, places.length - 1));
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next slide
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };

  return (
    <div className="px-5 py-10 md:px-36">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Places in France</h2>
        <button className="px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white">
          SEE ALL
        </button>
      </div>
      <p className="mb-4 text-gray-600">
        Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, 
        we've got the travel tools to get you to your destination.
      </p>

      {isMobile ? (
        // Mobile Carousel View
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
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {places.map((place, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <div className="relative m-1 overflow-hidden rounded-lg shadow-lg">
                    <img src={place.image} alt={place.name} className="object-cover w-full h-[500px] " />
                    <div className="absolute bottom-0 left-0 w-full text-white bg-transparent bg-opacity-50 px:20 md:p-4">
                      <h3 className="text-lg font-bold">{place.name}</h3>
                      <p className="text-sm">Amazing journey</p>
                      <p className="text-lg font-semibold">€{place.price}</p>
                      <button onClick={()=> navigate('/contact-us')} className="w-full py-2 mt-2 font-bold text-red-600 bg-white rounded-lg hover:bg-red-600 hover:text-white">
                        BOOK FLIGHT
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
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

          {/* Navigation arrows */}
          <button
            className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ${
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
            className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ${
              currentSlide === places.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            onClick={nextSlide}
            disabled={currentSlide === places.length - 1}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : (
        // Desktop Grid View
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {places.map((place, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img src={place.image} alt={place.name} className="object-cover w-full h-[300px] md:h-[600px]" />
              <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-transparent bg-opacity-50">
                <h3 className="text-lg font-bold">{place.name}</h3>
                <p className="text-sm">Amazing journey</p>
                <p className="text-lg font-semibold">€{place.price}</p>
                <button onClick={()=> navigate('/contact-us')} className="w-full py-2 mt-2 font-bold text-red-600 bg-white rounded-lg hover:bg-red-600 hover:text-white">
                  BOOK FLIGHT
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const TravelPage = () => {
  return (
    <div>
      <TouristAttractions />
      <PopularPlaces />
    </div>
  );
};

export default TravelPage;

