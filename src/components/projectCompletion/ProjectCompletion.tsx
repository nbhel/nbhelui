import home_icon from "../../assets/images/home_icon.svg";
import shopping_bag from "../../assets/images/shopping-bag.svg";
import setting_icon from "../../assets/images/setting_icon.svg";
import user_icon from "../../assets/images/user_icon.svg";
import { IoHome } from "react-icons/io5";

const ProjectCompletion = () => {
  return (
    <div className="my-28 max-w-screen-xl mx-auto">
      <div className="relative">
        <div className="relative mb-14">
          <div className="relative lg:px-32 px-16">
            <div className="relative flex justify-center items-center text-center overflow-hidden">
              {/* <img
                src={home_icon}
                alt="telphonic"
                className="relative h-20 w-20 text-[42px] leading-[90px] transition-all duration-300 ease-in"
              /> */}
              <IoHome className="relative h-20 w-20 leading-[90px] transition-all duration-300 ease-in text-secondary mb-5" />
            </div>
            <div className="grid lg:grid-cols-3 xl:gap-20 gap-10">
              <div className="relative py-20 px-4 text-center shadow-2xl bg-white transition-all duration-300 ease-in">
                <div className="absolute left-0 top-0 w-full h-full flex justify-center">
                  <img
                    src={shopping_bag}
                    alt="shopping_bag"
                    className="w-48 h-48 absolute text-9xl leading-4 text-[#f79d2b] font-normal opacity-10 translate-y-5  transition-all duration-300 ease-in"
                  />
                </div>
                <div className="relative text-6xl text-[#1a2940] leading-[60px] font-semibold mb-[10px] transition-all duration-300 ease-in">
                  <span className="relative inline-block text-6xl text-[#1a2940] leading-[60px] font-semibold transition-all duration-300 ease-in">
                    150+
                  </span>
                </div>
                <h4 className="relative block text-xl leading-6 font-light text-[#222] transition-all duration-300 ease-in">
                  Projects Completed
                </h4>
              </div>
              <div className="relative py-20 px-4 text-center shadow-2xl bg-white transition-all duration-300 ease-in">
                <div className="absolute left-0 top-0 w-full h-full flex justify-center">
                  <img
                    src={setting_icon}
                    alt="setting_icon"
                    className="w-48 h-48 absolute text-9xl leading-4 text-[#f79d2b] font-normal opacity-10 translate-y-5  transition-all duration-300 ease-in"
                  />
                </div>
                <div className="relative text-6xl text-[#1a2940] leading-[60px] font-semibold mb-[10px] transition-all duration-300 ease-in">
                  <span className="relative inline-block text-6xl text-[#1a2940] leading-[60px] font-semibold transition-all duration-300 ease-in">
                    30+
                  </span>
                </div>
                <h4 className="relative block text-xl leading-6 font-light text-[#222] transition-all duration-300 ease-in">
                  Years Of Experience
                </h4>
              </div>
              <div className="relative py-20 px-4 text-center shadow-2xl bg-white transition-all duration-300 ease-in">
                <div className="absolute left-0 top-0 w-full h-full flex justify-center">
                  <img
                    src={user_icon}
                    alt="user_icon"
                    className="w-48 h-48 absolute text-9xl leading-4 text-[#f79d2b] font-normal opacity-10 translate-y-5  transition-all duration-300 ease-in"
                  />
                </div>
                <div className="relative text-6xl text-[#1a2940] leading-[60px] font-semibold mb-[10px] transition-all duration-300 ease-in">
                  <span className="relative inline-block text-6xl text-[#1a2940] leading-[60px] font-semibold transition-all duration-300 ease-in">
                    75+
                  </span>
                </div>
                <h4 className="relative block text-xl leading-6 font-light text-[#222] transition-all duration-300 ease-in">
                  Expert Workers
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCompletion;
