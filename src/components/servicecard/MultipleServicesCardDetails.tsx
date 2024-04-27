import { useState } from "react";
import { serviceCardDetails } from "../../data/Service";

const MultipleServicesCardDetails = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div>
      <section className="relative pt-28 px-0 pb-20">
        <div className="static max-w-screen-xl py-0 px-4 mx-auto">
          <div className="relative z-10 mb-14 text-center">
            <span className="block text-sm text-[#999] font-normal mb-2 uppercase">
              The SmartMan Company
            </span>
            <h2 className="block text-4xl text-[#1a2940] font-bold">
              Best HandyMan Services
            </h2>
            <div className="text-base text-[#555] font-light mt-5 leading-8">
              Comprehensive home repair and improvement services by skilled
              professionals you trust.
              <br />
              {/* reprehenderit in voluptate velit dolore magna aliqua ut enim ad
              minim */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="relative mb-[30px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 visible px-4">
              {serviceCardDetails.map((item, index) => (
                <div
                  key={index}
                  className={`relative bg-[#F9F9FA] text-center py-[60px] px-10 transition-all duration-300 ease-in hover:bg-[#1a2940] ${
                    hoveredIndex === index ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  <img
                    src={item.image}
                    alt="telphonic"
                    className={`relative inline-block h-24 w-24 text-white text-5xl leading-[95px] bg-[#eeeef1] overflow-hidden mb-9 transition-all duration-300 ease-in rounded-full ${
                      hoveredIndex === index ? "bg-[#f79d2b] text-whit" : ""
                    }`}
                  />
                  <h4
                    className={`text-xl leading-5 text-[#1a2940] font-medium mb-5 transition-all duration-300 ease-in ${
                      hoveredIndex === index ? "text-white" : ""
                    }`}
                  >
                    <a
                      href="https://www.nbhel.com"
                      className={`text-[#1a2940] inline-block transition-all duration-300 ease-in ${
                        hoveredIndex === index ? "text-white" : ""
                      }`}
                    >
                      {item.title}
                    </a>
                  </h4>
                  <div
                    className={`text-sm leading-7 text-[#555] font-light transition-all duration-300 ease-in ${
                      hoveredIndex === index ? "text-white" : ""
                    }`}
                  >
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultipleServicesCardDetails;
