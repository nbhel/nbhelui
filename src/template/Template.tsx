import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constant/route";

// Import Layout Page
import Layout from "./layout/Layout";

// Import Pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Certification from "../pages/certification/Certification";
import Contact from "../pages/contact/Contact";

const Template = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.CERTIFICATION} element={<Certification />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Template;
