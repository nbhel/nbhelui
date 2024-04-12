import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constant/route";

// Import Layout Page
import Layout from "./layout/Layout";

// Import Pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Certification from "../pages/certification/Certification";
import Contact from "../pages/contact/Contact";
import ProductDetails from "../pages/products/ProductDetails";
import Services from "../pages/services/Services";
import Error from "../pages/error/Error";

const Template = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.PRODUCTS} element={<ProductDetails />}>
          {/* Nested Route for specific product details */}
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path={ROUTES.CERTIFICATION} element={<Certification />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Template;
