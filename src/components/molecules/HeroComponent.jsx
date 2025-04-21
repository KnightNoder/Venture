import React from "react";
import Icons from "../../assets/Icons/Icons";

const features = [
  {
    title: "Expertise in European Travel",
    description:
      `Travellers Solution specializes in European outbound tours, backed by in-depth regional knowledge. This ensures expertly curated itineraries and seamless travel
experiences.`,
    icon: <Icons variant={"flexible"} />,
  },
  {
    title: "Comprehensive B2B Services",
    description:
      `We offer a wide range of travel solutions, including FITs, Van Tours, Self-drive, and Ad-hoc group tours. Our flexible approach caters to the unique requirements of each client.`,
    icon: <Icons variant={"memory"} />,
  },
  {
    title: "Strong Industry Network",
    description: "With a robust network of trusted partners across Europe, we secure the best deals and premium services. This guarantees exceptional value and reliable support throughout the journey.",
    icon: <Icons variant={"quality"} />,
  },
  {
    title: "Customer-Centric Approach",
    description: "We prioritize client satisfaction through prompt support and tailored travel planning. Our goal is to create memorable experiences that foster long-term partnerships",
    icon: <Icons variant={"awards"} />,
  },
  {
    title: "Trusted by Leading Travel Agents",
    description: "Numerous top travel agencies across India choose us as their preferred partner for European travel. Our consistent quality and dependability build lasting trust.",
    icon: <Icons variant={"shield"} />,
  },
  {
    title: "Dedicated Account Management",
    description: "Every partner is supported by a dedicated travel expert. This ensures personalized service, efficient coordination, and hassle-free execution for every booking.",
    icon: <Icons variant={"account"} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FDF6F3] py-12 md:py-16 px-4 md:px-16 lg:px-48 md:bg-[#f8f5f2] text-black">
      <h2 className="text-2xl text-center md:text-3xl font-bold text-[#0a0a40] mb-10 md:mb-12">
        Why choose Travellers Solution
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3 md:gap-10 md:mb-10">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4 w-14 h-14">
                <div className="text-[#ff1b1c]">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a40] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {features.slice(3, 6).map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4 w-14 h-14">
                <div className="text-[#ff1b1c]">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a40] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;