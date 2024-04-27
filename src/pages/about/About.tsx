import Banner from "../../components/banner/Banner";
import OurClient from "../../components/ourclient/OurClient";
import ProjectCompletion from "../../components/projectCompletion/ProjectCompletion";
import TheSmartManCompany from "../../components/theSmartManCompany/TheSmartManCompany";
import { aboutCollection } from "../../data/About";
import AboutHero from "./AboutHero";
import DoYouLikeOurService from "./DoYouLikeOurService";

const About = () => {
  return (
    <div id="about">
      <Banner heading="about us" title="About" />
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20 lg:px-6">
          <AboutHero data={aboutCollection} />
        </div>
      </section>
      <TheSmartManCompany/>
      <DoYouLikeOurService/>
      <OurClient />
      <ProjectCompletion/>
    </div>
  );
};

export default About;
