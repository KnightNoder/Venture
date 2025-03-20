import React from "react";
import Icons from "../../assets/Icons/Icons";

const features = [
  {
    title: "Ultimate flexibility",
    description:
      "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
    icon: <Icons variant={"flexible"} />,
  },
  {
    title: "Memorable experiences",
    description:
      "Browse and book tours and activities so incredible, you'll want to tell your friends.",
    icon: <Icons variant={"memory"} />,
  },
  {
    title: "Quality at our core",
    description: "High-quality standards. Millions of reviews. A tourz company.",
    icon: <Icons variant={"quality"} />,
  },
  {
    title: "Award-winning support",
    description: "New price? New plan? No problem. We're here to help, 24/7.",
    icon: <Icons variant={"awards"} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FDF6F3] py-12 md:py-16 px-2 md:px-16 lg:px-48 md:bg-[#f8f5f2] text-black">
      <h2 className="text-2xl px-4 text md:text-left md:text-2xl font-bold text-[#0a0a40] mb-6 md:mb-10">
        Why choose Travellers Solution
      </h2>
      <div className="grid grid-cols-2 px-6 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12">
              <div className="text-[#ff1b1c]">{feature.icon}</div>
            </div>
            <h3 className="mt-3 text-md font-semibold text-[#0a0a40]">{feature.title}</h3>
            <p className="mt-1 text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;