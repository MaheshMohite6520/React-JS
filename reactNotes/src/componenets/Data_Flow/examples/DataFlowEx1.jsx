import React, { useState } from "react";
import DataFlowEx3 from "./DataFlowEx3";

const DataFlowEx1 = () => {
  let [state, setState] = useState(0);

  let fun = (val) => {
    setState(val);
  };

  return (
    <div className="border-black border-[1px] m-10">
      <h1>In Parent component: {state}</h1>
      <DataFlowEx3 props={{ fun, state }} />
    </div>
  );
};

export default DataFlowEx1;
