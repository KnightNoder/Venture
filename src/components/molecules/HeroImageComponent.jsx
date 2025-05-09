import { useLocation } from "react-router-dom";

const HeroSection = ({image, title, description }) => {
  const words = title.split(" ");
  const midIndex = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, midIndex).join(" ");
  const secondLine = words.slice(midIndex).join(" ");
  const location = useLocation();
  const isAboutPage = location.pathname.includes('about')|| location.search.includes('about'); 
  const isDestinationPage = location.pathname.includes('destination') || location.search.includes('destination') 
  console.log(isAboutPage, isDestinationPage);
    

  return (
    <div
      className="relative w-full h-[300px] md:h-[600px] flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl font-bold w-full md:w-[800px] md:text-6xl">
          {isDestinationPage ? `Travel to ${firstLine}` : firstLine} 
        </h1>
        {(!isDestinationPage && !isAboutPage) && description && (
          <p className="mt-2 text-lg md:text-xl">{description}</p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;

