import TravelAbout1 from "../../../assets/images/TravelAbout1.png";
import TravelAbout2 from "../../../assets/images/TravelAbout2.png";
import TravelAbout3 from "../../../assets/images/TravelAbout3.png";


const TravelSection = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900 md:text-4xl">
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
