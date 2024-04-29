import React from "react";
import telephone_receiver from "../../assets/images/telephone-receiver-with-circular-arrows.png";
import { INFORMATION } from "../../constant/constant";

const DoYouLikeOurService = () => {
  return (
    <div className="mt-28 max-w-screen-xl mx-auto">
      <div className="relative border-t-2 pb-28">
        <div className="static">
          <div className="relative z-10 text-center mb-9">
            <img
              src={telephone_receiver}
              alt="telphonic"
              className="inline-block h-12 w-16 text-4xl bg-white px-2 mb-12 -mt-6"
            />
            <h2 className="pl-0 block text-4xl text-[#1a2940] font-bold">
              Do you like our services & ready to book? Call us
            </h2>
            <div className="m-0 text-base text-gray-500 font-light mt-5">
              Absolutely! Our services are designed to delight. Ready to
              experience excellence? Give us a call today!
            </div>
          </div>
          <div
            className="relative text-center block sm:text-4xl text-3xl text-[#f79d2b] font-medium"
            style={{ fontFamily: "sans-serif" }}
          >
            Just Dial
            <a href={`tel:${INFORMATION.MOBILE}`} className="">
              {INFORMATION.MOBILE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoYouLikeOurService;
