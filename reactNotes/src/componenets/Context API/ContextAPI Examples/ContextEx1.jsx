import React, { useContext } from "react";
import { myStore } from "../AppContext";

const ContextEx1 = () => {
  let data = useContext(myStore);

  console.log(data);

  let [state, setState] = data;

  return (
    <div>
      <h1>State : {state}</h1>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      ></button>
    </div>
  );
};

export default ContextEx1;
