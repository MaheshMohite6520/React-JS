import React from "react";

const DataFlowEx2 = () => {
  let { state, setState } = data.props;
  return (
    <div>
      <h1>In Child Component: {state}</h1>

      <button
        className="bg-rose-400 border-[1px] w-40 text-white text-[30px] p-2 rounded-lg"
        onClick={() => {
          setState(200);
        }}
      >
        {" "}
        Click
      </button>
    </div>
  );
};

export default DataFlowEx2;
