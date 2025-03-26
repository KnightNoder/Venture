import React, { useState } from 'react';
import SubscribeImage from '../../assets/images/SubscribeImage.png';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  
  // Background styles to mimic the image from the reference
  const backgroundStyle = {
    backgroundImage: `url(${SubscribeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#151c36'
  };

  return (
    <div 
      className="relative flex flex-col h-[300px] md:h-[400px] items-center justify-center w-full py-16 text-center text-white"
      style={backgroundStyle}
    >
      {/* Dark Overlay with blue tint */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4">
        <h2 className="mb-4 text-4xl font-bold">
          Subcribe to get special price
        </h2>
        <p className="mb-8 text-sm opacity-90">
          Don't wanna miss something? subscribe right now and get special
          promotion and monthly newsletter
        </p>

        {/* Subscription Input - Mobile Optimized */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Input field with rounded corners */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email here"
              className="w-full py-3 pl-5 pr-24 text-gray-700 bg-white rounded-full md:pr-32 focus:outline-none"
            />
            
            {/* Button positioned inside the input field */}
            <button className="absolute px-4 text-sm font-medium text-white transition-colors bg-black rounded-full right-1 top-1 bottom-1 md:px-6 md:text-base hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;