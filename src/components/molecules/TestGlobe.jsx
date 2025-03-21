import React, { useState, useEffect } from 'react';

const NeomZoomComponent = () => {
  const [zoomed, setZoomed] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  
  // Tile data
  const tiles = [
    { id: 1, title: "Sustainability", description: "Renewable energy solutions", videoSrc: "/api/placeholder/400/320" },
    { id: 2, title: "Smart City", description: "AI-powered infrastructure", videoSrc: "/api/placeholder/400/320" },
    { id: 3, title: "Innovation", description: "Cutting-edge technologies", videoSrc: "/api/placeholder/400/320" },
    { id: 4, title: "Tourism", description: "Unique visitor experiences", videoSrc: "/api/placeholder/400/320" }
  ];
  
  useEffect(() => {
    // Trigger zoom animation after component mount
    const timer = setTimeout(() => {
      setZoomed(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Main background video */}
      <div className={`absolute inset-0 transition-all duration-7000 ease-in-out ${zoomed ? 'scale-150' : 'scale-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="flex items-center justify-center w-full h-full text-lg text-white bg-blue-900">
          {/* This div simulates the video - in production use actual video */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl">Earth View Video Background</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive tiles section - appears after zoom */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${zoomed ? 'opacity-100' : 'opacity-0'}`}>
        {zoomed && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid max-w-5xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
              {tiles.map((tile) => (
                <div
                  key={tile.id}
                  className="relative h-64 overflow-hidden transition-transform duration-300 transform rounded-lg cursor-pointer group hover:scale-105"
                  onMouseEnter={() => setActiveSection(tile.id)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  
                  {/* Conditional background change on hover */}
                  <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
                    {activeSection === tile.id ? (
                      <div className="w-full h-full bg-blue-600">
                        {/* Tile specific background that appears on hover */}
                        <div className="flex items-center justify-center h-full text-white">
                          <span>Video for {tile.title}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-blue-900"></div>
                    )}
                  </div>
                  
                  {/* Tile content */}
                  <div className="relative z-20 flex flex-col justify-end h-full p-4">
                    <h3 className="mb-2 text-xl font-bold text-white">{tile.title}</h3>
                    <p className="text-sm text-white opacity-80">{tile.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Initial title that fades out during zoom */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${zoomed ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-6xl font-bold tracking-wider text-white">NEOM</h1>
      </div>
    </div>
  );
};

export default NeomZoomComponent;