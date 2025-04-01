import React, { useState, useEffect } from 'react';

const ComingSoonPage = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // State for email input
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Calculate the launch date once (30 days from component mount)
  const [launchDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  });
  
  // Calculate time left between now and launch date
  const calculateTimeLeft = () => {
    const difference = launchDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 * 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      // If launch date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };
  
  // Update countdown every second using setInterval instead of setTimeout
  useEffect(() => {
    // Calculate immediately on mount
    setTimeLeft(calculateTimeLeft());
    
    // Then set up the interval for subsequent updates
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [launchDate]); // Add launchDate as a dependency
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-[#0E1E33] sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Traveller's Solution
          </span>
        </h1>
      </div>
      
      {/* Main content */}
      <div className="w-full max-w-3xl text-center">
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
          Something Exciting Is Coming Soon
        </h2>
        
        {/* Countdown timer */}
        <div className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-4">
          <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold sm:text-5xl">{timeLeft.days}</div>
            <div className="text-sm tracking-wider text-blue-300 uppercase">Days</div>
          </div>
          <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold sm:text-5xl">{timeLeft.hours}</div>
            <div className="text-sm tracking-wider text-blue-300 uppercase">Hours</div>
          </div>
          <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold sm:text-5xl">{timeLeft.minutes}</div>
            <div className="text-sm tracking-wider text-blue-300 uppercase">Minutes</div>
          </div>
          <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold sm:text-5xl">{timeLeft.seconds}</div>
            <div className="text-sm tracking-wider text-blue-300 uppercase">Seconds</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ComingSoonPage;