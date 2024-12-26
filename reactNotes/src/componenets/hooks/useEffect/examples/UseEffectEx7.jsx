import React, { useState } from "react";
import UseEffectEx8ForEx7 from "./UseEffectEx8ForEx7";

const UseEffectEx7 = () => {
  let [state, setState] = useState(false);

  let handleClick = () => {
    setState(!state);
  };

  return (
    <div>
      <div>UseEffectEx7</div>

      <button
        onClick={handleClick}
        className="px-3 bg-orange-500 text-white rounded-md"
      >
        {state ? "Remove child component" : "Call Child Component"}
      </button>

      <div>
        {state ? <UseEffectEx8ForEx7 /> : "Click button to add child component"}
      </div>
    </div>
  );
};

export default UseEffectEx7;
