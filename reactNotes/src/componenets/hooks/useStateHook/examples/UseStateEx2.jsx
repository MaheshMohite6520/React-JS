import React, { useState } from "react";

const UseStateEx2 = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <div>Ex 2:</div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 10);
          setCount((pre) => pre + 20);
          setCount((pre) => pre + 30);
        }}
      >
        Increment
      </button>
      <br />
      <br />
    </div>
  );
};

export default UseStateEx2;