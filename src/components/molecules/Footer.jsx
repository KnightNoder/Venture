import React, { useState } from 'react';

const MobileFooter = () => {
  // State to track which accordion sections are open
  const [openSections, setOpenSections] = useState({
    about: false,
    destinations: false,
    industries: false,
    resources: false
  });

  // Toggle function for accordion sections
  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  return (
    <footer className="bg-[#1a2639] text-white">
      {/* Main footer content */}
      <div className="px-6 py-8">
        {/* Logo and description */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#8494a7] flex items-center justify-center mr-3">
              <span className="text-[#8494a7] text-2xl font-bold">t</span>
            </div>
            <span className="text-[#8494a7] text-3xl font-medium">Traveler</span>
          </div>
          <p className="text-sm text-[#c9d0d9] leading-6">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy
            text ever since. Lorem ipsum is simply dummy text.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex mb-8">
          <a href="#" className="w-12 h-12 bg-[#3b4a5f] rounded-full flex items-center justify-center mr-4">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-[#f13b3f] rounded-full flex items-center justify-center mr-4">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-[#3b4a5f] rounded-full flex items-center justify-center mr-4">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-[#3b4a5f] rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* ABOUT Section */}
          <div className="border-b border-[#3b4a5f] pb-4">
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => toggleSection('about')}
            >
              <h3 className="text-lg font-bold">ABOUT</h3>
              <svg 
                className={`w-6 h-6 transform ${openSections.about ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.about && (
              <div className="mt-3 space-y-2">
                <a href="#" className="block text-[#8494a7]">Our Story</a>
                <a href="#" className="block text-[#8494a7]">Team</a>
                <a href="#" className="block text-[#8494a7]">Careers</a>
                <a href="#" className="block text-[#8494a7]">FAQ</a>
              </div>
            )}
          </div>

          {/* OUR DESTINATIONS Section */}
          <div className="border-b border-[#3b4a5f] pb-4">
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => toggleSection('destinations')}
            >
              <h3 className="text-lg font-bold">OUR DESTINATIONS</h3>
              <svg 
                className={`w-6 h-6 transform ${openSections.destinations ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.destinations && (
              <div className="mt-3 space-y-2">
                <a href="#" className="block text-[#8494a7]">Europe</a>
                <a href="#" className="block text-[#8494a7]">Asia</a>
                <a href="#" className="block text-[#8494a7]">America</a>
                <a href="#" className="block text-[#8494a7]">Africa</a>
              </div>
            )}
          </div>

          {/* INDUSTRIES Section */}
          <div className="border-b border-[#3b4a5f] pb-4">
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => toggleSection('industries')}
            >
              <h3 className="text-lg font-bold">INDUSTRIES</h3>
              <svg 
                className={`w-6 h-6 transform ${openSections.industries ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.industries && (
              <div className="mt-3 space-y-2">
                <a href="#" className="block text-[#8494a7]">Adventure</a>
                <a href="#" className="block text-[#8494a7]">Culinary</a>
                <a href="#" className="block text-[#8494a7]">Cruise</a>
                <a href="#" className="block text-[#8494a7]">Cultural</a>
              </div>
            )}
          </div>

          {/* RESOURCES Section */}
          <div className="border-b border-[#3b4a5f] pb-4">
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => toggleSection('resources')}
            >
              <h3 className="text-lg font-bold">RESOURCES</h3>
              <svg 
                className={`w-6 h-6 transform ${openSections.resources ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.resources && (
              <div className="mt-3 space-y-2">
                <a href="#" className="block text-[#8494a7]">Blog</a>
                <a href="#" className="block text-[#8494a7]">Newsletter</a>
                <a href="#" className="block text-[#8494a7]">Events</a>
                <a href="#" className="block text-[#8494a7]">Help Center</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-[#0f1525] py-6 px-6">
        <div className="mb-4">
          <p className="text-sm text-center">© Copyright 2022, All Rights Reserved</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-sm text-[#8494a7]">Support</a>
          <a href="#" className="text-sm text-[#8494a7]">Terms & Conditins</a>
          <a href="#" className="text-sm text-[#8494a7]">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;