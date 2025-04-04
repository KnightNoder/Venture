import React, { useState } from 'react';
import Icons from '../../assets/Icons/Icons';
// import Logo from '../../assets/images/smallLogo.png'
import Logo1 from '../../assets/images/Logo Sqaure.png'
// import Logo1 from '../../assets/images/smallLogo.png'


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
            <img src={Logo1} className='w-20 h-10' alt="" srcset="" />
          </div>
          <p className="text-sm text-[#c9d0d9] leading-6">
          At Travellers Solution, our customers never have to worry about planning their vacation. Our high standards for customer service, good accommodations, and fun and exciting trips ensures that our travelers always receive the best when they choose us.

          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex mb-8">
          <a href="#" className="w-12 h-12 bg-[#3b4a5f] rounded-full flex items-center justify-center mr-4">
            <Icons variant="twitter" />
          </a>
          <a href="#" className="w-12 h-12 bg-[#f13b3f] rounded-full flex items-center justify-center mr-4">
            <Icons variant="facebook" />
          </a>
          <a href="#" className="w-12 h-12 bg-[#3b4a5f] rounded-full flex items-center justify-center mr-4">
            <Icons variant="instagram" />
          </a>
          <a href="#" className="w-12 h-12 bg-[#3b4a5f] rounded-full flex items-center justify-center">
            <Icons variant="github" />
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
                <a href="/about" className="block text-[#8494a7] hover:text-white">About us</a>
                <a href="/contact-us" className="block text-[#8494a7] hover:text-white">Contact us</a>
              </div>
            )}
          </div>

          {/* OUR DESTINATIONS Section */}
          <div className="border-b border-[#3b4a5f] pb-4">
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => toggleSection('destinations')}
            >
              <h3 className="text-lg font-bold">TOP DESTINATIONS</h3>
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
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">London</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Vienna</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Barcelona</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Scotland</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Paris</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Prague</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* INDUSTRIES Section */}
          <div className="border-b border-[#3b4a5f] pb-4">
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => toggleSection('industries')}
            >
              <h3 className="text-lg font-bold">TOP TOURS</h3>
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
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Sweden</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Spain</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">France</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">United Kingdom</a></li>
                  <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Italy</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* RESOURCES Section */}
          {/* <div className="border-b border-[#3b4a5f] pb-4">
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
                <a href="#" className="block text-[#8494a7] hover:text-white">Blog</a>
                <a href="#" className="block text-[#8494a7] hover:text-white">Newsletter</a>
                <a href="#" className="block text-[#8494a7] hover:text-white">Events</a>
                <a href="#" className="block text-[#8494a7] hover:text-white">Help Center</a>
              </div>
            )}
          </div> */}
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-[#0E1E33] py-6 px-6">
        <div className="mb-4">
          <p className="text-sm text-center">© Copyright 2025, All Rights Reserved</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-sm text-[#8494a7] hover:text-white">Support</a>
          <a href="#" className="text-sm text-[#8494a7] hover:text-white">Terms & Conditions</a>
          <a href="#" className="text-sm text-[#8494a7] hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;