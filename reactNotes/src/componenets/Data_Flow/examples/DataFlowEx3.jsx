import React from "react";

const DataFlowEx3 = (props) => {
  let { fun, state } = props.props;

  return (
    <div className="border-black border-[1px] m-10">
      <h1>In Child Component: {state}</h1>

      <button
        className="bg-rose-400 border-[1px] w-40 text-white text-[30px] p-2 rounded-lg"
        onClick={() => {
          fun(500);
        }}
      >
        {" "}
        Click
      </button>
    </div>
  );
};

export default DataFlowEx3;
