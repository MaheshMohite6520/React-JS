import React, { useReducer } from "react";

const UseReducerEx3 = () => {
  let initialState = {
    count: 0,
  };
  let reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { count: state.count + action.value };
      case "sub":
        return { count: state.count - action.value };
      default:
        return { count: 0 };
    }
  };
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex justify-center flex-col items-center h-[100vh]">
      <h1 className="text-2xl mt-96">State: {state.count}</h1>
      <div className="flex justify-center h-[100vh]">
        <button
          onClick={() => {
            dispatch({ type: "add", value: 10 });
          }}
          className="bg-orange-400 rounded-md border-[2px] border-black px-5 m-5 h-10 w-32 text-2xl"
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch({ type: "sub", value: 5 });
          }}
          className="bg-orange-400 rounded-md border-[2px] border-black px-5 m-5 h-10 w-32 text-2xl"
        >
          Sub
        </button>
        <button
          onClick={() => {
            dispatch({ type: "mul", value: 0 });
          }}
          className="bg-orange-400 rounded-md border-[2px] border-black px-5 m-5 h-10 w-32 text-2xl"
        >
          Default
        </button>
      </div>
    </div>
  );
};

export default UseReducerEx3;
