import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons/Icons';
import Logo1 from '../../assets/images/Logo Sqaure.png'
// import Logo1 from '../../assets/images/smallLogo.png'


const DesktopTabletFooter = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#1a2639] text-white">
      {/* Main footer content */}
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6 justify-items-center">
          {/* Logo and description column */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src={Logo1 } className='w-40 h-20 rounded-xl' alt="" srcset="" />
            </div>
            <p className="text-sm text-[#c9d0d9] leading-6 mb-6">
            At Travellers Solution, our customers never have to worry about planning their vacation. Our high standards for customer service, good accommodations, and fun and exciting trips ensures that our travelers always receive the best when they choose us.

            </p>
            
            {/* Social Media Icons */}
            <div className="flex">
              <a href="#" className="w-10 h-10 bg-[#3b4a5f] hover:bg-red-500 rounded-full flex items-center justify-center mr-3">
                <Icons variant="twitter" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#3b4a5f] hover:bg-red-500 rounded-full flex items-center justify-center mr-3">
                <Icons variant="facebook" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#3b4a5f] hover:bg-red-500 rounded-full flex items-center justify-center mr-3">
                <Icons variant="instagram" />
              </a>
            </div>
          </div>

          {/* About section */}
          <div className="col-span-1">
            <h3 className="mb-4 text-base font-bold">ABOUT</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-[#8494a7] hover:text-white">About us</a></li>
              <li><a href="/contact-us" className="text-sm text-[#8494a7] hover:text-white">Contact us</a></li>
            </ul>
          </div>

          {/* Our Destinations section */}
          <div className="col-span-1">
            <h3 className="mb-4 text-base font-bold">TOP DESTINATIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">London</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Vienna</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Barcelona</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Scotland</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Paris</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Prague</a></li>
            </ul>
          </div>

          {/* Duplicate columns for the right side as shown in the image */}

          {/* Our Destinations section */}
          <div className="col-span-1">
            <h3 className="mb-4 text-base font-bold">TOP TOURS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Sweden</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Spain</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">France</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">United Kingdom</a></li>
              <li><a href="#" className="text-sm text-[#8494a7] hover:text-white">Italy</a></li>
            </ul>
          </div>

          <div className="col-span-1">
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-[#0E1E33] py-8">
        <div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row">
          <div>
            <p className="text-sm text-white">© Copyright 2025, All Rights Reserved</p>
          </div>
          <div className="flex mt-4 space-x-8 md:mt-0">
            <a href="#" className="text-sm text-[#8494a7] hover:text-white">Support</a>
            <a href="#" className="text-sm text-[#8494a7] hover:text-white">Terms & Conditions</a>
            <a href="#" className="text-sm text-[#8494a7] hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopTabletFooter;