import React, { useState } from "react";

const EventIntroEx3 = () => {
  let [text, setText] = useState("");
  let change = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div>
      <input
        type="text"
        onChange={change}
        className="border-[1px] border-gray-700 rounded-md w-80 h-10"
      />
      <button className="bg-purple-600 px-5 m-5 w-40 h-10">Click</button>
    </div>
  );
};

export default EventIntroEx3;
