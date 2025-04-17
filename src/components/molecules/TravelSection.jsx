import { useNavigate } from 'react-router-dom';
import Travel1 from "../../assets/images/Travel1.png";
import Travel2 from "../../assets/images/Travel2.png";
import Travel3 from "../../assets/images/Travel3.png";
import Travel4 from "../../assets/images/Travel4.png";

const TravelSection = ({ title }) => {
    const navigate = useNavigate()
  
  return (
    <section className="max-w-6xl px-6 py-12 mx-auto md:mt-[100px]">
      {/* Heading */}
      <div className="flex-col items-start justify-between hidden w-full mb-6 md:visible md:flex-row md:flex">
        <div className="w-full md:max-w-1/2">
          <h2 className="text-2xl font-bold">Our Expertise</h2>
          <p className="max-w-full mt-1 text-gray-600">
          We specialize in outbound tours and are renowned for our
          expertise in premier destinations such as Europe, UK, Scandinavia, and beyond.
          </p>
        </div>

        {/* <button className="flex items-center gap-2 px-4 py-1 mt-4 font-bold text-red-600 border border-red-600 rounded-md md:py-2 hover:bg-red-50">
          Let's Connect
        </button> */}
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Left Card */}
        <div className="flex-1 p-6 rounded-lg bg-red-50">
          <div className="flex items-center justify-between">
            {/* <h3 className="text-2xl font-bold text-red-600">
              Backpacking {title}
            </h3> */}

            {/* Price Tag */}
            {/* <div className="px-3 py-1 text-red-600 bg-white rounded-md shadow-md">
              <span className="text-xs text-gray-500">From</span>{" "}
              <strong>$700</strong>
            </div> */}
          </div>

          <p className="mt-3 text-base text-gray-700">
          At Travellers Solution, we take the stress out of vacation planning so our customers can focus on what truly matters—making unforgettable memories. With a strong
commitment to exceptional service, quality accommodations, and thoughtfully curated travel experiences, we go above and beyond to ensure every journey is seamless
and enjoyable. From providing reliable transportation and handpicked hotels to delivering timely and attentive support, we’re here to make every step of the travel
experience smooth, comfortable, and truly memorable.
          </p>

          {/* Button */}
          <button  onClick={()=> navigate('/contact-us')} className="w-full px-4 py-2 mt-4 font-bold text-red-500 bg-white rounded-md md:mt-32 hover:text-red-700 hover:bg-red-100">
            Let's Connect
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="grid flex-1 grid-cols-2 gap-4">
          <img src={Travel1} className="rounded-lg h-44 md:h-auto" alt="Travel 1" />
          <img src={Travel2} className="rounded-lg h-44 md:h-auto" alt="Travel 2" />
          <img src={Travel3} className="rounded-lg h-44 md:h-auto" alt="Travel 3" />
          <img src={Travel4} className="rounded-lg h-44 md:h-auto" alt="Travel 4" />
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
