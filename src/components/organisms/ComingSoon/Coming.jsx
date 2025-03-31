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
  
  // Set the launch date (30 days from now)
  const calculateTimeLeft = () => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const difference = launchDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }
  };
  
  // Update countdown every second
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  // Initialize countdown on component mount
  useEffect(() => {
    calculateTimeLeft();
  }, []);
  
  // Handle email subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset subscription message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gradient-to-b from-blue-900 to-purple-900 sm:px-6 lg:px-8">
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
        <p className="mb-12 text-lg text-blue-200 sm:text-xl">
          We're working hard to bring you an amazing new experience. 
          Stay tuned for updates!
        </p>
        
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
        
        {/* Email subscription form */}
        <div className="max-w-md mx-auto mb-12">
          <h3 className="mb-4 text-xl font-semibold">Get Notified When We Launch</h3>
          {isSubscribed ? (
            <div className="px-4 py-3 text-green-300 rounded-lg bg-green-500/20">
              Thanks for subscribing! We'll keep you updated.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-3 font-medium transition-transform rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 active:scale-100"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;