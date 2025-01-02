import React, { useRef } from "react";

const UseRefEx1 = () => {
  let heading = useRef();

  let click = () => {
    heading.current.style.backgroundColor = "red";
    heading.current.textContent = "Some text";
    heading.current.style.alignContent = "center";
    console.log(heading.current.style);
  };

  return (
    <div>
      <h1 ref={heading}>Heading</h1>
      <button
        onClick={click}
        className="bg-rose-400 rounded-s-md p-3 m-5 text-2xl"
      >
        Click
      </button>
    </div>
  );
};
export default UseRefEx1;
