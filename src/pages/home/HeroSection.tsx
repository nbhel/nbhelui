import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import MainHeading from "../../components/mainheading/MainHeading";
import SubContent from "../../components/subcontent/SubContent";
import landing_page from "../../assets/images/landing_page_new.svg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 sm:pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 sm:grid-cols-12 lg:pt-28">
        <div className="lg:mt-0 lg:col-span-5 sm:hidden">
          <img src={landing_page} alt="hero_image" className="h-auto w-auto" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7 sm:col-span-7">
          <MainHeading title="Innovative solutions and enduring brands with a focus on the long-term." />
          <SubContent
            title="We're committed to responsible, sustainable, and ethical
          manufacturing. Our small-scale approach allows us to focus on
          quality and reduce our impact. We're doing our best to delay the
          inevitable heat-death of the universe."
            lgSize="xl"
          />
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Button
              title="Show all products"
              type="light"
              onClick={() =>
                navigate("/products/fiberglass_&_polyester_braided_cable")
              }
            />
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 sm:col-span-5 sm:flex">
          <img src={landing_page} alt="hero_image" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
