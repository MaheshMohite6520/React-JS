import React from "react";

const EventTask1 = () => {
  let demo = (e) => {
    e.target.textContent = "Button is disabled";
    e.target.style.backgroundColor = "red";
    e.target.disabled = true;
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button onClick={demo} className="bg-purple-400 rounded-md w-44 h-8">
        Think before you click!
      </button>
    </div>
  );
};

export default EventTask1;
