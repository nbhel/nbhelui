import { Routes, Route } from "react-router-dom";

// Import Layout Page
import Layout from "./layout/Layout";

// Import Pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const Template = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Template;
