import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const Template = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={""} />
      </Route>
    </Routes>
  );
};

export default Template;
