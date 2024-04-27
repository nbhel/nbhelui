import { Link } from "react-router-dom";
import { OurClientCollection } from "../../data/OurClient";
import SubHeading from "../subheading/SubHeading";
import SubContent from "../subcontent/SubContent";

const OurClient = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex items-center justify-center pt-8 lg:pt-16">
          <SubHeading title="Trusted By Known Partners" />
        </div>
        <SubContent
          title="Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute irure dolor reprehenderit in voluptate velit dolore magna aliqua ut enim ad minim"
          lgSize="xl"
        />
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid pt-24 grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 items-center">
            {OurClientCollection?.map((item, index) => {
              return (
                <>
                  <Link
                    to={item.url}
                    className="flex items-center lg:justify-center"
                    key={index}
                  >
                    <img
                      className="w-full hover:scale-110 transition duration-500"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClient;
