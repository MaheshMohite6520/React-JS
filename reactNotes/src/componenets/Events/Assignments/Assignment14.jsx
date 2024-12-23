import React, { useState } from "react";

//! 14.Color Picker Wheel
// Create a box with text: “Scroll to change my vibe!”
// On mouse scroll (onWheel), change the background color randomly.

const Assignment14 = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleScroll = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div
      className="flex items-center justify-center h-screen text-center"
      style={{ backgroundColor }}
      onWheel={handleScroll}
    >
      <h1 className="text-lg font-bold text-gray-800">
        Scroll to change my vibe!
      </h1>
    </div>
  );
};

export default Assignment14;
