import React, { useRef, useState } from "react";

const UseRefEx2 = () => {
  let [state, setState] = useState("");
  let ipRef = useRef();
  let click = (e) => {
    e.preventDefault();
    setState(ipRef.current.value);
  };

  return (
    <div>
      <input
        className="border-[2px] rounded-lg m-5 p-1"
        ref={ipRef}
        type="text"
      />

      <button
        className="bg-rose-400 rounded-s-md p-3 m-5 text-2xl"
        onClick={click}
      >
        Click
      </button>

      <p>{state}</p>
    </div>
  );
};

export default UseRefEx2;
