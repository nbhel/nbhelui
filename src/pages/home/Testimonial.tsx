import React, { useState } from "react";
import { TestimonialData } from "../../data/Testimonial";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="">
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {TestimonialData.map((slideItem, slideIndex) => (
            <React.Fragment key={slideItem.id}>
              <div
                className={`duration-700 ease-in-out ${
                  slideIndex === currentSlide ? "" : "hidden"
                } max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6`}
              >
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-primary"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-xl font-medium text-gray-900 md:text-2xl">
                      {slideItem.message}
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={`${slideItem.image}`}
                      alt="profile_picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500">
                      <div className="pr-3 font-medium text-gray-900">
                        {slideItem.name}
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500">
                        {slideItem.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {TestimonialData.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-primary" : "bg-gray-100"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
