import React from "react";
import ContextEx1 from "./ContextAPI Examples/ContextEx1";
import AppContext from "./AppContext";

const ContextApiIntro = () => {
  return (
    <AppContext>
      <ContextEx1 />
    </AppContext>
  );
};

export default ContextApiIntro;
