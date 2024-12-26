import React, { createContext, useState } from "react";

export let myStore = createContext();

const AppContext = () => {
  let [state, setState] = useState(0);

  return <myStore.Provider value={{ state, setState }}></myStore.Provider>;
};

export default AppContext;
