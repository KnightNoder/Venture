import AboutParis from '../../assets/images/AboutParis.png'
import AboutSwiss from '../../assets/images/AboutSwiss.png'
import AboutThailand from '../../assets/images/AboutThailand.png'
import AboutTaiwan from '../../assets/images/AboutTaiwan.png'
import AboutIndonesia from '../../assets/images/AboutIndonesia.png'
import AboutSingapore from '../../assets/images/AboutSingapore.png'

export default function PopularDestinations() {
  const destinations = [
    { name: "Paris", image: AboutParis },
    { name: "Swiss", image: AboutSwiss },
    { name: "Thailand", image: AboutThailand },
    { name: "Taiwan", image: AboutTaiwan },
    { name: "Indonesia", image: AboutIndonesia },
    { name: "Singapore", image: AboutSingapore },
  ];

  return (
    <section className="px-6 py-10 mb-[200px]">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Popular Destination</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <button className="px-4 py-2 text-red-500 transition border border-red-500 rounded hover:bg-red-500 hover:text-white">
            DISCOVER MORE
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((destination, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img src={destination.image} alt={destination.name} className="object-cover w-full h-64" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{destination.name}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="flex items-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 1l2.47 6.09 6.53.53-4.94 4.14 1.54 6.24L10 14.27l-5.6 3.73 1.54-6.24L1 7.62l6.53-.53z" />
                    </svg>
                  ))}
                </div>
                <button className="w-full py-2 mt-4 text-red-500 transition border border-red-500 rounded hover:bg-red-500 hover:text-white">
                  BOOKING NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
