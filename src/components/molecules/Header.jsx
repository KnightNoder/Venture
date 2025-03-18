import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      {/* Top Bar */}
      <div className="flex items-center justify-end px-10 py-4 text-sm text-white bg-black">
        <div className="flex items-center mr-48 space-x-6">
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

      <nav className="flex items-center justify-between px-10 py-3 bg-white ">
        <div onClick={()=> navigate('/')} className="flex items-center ml-48 space-x-2 text-lg font-bold text-blue-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
          <span>Traveler</span>
        </div>

        {/* Menu */}
        <ul className="flex mr-48 space-x-6 text-sm font-medium text-gray-700">
          <li onClick={()=> navigate('/about')} className="cursor-pointer hover:text-blue-500">ABOUT</li>
          <li className="flex items-center cursor-pointer hover:text-blue-500">
            SERVICES
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
            TOURS
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
            PACKAGES
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
          <li className="cursor-pointer hover:text-blue-500">NEWS</li>
          <li className="cursor-pointer hover:text-blue-500">LUXURY</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
