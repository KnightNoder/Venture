import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons/Icons';
import Logo1 from '../../assets/images/smallLogo.png'


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
              <img src={Logo1 } className='w-15 h-15' alt="" srcset="" />
              <span className="text-[#8494a7] text-2xl font-medium">Traveler</span>
            </div>
            <p className="text-sm text-[#c9d0d9] leading-6 mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem ipsum has been the industry's standard dummy text ever 
              since. Lorem ipsum is simply dummy text.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex">
              <a href="#" className="w-10 h-10 bg-[#3b4a5f] rounded-full flex items-center justify-center mr-3">
                <Icons variant="twitter" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#f13b3f] rounded-full flex items-center justify-center mr-3">
                <Icons variant="facebook" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#3b4a5f] rounded-full flex items-center justify-center mr-3">
                <Icons variant="instagram" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#3b4a5f] rounded-full flex items-center justify-center">
                <Icons variant="github" />
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
      <div className="bg-[#05073C] py-8">
        <div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row">
          <div>
            <p className="text-sm text-white">© Copyright 2022, All Rights Reserved</p>
          </div>
          <div className="flex mt-4 space-x-8 md:mt-0">
            <a href="#" className="text-sm text-[#8494a7] hover:text-white">Support</a>
            <a href="#" className="text-sm text-[#8494a7] hover:text-white">Terms & Conditins</a>
            <a href="#" className="text-sm text-[#8494a7] hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopTabletFooter;