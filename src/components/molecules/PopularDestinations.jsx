import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutParis from '../../assets/images/AboutArmenia.png';
import AboutSwiss from '../../assets/images/AboutLondon.png';
import AboutThailand from '../../assets/images/AboutFinland.png';
import AboutTaiwan from '../../assets/images/AboutPortugal.png';
import AboutIndonesia from '../../assets/images/AboutNorway.png';
import AboutSingapore from '../../assets/images/AboutCroatia.png';

export default function PopularDestinations() {
  // Define our destinations data
  const navigate = useNavigate()
  const destinations = [
    { name: "Armenia", image: AboutParis },
    { name: "London", image: AboutSwiss },
    { name: "Finland", image: AboutThailand },
    { name: "Portugal", image: AboutTaiwan },
    { name: "Norway", image: AboutIndonesia },
    { name: "Croatia", image: AboutSingapore },
  ];

  // State for tracking current slide and auto-play functionality
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Calculate how many items to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);
  
  // Track window width for responsive carousel
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    }
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If we're at the end, loop back to the beginning, but account for multiple visible items
      const lastPossibleIndex = destinations.length - itemsToShow;
      return prevIndex >= lastPossibleIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If we're at the beginning, loop to the end
      const lastPossibleIndex = destinations.length - itemsToShow;
      return prevIndex <= 0 ? lastPossibleIndex : prevIndex - 1;
    });
  };
  
  // Function to go to a specific slide
  const goToSlide = (index) => {
    // Ensure we don't go past the last possible starting index
    const lastPossibleIndex = Math.max(0, destinations.length - itemsToShow);
    const validIndex = Math.min(index, lastPossibleIndex);
    setCurrentIndex(validIndex);
  };

  // Get the currently visible destinations
  const visibleDestinations = destinations.slice(
    currentIndex, 
    currentIndex + itemsToShow
  );

  return (
    <section className="px-6 py-10 mb-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex-col items-center justify-between mb-6 md:flex md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">Top Selling Destinations</h2>
            <p className="mt-2 text-gray-600">
              Explore our travelers' favorite destinations around the world.
            </p>
          </div>
          <button className="px-4 py-2 mt-4 text-red-500 transition border border-red-500 rounded md:mt-0 hover:bg-red-500 hover:text-white">
            DISCOVER MORE
          </button>
        </div>

        {/* Carousel container with relative positioning for arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full -left-5 top-1/2 hover:bg-opacity-75"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="relative mt-10 overflow-hidden md:mt-0">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(0)` }}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ 
                display: 'grid',
                gridTemplateColumns: `repeat(${itemsToShow}, minmax(0, 1fr))`,
                gap: '1.5rem'
              }}>
                {visibleDestinations.map((destination, index) => (
                  <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name} 
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{destination.name}</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        Experience the charm and beauty of {destination.name}. Discover iconic landmarks, local cuisine, and unforgettable adventures.
                      </p>
                      <div className="flex items-center mt-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 1l2.47 6.09 6.53.53-4.94 4.14 1.54 6.24L10 14.27l-5.6 3.73 1.54-6.24L1 7.62l6.53-.53z" />
                          </svg>
                        ))}
                      </div>
                      <button  onClick={()=> navigate('/contact-us')} className="w-full py-2 mt-4 text-red-500 transition border border-red-500 rounded hover:bg-red-500 hover:text-white">
                        Let's Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full -right-5 top-1/2 hover:bg-opacity-75"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators/Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {destinations.slice(0, destinations.length - itemsToShow + 1).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
          >
            {isAutoPlaying ? (
              <>
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Play
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}