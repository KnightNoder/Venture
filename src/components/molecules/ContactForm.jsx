export default function ContactForm() {
  return (
    <section className="flex flex-col items-start justify-center gap-10 p-10 mt-28 mb-36 md:flex-row">
      {/* Left: Contact Form */}
      <div className="w-full p-6 bg-white rounded-lg shadow-md md:w-1/3">
        <form className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="py-3 text-lg text-white transition bg-black rounded-md hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Contact Info */}
      <div className="w-full px-44 md:w-1/2">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <div className="grid grid-cols-1 mt-10 gap-14 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-lg font-semibold">Lhokseumawe, Aceh</h3>
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 2a2 2 0 0 0-2 2c0 9.4 7.6 17 17 17a2 2 0 0 0 2-2v-3a2 2 0 0 0-1.8-2 12.8 12.8 0 0 1-4-1 2 2 0 0 0-2 .4l-2.2 1.7a14 14 0 0 1-6.8-6.8L9 8a2 2 0 0 0 .4-2 12.8 12.8 0 0 1-1-4A2 2 0 0 0 6.6 2Z" />
                </svg>
                <span>+62 6943 6956</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2 0v.5l7 5.5 7-5.5V5H5Zm14 2.2-7 5.5-7-5.5V19h14V7.2Z" />
                </svg>
                <span>contact@domain.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A7 7 0 0 1 19 9c0 5.2-7 11-7 11S5 14.2 5 9a7 7 0 0 1 7-7Zm0 9a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z" />
                </svg>
                <span>Jl. Darussalam Hagu selatan</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
