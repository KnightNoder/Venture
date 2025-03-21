import React, { useState, useEffect } from 'react';
import Testimonial from '../../assets/images/Testimonial.png';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Traveller",
    review: "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Traveller",
    review: "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Traveller",
    review: "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-scroll for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile, currentSlide]);

  return (
    <section className="max-w-6xl px-6 py-12 mx-auto">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Testimonials</h2>

      {/* Desktop View - Grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="relative md:hidden">
        {/* Arrow buttons positioned at middle height */}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <button 
            onClick={prevSlide} 
            className="p-2 -ml-1 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <button 
            onClick={nextSlide} 
            className="p-2 -mr-1 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 mx-1 rounded-full ${currentSlide === index ? 'bg-red-600' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="h-full p-6 bg-white rounded-lg shadow-lg">
      {/* User Image */}
      <div className="flex justify-center">
        <img 
          src={Testimonial} 
          alt={testimonial.name} 
          className="w-16 h-16 border border-gray-200 rounded-full"
        />
      </div>

      {/* Review */}
      <h3 className="mt-4 text-lg font-bold text-center text-red-600">
        Excellent Service
      </h3>
      <p className="mt-2 text-sm text-center text-gray-700">
        {testimonial.review}
      </p>

      {/* User Info */}
      <div className="mt-4 text-center">
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default Testimonials;