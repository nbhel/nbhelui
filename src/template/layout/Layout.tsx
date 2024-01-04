import { Outlet } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className="pt-[72px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
