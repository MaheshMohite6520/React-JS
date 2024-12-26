import React, { useEffect, useState } from "react";

// If we pass any dependency into dependancy array, useEffect callback function will get called
// Only when ther are some change into the dependancy.
// This use efefcts CBF will get called every time when ever there is change into the dependancy value.

const UseEffectEx3 = () => {
  let [state, setState] = useState(0);
  let [state2, setState2] = useState(0);

  useEffect(() => {
    console.log("Something changed in state component");
  }, [state]);

  useEffect(() => {
    console.log("Something changed in state2 component");
  }, [state2]);
  return (
    <div>
      <h2>
        If we pass any dependency into dependancy array, useEffect callback
        function will get called only when ther are some change into the
        dependancy. <br></br>
        This use efefcts CBF will get called every time when ever there is
        change into the dependancy value
      </h2>

      <h2 className="text-[30px]">{state}</h2>
      <br />
      <br />
      <h2 className="text-[30px]">{state2}</h2>
      <br />
      <br />
      <button
        className="bg-rose-400 px-4 text-white h-10 rounded-lg m-5"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increament
      </button>

      <br />
      <br />
      <button
        className="bg-rose-400 px-4 text-white h-10 rounded-lg m-5"
        onClick={() => {
          setState2(state2 + 1);
        }}
      >
        Increament
      </button>
    </div>
  );
};

export default UseEffectEx3;
