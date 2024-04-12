import Banner from "../../components/banner/Banner";
import OurClient from "../../components/ourclient/OurClient";
import { aboutCollection } from "../../data/About";
import AboutHero from "./AboutHero";

const About = () => {
  return (
    <div id="about">
      <Banner heading="about us" title="About" />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20 lg:px-6">
          <AboutHero data={aboutCollection} />
        </div>
      </section>

      <OurClient />
    </div>
  );
};

export default About;
