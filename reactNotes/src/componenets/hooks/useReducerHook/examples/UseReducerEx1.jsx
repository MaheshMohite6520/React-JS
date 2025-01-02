import React, { useReducer } from "react";

const UseReducerEx1 = () => {
  let initialValue = 0;
  let reducer = (state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return { state } <= 0 ? state : state - 1;
      default:
        return (state = 0);
    }
  };

  let [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="flex justify-center flex-col items-center h-[100vh]">
      <h1 className="text-2xl mt-96">State: {state}</h1>
      <div className="flex justify-center h-[100vh]">
        <button
          onClick={() => {
            dispatch("add");
          }}
          className="bg-orange-400 rounded-md border-[2px] border-black px-5 m-5 h-10 w-32 text-2xl"
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch("sub");
          }}
          className="bg-orange-400 rounded-md border-[2px] border-black px-5 m-5 h-10 w-32 text-2xl"
        >
          Sub
        </button>
        <button
          onClick={() => {
            dispatch("mul");
          }}
          className="bg-orange-400 rounded-md border-[2px] border-black px-5 m-5 h-10 w-32 text-2xl"
        >
          Default
        </button>
      </div>
    </div>
  );
};

export default UseReducerEx1;
