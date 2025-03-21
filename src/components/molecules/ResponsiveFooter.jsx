import React, { useState, useEffect } from 'react';
import MobileFooter from './Footer';
import DesktopTabletFooter from './DesktopFooter';

const ResponsiveFooter = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if viewport is mobile sized
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener to dynamically update on window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Render appropriate footer based on screen size
  return isMobile ? <MobileFooter/> : <DesktopTabletFooter />;
};

export default ResponsiveFooter;