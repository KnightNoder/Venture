import React, { useState, useEffect, useRef } from 'react'

const GlobeWrapper = ({ cities, continent }) => {
  const [isClient, setIsClient] = useState(false);
  const wrapperRef = useRef(null);
  
  // Only render on client-side
  useEffect(() => {
    setIsClient(true);
    
    // Adding a small delay might help with initialization
    const timer = setTimeout(() => {
      if (wrapperRef.current) {
        // Force a redraw by slightly modifying the DOM
        wrapperRef.current.style.display = 'none';
        setTimeout(() => {
          if (wrapperRef.current) {
            wrapperRef.current.style.display = 'block';
          }
        }, 10);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Dynamically import the GlobeComponent
  const GlobeComponent = React.lazy(() => import('../../components/molecules/GlobeComponent'));
  
  return (
    <div 
      ref={wrapperRef}
      style={{ 
        height: '500px', 
        width: '100%', 
        border: '1px solid #333',
        position: 'relative',
        backgroundColor: '#000011'
      }}
    >
      {isClient ? (
        <React.Suspense fallback={<div style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>Loading Globe...</div>}>
          <GlobeComponent cities={cities} continent={continent} />
        </React.Suspense>
      ) : (
        <div style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>
          Initializing...
        </div>
      )}
    </div>
  );
};

export default GlobeWrapper;