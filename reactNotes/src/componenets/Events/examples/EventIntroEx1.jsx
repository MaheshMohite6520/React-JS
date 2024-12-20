import React from "react";
import EventTask4 from "../task/EventTask4";

// to pass the argument from the function we have to take extra function in the event
// and inside that function we have to call the actual function which expect the argument

const EventIntroEx1 = () => {
  let demo = (name) => {
    console.log(name);
  };

  return (
    <div>
      <button
        onMouseLeave={() => {
          demo("Mahesh");
        }}
        className="bg-slate-200 border-[1px] border-black, rounded-md w-40"
      >
        Click
      </button>
    </div>
  );
};

export default EventIntroEx1;
