import TravelAbout1 from "../../../assets/images/TravelAbout1.png";
import TravelAbout2 from "../../../assets/images/TravelAbout2.png";
import TravelAbout3 from "../../../assets/images/TravelAbout3.png";


const TravelSection = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Explore new worlds with <br /> exotic natural scenery
        </h2>
        <p className="mt-3 text-gray-600">
          Explore the world with what you love beautiful natural beauty.
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-6 px-6 mx-auto mt-8 md:grid-cols-3">
        {/* Image 1 */}
        <div className="relative w-full overflow-hidden rounded-lg h-72">
          <img
            src={TravelAbout1}
            alt="Couple Traveling"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 2 with Text */}
        <div className="relative w-full overflow-hidden rounded-lg h-72">
          <img
            src={TravelAbout2}
            alt="Bali, Indonesia"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 w-full p-4 bg-white rounded-b-lg shadow-md">
            <h3 className="text-lg font-bold">Bali, Indonesia.</h3>
            <p className="text-sm text-gray-600">
              Bali is a beautiful tourist spot and is visited by many travelers.
            </p>
            {/* Quote Icon (SVG) */}
            <div className="absolute bottom-3 right-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17c-1.657 0-3-1.343-3-3s1.343-3 3-3h1v1H7c-1.104 0-2 .896-2 2s.896 2 2 2h1v1H7zm10 0c-1.657 0-3-1.343-3-3s1.343-3 3-3h1v1h-1c-1.104 0-2 .896-2 2s.896 2 2 2h1v1h-1z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative w-full overflow-hidden rounded-lg h-72">
          <img
            src={TravelAbout3}
            alt="Statue of Liberty"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
