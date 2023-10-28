import React from "react";
import Template from "./template/Template";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  );
};

export default App;
