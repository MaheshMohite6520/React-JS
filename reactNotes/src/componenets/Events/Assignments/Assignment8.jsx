import React, { useState } from "react";

const Assignment8 = () => {
  const [shakeIndex, setShakeIndex] = useState(null); // Track which button to shake

  const buttons = ["Button 1", "Button 2", "Button 3", "Correct Button"]; // Buttons array

  const handleButtonClick = (index) => {
    if (index === buttons.length - 1) {
      alert("You got it!");
    } else {
      setShakeIndex(index);
      setTimeout(() => setShakeIndex(null), 500); // Remove shake after 500ms
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <h1 className="text-xl font-bold text-gray-800 mb-6">
        Click the correct button!
      </h1>
      <div className="space-y-3">
        {buttons.map((label, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${
              shakeIndex === index ? "animate-shake" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {shakeIndex !== null && (
        <div className="mt-4 text-red-500 font-semibold">Nope! Try harder!</div>
      )}
    </div>
  );
};

export default Assignment8;
