import React, { useState } from "react";

//! 13.	Shake It Off
// Display a div box.
// On mouse hover (onMouseEnter), shake the box and display: “Stop tickling me!”

const Assignment13 = () => {
  const [message, setMessage] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
    setMessage("Stop tickling me!");

    setTimeout(() => {
      setIsShaking(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        className={`w-32 h-32 bg-blue-500 rounded shadow-lg ${
          isShaking ? "animate-shake" : ""
        }`}
        onMouseEnter={handleMouseEnter}
      ></div>
      {message && (
        <p className="mt-4 text-lg font-bold text-gray-800">{message}</p>
      )}
    </div>
  );
};

export default Assignment13;
