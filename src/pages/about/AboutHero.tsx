import CheckList from "../../components/checklist/CheckList";
import SubContent from "../../components/subcontent/SubContent";
import SubHeading from "../../components/subheading/SubHeading";

const AboutHero = (props: { data: any }) => {
  return (
    <>
      {props.data.map((item: any, index: number) => {
        return (
          <>
            <div key={index} className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              {item.imageSide === "left" && (
                <img
                  className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex lg:top-0"
                  src={item.image}
                  alt="dashboard feature_image"
                />
              )}
              <div className="text-gray-500 sm:text-lg ">
                <SubHeading title={item.subHeading} />
                <SubContent title={item.subContentT} lgSize="md" />
                <div className="border-t border-gray-200"></div>
                {item.listItem.map((item: any) => {
                  return (
                    <>
                      <CheckList title={item.item} />
                    </>
                  );
                })}
                <SubContent title={item.subContentB} lgSize="xl" />
              </div>
              {item.imageSide === "right" && (
                <img
                  className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex lg:top-0"
                  src={item.image}
                  alt="dashboard feature_image"
                />
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default AboutHero;
