import React, { useState } from "react";
import HocEx1Child from "./HocEx1Child";

const HocEx1 = () => {
  const [state, setState] = useState(0);

  console.log("Parent");

  let a = 10;

  return (
    <div>
      <p>Parent</p>

      <button
        onClick={() => {
          setState(state + 1);
        }}
        className="px-3 bg-orange-500 rounded-md"
      >
        State : {state}
      </button>

      <br />
      <br />

      <hr />

      <HocEx1Child data={a} />
    </div>
  );
};

export default HocEx1;
