import React from "react";

const EventIntroEx2 = () => {
  let demo = (e) => {
    console.log(e);
    e.target.textContent = "Button Clicked";
    e.target.style.backgroundColor = "green";
  };

  return (
    <div>
      <button onClick={demo} className="bg-sky-400 rounded-md w-200 h-10">
        Click
      </button>
    </div>
  );
};

export default EventIntroEx2;
