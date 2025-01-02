import React, { useState } from "react";
import CustomLoader from "./CustomLoader";

const Loader = (Comp) => {
  return (props) => {
    console.log(props);
    console.log(Comp);

    let [state, setState] = useState(false);

    setTimeout(() => {
      setState(!state);
    }, 2000);

    if (!state) {
      return <CustomLoader />;
    }

    return <Comp props={{ ...props }} />;
  };
};

export default Loader;
