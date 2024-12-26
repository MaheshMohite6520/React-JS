import React, { useEffect, useState } from "react";

const UseEffectEx1 = () => {
  let [state, setState] = useState(0);

  useEffect(() => {
    console.log(
      "use effect function called on each component change when without using extra argument"
    );
  });

  return (
    <div>
      <h2>{state}</h2>
      <button
        className="bg-rose-400 px-4 text-white"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increament
      </button>
    </div>
  );
};

export default UseEffectEx1;
