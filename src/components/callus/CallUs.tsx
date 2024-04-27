import telephone_receiver from "../../assets/images/telephone-receiver-with-circular-arrows.png";

const CallUs = () => {
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
              Exercitation ullamco laboris nisi ut aliquip exa aute irure dolor
              reprehenderit in voluptate velit
            </div>
          </div>
          <div
            className="relative text-center block text-4xl text-[#f79d2b] font-medium"
            style={{ fontFamily: "sans-serif" }}
          >
            Just Dial
            <a href="tel:+12334159872" className="">
              +1 (233) 415 9872
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
