import ProjectCompletion from "../../components/projectCompletion/ProjectCompletion";
import TheSmartManCompany from "../../components/theSmartManCompany/TheSmartManCompany";
import MetaPageDetailsCard from "../about/MetaPageDetailsCard";
import HeroSection from "./HeroSection";
import NeedAService from "./NeedAService";
import OurServices from "./OurServices";
import OurTeamMembers from "./OurTeamMembers";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <main className="" id="home">
        <HeroSection />
        <TheSmartManCompany />
        <MetaPageDetailsCard />
        <NeedAService />
        <OurServices />
        <ProjectCompletion />
        <OurTeamMembers />
        <Testimonial />
      </main>
    </>
  );
};

export default Home;
