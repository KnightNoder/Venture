import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Tourist1 from "../../assets/images/Tourist1.png";
import Tourist2 from "../../assets/images/Tourist2.png";
import Tourist3 from "../../assets/images/Tourist3.png";
import Tourist4 from "../../assets/images/Tourist4.png";
import Icons from '../../assets/Icons/Icons';

const PopularPlaces = ({country}) => {
  // Sample data for places in Andorra
  const navigate = useNavigate();
  const places = [
    { 
      name: "Grandvalira Ski Resort", 
      description: "One of the largest ski areas in the Pyrenees", 
      price: 580, 
      image: Tourist1 
    },
    { 
      name: "Vallnord-Pal Arinsal", 
      description: "Popular for skiing, snowboarding, and mountain biking", 
      price: 520, 
      image: Tourist2 
    },
    { 
      name: "Sant Joan de Caselles Church", 
      description: "A stunning Romanesque church from the 11th century", 
      price: 440, 
      image: Tourist3 
    },
    { 
      name: "Casa de la Vall", 
      description: "Historic parliament building in Andorra la Vella", 
      price: 460, 
      image: Tourist4 
    },
    { 
      name: "Caldea Spa", 
      description: "One of Europe's largest mountain spas with thermal waters", 
      price: 550, 
      image: Tourist1 
    },
    { 
      name: "Madriu-Perafita-Claror Valley", 
      description: "UNESCO World Heritage Site for hiking and nature", 
      price: 490, 
      image: Tourist2 
    },
    { 
      name: "Andorra la Vella", 
      description: "Famous for duty-free shopping and charming city streets", 
      price: 520, 
      image: Tourist3 
    },
    { 
      name: "Coma Pedrosa Natural Park", 
      description: "Ideal for hiking and nature lovers", 
      price: 460, 
      image: Tourist4 
    },
    { 
      name: "Tobotronc at Naturlandia", 
      description: "The world's longest alpine toboggan run", 
      price: 440, 
      image: Tourist1 
    }
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

  // For desktop view, show 4 places at a time in the carousel
  const visiblePlaces = isMobile 
    ? [places[currentSlide]] 
    : places.slice(currentSlide, currentSlide + 4);
  
  const maxSlide = isMobile 
    ? places.length - 1 
    : Math.max(0, places.length - 4);

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

      {/* Carousel View (for both mobile and desktop) */}
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
                    <button onClick={()=> navigate('/contact-us')} className="w-full py-2 mt-2 font-bold text-red-600 bg-white rounded-lg hover:bg-red-600 hover:text-white">
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

const TravelPage = ({country}) => {
  return (
    <div>
      <PopularPlaces country={country} />
    </div>
  );
};

export default TravelPage;