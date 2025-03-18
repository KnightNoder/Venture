import SubImage from "../../assets/images/SubscribeImage.png";

const SubscribeSection = () => {
  return (
    <div
      className="relative w-full h-[700px] md:h-[600px] flex flex-col items-center justify-center text-white text-center"
      style={{
        backgroundImage: `url(${SubImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl px-4">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Subscribe to get special price
        </h2>
        <p className="mt-2 text-sm sm:text-base">
          Don’t wanna miss something? Subscribe right now and get special
          promotion and monthly newsletter.
        </p>

        {/* Subscription Input */}
        <div className="flex items-center justify-center mt-6">
          <div className="flex w-full max-w-md p-2 bg-white rounded-full">
            <input
              type="email"
              placeholder="Type your email here"
              className="flex-1 p-2 text-gray-700 bg-transparent focus:outline-none"
            />
            <button className="px-6 py-2 text-white bg-black rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
