import TravelAbout1 from "../../../assets/images/TravelAbout1.png";
import TravelAbout2 from "../../../assets/images/TravelAbout2.png";
import TravelAbout3 from "../../../assets/images/TravelAbout3.png";


const TravelSection = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-12 text-base text-gray-900">
        At Travellers Solution, we believe that travel is more than just visiting new places—it's about creating unforgettable experiences, discovering different cultures,
and making lasting memories. As a trusted B2B travel consolidator specializing in outbound tours, we are proud to be the preferred partner for travel agents and
tour operators across India.
With a strong focus on European destinations, we offer a wide range of expertly crafted travel services including Free Independent Travel (FIT), Ad-hoc Tours,
Van Tours, and Self-drive Holidays. Our deep destination knowledge, reliable network of partners, and commitment to personalized service ensure that every
itinerary we deliver is seamless, well-planned, and enriching.
Whether it’s securing top-notch accommodations, providing comfortable transport, or ensuring prompt and friendly support, we handle every detail with care—so
your clients can enjoy a smooth, worry-free journey from start to finish.At Travellers Solution, we don’t just plan trips—we create experiences that inspire.
        </h1>
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
