import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/images/Logo Sqaure.png'


const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="items-center justify-end hidden px-4 py-4 text-sm text-white bg-black md:flex md:px-10">
        <div className="flex items-center space-x-6 md:mr-12 lg:mr-48">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3C2.25 2.42 2.67 2 3.25 2H5.75C6.3 2 6.72 2.42 6.72 3C6.72 3.94 6.94 4.84 7.33 5.64C7.65 6.31 7.45 7.1 6.86 7.52L5.59 8.46C7.09 11.33 9.67 13.91 12.54 15.41L13.48 14.14C13.9 13.55 14.69 13.35 15.36 13.67C16.16 14.06 17.06 14.28 18 14.28C18.58 14.28 19 14.7 19 15.25V17.75C19 18.33 18.58 18.75 18 18.75C9.56 18.75 2.75 11.94 2.75 3.5V3Z"
              />
            </svg>
            <span>+31 782 72831 333</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h18M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>sales@traveller.com</span>
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between px-4 py-3 bg-white md:px-10">
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center space-x-2 text-lg font-bold text-blue-500 cursor-pointer md:ml-12 lg:ml-48"
        >
          <img className='w-20 h-10' src={Logo}></img>
          <span>Traveler</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden space-x-6 text-sm font-medium text-gray-700 md:flex md:mr-12 lg:mr-48">
          <li onClick={() => navigate('/about')} className="cursor-pointer hover:text-blue-500">ABOUT</li>
          <li className="flex items-center cursor-pointer hover:text-blue-500">
            OUR SERVICES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li className="flex items-center cursor-pointer hover:text-blue-500">
            DESTINATIONS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li className="flex items-center cursor-pointer hover:text-blue-500">
            TOURS AND PACKAGES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li onClick={()=>navigate('/contact-us')} className="cursor-pointer hover:text-blue-500">CONTACT US</li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="text-blue-500 md:hidden"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute z-50 w-full bg-white shadow-lg md:hidden">
          <ul className="px-4 py-2 space-y-3 text-sm font-medium text-gray-700">
            <li 
              onClick={() => {
                navigate('/about');
                setMobileMenuOpen(false);
              }} 
              className="py-2 border-b border-gray-100 cursor-pointer hover:text-blue-500"
            >
              ABOUT
            </li>
            <li className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer hover:text-blue-500">
              SERVICES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </li>
            <li className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer hover:text-blue-500">
              TOURS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </li>
            <li className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer hover:text-blue-500">
              PACKAGES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </li>
            <li className="py-2 border-b border-gray-100 cursor-pointer hover:text-blue-500">NEWS</li>
            <li className="py-2 cursor-pointer hover:text-blue-500">LUXURY</li>
          </ul>
          
          {/* Mobile Contact Info */}
          <div className="px-4 py-3 mt-4 text-xs text-gray-600 bg-gray-50">
            <div className="flex items-center mb-2 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3C2.25 2.42 2.67 2 3.25 2H5.75C6.3 2 6.72 2.42 6.72 3C6.72 3.94 6.94 4.84 7.33 5.64C7.65 6.31 7.45 7.1 6.86 7.52L5.59 8.46C7.09 11.33 9.67 13.91 12.54 15.41L13.48 14.14C13.9 13.55 14.69 13.35 15.36 13.67C16.16 14.06 17.06 14.28 18 14.28C18.58 14.28 19 14.7 19 15.25V17.75C19 18.33 18.58 18.75 18 18.75C9.56 18.75 2.75 11.94 2.75 3.5V3Z"
                />
              </svg>
              <span>+31 782 72831 333</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h18M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>sales@traveller.com</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;