import React, { useEffect, useState } from "react";

// We can pass multiple dependancies if there is any change in any of the dependancy value the cbf will get called.
// The sequence of then multiple dependancies does not mattter.

const UseEffectEx4 = () => {
  let [state, setState] = useState(0);
  let [state2, setState2] = useState(0);

  useEffect(() => {
    console.log("Something changed in component");
  }, [state, state2]);
  return (
    <div>
      <h1>
        {" "}
        We can pass multiple dependancies if there is any change in any of the
        dependancy value the cbf will get called
        <br></br>The sequence of then multiple dependancies does not mattter
      </h1>

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

export default UseEffectEx4;
