import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate= useNavigate();
  const footerLinks = [
    {
      title: "ABOUT",
      links: ["About us", "Contact us", "Careers", "Terms", "Privacy"],
    },
    {
      title: "OUR DESTINATIONS",
      links: ["Alaska", "Antarctic", "Canada", "Scotland", "Finland", "France", "Greenland", "Faroe Islands", "Ireland", "Iceland"],
    },
    {
      title: "ABOUT",
      links: ["About us", "Contact us", "Careers", "Terms", "Privacy"],
    },
    {
      title: "OUR DESTINATIONS",
      links: ["Alaska", "Antarctic", "Canada", "Scotland", "Finland", "France", "Greenland", "Faroe Islands", "Ireland", "Iceland"],
    },
  ];

  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="grid grid-cols-1 gap-4  px-6 py-10 mx-auto max-w-[1512px] md:grid-cols-5">
        
        {/* Left Section */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 text-lg font-semibold text-white">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
              <text x="50%" y="55%" textAnchor="middle" fontSize="14" fill="white">T</text>
            </svg>
            Traveler
          </div>
          <p className="mt-4 text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V14h-2v-2h2v-1.5c0-2.1 1.2-3.5 3.22-3.5.94 0 1.93.17 1.93.17v2.13h-1.09c-1.08 0-1.41.67-1.41 1.35V12h2.4l-.38 2h-2.02v7.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.42 3.61 8.07 8 8.88v-6.27h-2v-2h2v-1.5c0-2.07 1.17-3.5 3.25-3.5.92 0 1.85.17 1.85.17v2h-1.04c-1.03 0-1.46.67-1.46 1.35V12h2.45l-.4 2h-2.05v6.88c4.39-.81 7.99-4.46 7.99-8.88 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold text-white">{section.title}</h4>
            <ul className="mt-2 space-y-2">
              {section.links.map((link, i) => (
                <li key={i} onClick={() => { if(link === 'About us') navigate('/about'); else if(link === 'Contact us') navigate('/contact-us'); }} className="text-sm">
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-between px-6 py-4 text-sm text-center text-gray-400 bg-gray-800 md:flex-row">
        <span>© Copyright 2022, All Rights Reserved</span>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-white">Support</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
