import telephon_icon from "../../assets/images/telep_icon.png";
import { INFORMATION } from "../../constant/constant";

const NeedAService = () => {
  return (
    <section className="bg-secondary">
      <div className="sm:py-28 max-w-screen-xl mx-auto">
        <div className="relative">
          <div className="static px-4 mx-auto">
            <div className="relative border-t-[1px] border-none py-[60px] lg:block flex flex-col">
              <div className="relative float-left">
                <h3 className="relative lg:block flex justify-center xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl text-xl leading-[50px] font-medium text-white">
                  Need a service & ready to book? Call us
                </h3>
              </div>
              <div className="relative float-right lg:p-0 p-5">
                <h3 className="relative lg:inline-block flex justify-center xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[30px] text-[24px] leading-[50px] text-[#f79d2b] font-bold">
                  <img
                    src={telephon_icon}
                    alt="telphonic"
                    className="relative float-left sm:text-[34px] text-[24px] mr-[10px] leading-[50px] "
                  />
                  <a
                    href="tel:2334159872"
                    className="text-[#f79d2b] inline-block"
                  >
                    {INFORMATION.MOBILE}
                  </a>
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedAService;
