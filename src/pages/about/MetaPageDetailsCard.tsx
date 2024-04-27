import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import house from "../../assets/images/house.png";
import todolist from "../../assets/images/todolist.png";
import quality from "../../assets/images/quality.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/route";

const MetaPageDetailsCard = () => {
  return (
    <section className="bg-white py-28 px-0 relative">
      <div className="static max-w-screen-xl px-[15px] mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="relative w-full min-h-[1px] px-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="relative bg-white py-[50px] pr-10 pl-[110px] overflow-hidden shadow-lg">
              <div className="absolute left-[30px] top-[45px] bg-gray-200 rounded-full p-2">
                <img
                  src={quality}
                  alt="house"
                  width={50}
                  height={50}
                  className="relative text-[54px] leading-none text-[#1a2940]"
                />
              </div>
              <h4 className="relative block text-xl leading-7 text-[#1a2940] font-medium tracking-tighter mb-[10px] m-0">
                <Link
                  to={ROUTES.ABOUT}
                  className="text-[#1a2940] inline-block transition-all duration-300 ease cursor-pointer"
                >
                  Super Quality With Superior Results
                </Link>
              </h4>
              <div className="relative text-[15px] leading-7 text-[#555] font-light mb-5">
                Delivering superior results through unmatched quality and
                dedication.
              </div>
              <div className="relative">
                <Link
                  to={ROUTES.ABOUT}
                  className="text-[15px] text-[#f79d2b] font-bold uppercase inline-block underline transition-all duration-300 ease"
                >
                  About us
                  <span className="float-right ml-[10px] text-[#1a2940] text-lg">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative bg-white py-[50px] pr-10 pl-[110px] overflow-hidden shadow-lg">
              <div className="absolute left-[30px] top-[45px] bg-gray-200 rounded-full p-2">
                <img
                  src={todolist}
                  alt="house"
                  width={50}
                  height={50}
                  className="relative text-[54px] leading-none text-[#1a2940]"
                />
              </div>
              <h4 className="relative block text-xl leading-7 text-[#1a2940] font-medium tracking-tighter mb-[10px] m-0">
                <Link
                  to={ROUTES.CONTACT}
                  className="text-[#1a2940] inline-block transition-all duration-300 ease cursor-pointer "
                >
                  Get Your To Do List Completed With Style
                </Link>
              </h4>
              <div className="relative text-[15px] leading-7 text-[#555] font-light mb-5">
                Achieve your tasks with flair and precision, getting your to-do
                list completed in style.
              </div>
              <div className="relative">
                <Link
                  to={ROUTES.CONTACT}
                  className="text-[15px] text-[#f79d2b] font-bold uppercase inline-block underline transition-all duration-300 ease"
                >
                  Get a Quote
                  <span className="float-right ml-[10px] text-[#1a2940] text-lg">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative bg-white py-[50px] pr-10 pl-[110px] overflow-hidden shadow-lg">
              <div className="absolute left-[30px] top-[45px] bg-gray-200 rounded-full p-2">
                <img
                  src={house}
                  alt="house"
                  width={50}
                  height={50}
                  className="relative text-[54px] leading-none text-[#1a2940]"
                />
              </div>
              <h4 className="relative block text-xl leading-7 text-[#1a2940] font-medium tracking-tighter mb-[10px] m-0">
                <Link
                  to={ROUTES.SERVICES}
                  className="text-[#1a2940] inline-block transition-all duration-300 ease cursor-pointer "
                >
                  Using Modern Tools And Trusted Staff
                </Link>
              </h4>
              <div className="relative text-[15px] leading-7 text-[#555] font-light mb-5">
                Experience efficiency and reliability by leveraging modern tools
                and trusted personnel for all your needs.
              </div>
              <div className="relative">
                <Link
                  to={ROUTES.SERVICES}
                  className="text-[15px] text-[#f79d2b] font-bold uppercase inline-block underline transition-all duration-300 ease"
                >
                  Our Services
                  <span className="float-right ml-[10px] text-[#1a2940] text-lg">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaPageDetailsCard;
