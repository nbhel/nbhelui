import telephon_icon from "../../assets/images/telep_icon.png";
import { INFORMATION } from "../../constant/constant";

const NeedAService = () => {
  return (
    <section className="bg-secondary">
      <div className="py-28 max-w-screen-xl mx-auto">
        <div className="relative">
          <div className="static px-4 mx-auto">
            <div className="relative border-t-[1px] border-none py-[60px]">
              <div className="relative float-left">
                <h3 className="relative block text-4xl leading-[50px] font-medium text-white">
                  Need a service & ready to book? Call us
                </h3>
              </div>
              <div className="relative float-right">
                <h3 className="relative inline-block text-[40px] leading-[50px] text-[#f79d2b] font-bold">
                  <img
                    src={telephon_icon}
                    alt="telphonic"
                    className="relative float-left text-[34px] mr-[10px] leading-[50px] "
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
