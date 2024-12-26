import React, { useState } from "react";

const UseEffectEx6 = () => {
  let [state1, setState1] = useState(0);
  let [state2, setState2] = useState(0);
  let [state3, setState3] = useState(0);
  let [state4, setState4] = useState(0);
  return (
    <div>
      <span
        className="py-4 text-5xl"
        style={{ margin: "0px", padding: "55px" }}
      >
        {state1}
      </span>
      <span
        className="py-4 text-5xl"
        style={{ margin: "0px", padding: "55px" }}
      >
        {state2}
      </span>
      <span
        className="py-4 text-5xl"
        style={{ margin: "0px", padding: "55px" }}
      >
        {state3}
      </span>
      <span
        className="py-4 text-5xl"
        style={{ margin: "0px", padding: "55px" }}
      >
        {state4}
      </span>
    </div>
  );
};

export default UseEffectEx6;
