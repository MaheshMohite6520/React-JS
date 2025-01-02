import React from "react";
import HocEx2Child from "./HocEx2Child";
import Loader from "./Loader";

let ChildWithLoader = Loader(HocEx2Child);

const HocEx2 = () => {
  let a = 10;
  let b = 20;
  let c = 30;
  let d = 40;

  return (
    <div>
      <p>Parent</p>
      <br /> <br /> <hr /> <br />
      <ChildWithLoader props={{ a, b, c, d }} />
    </div>
  );
};

export default HocEx2;
