import React, { useState } from "react";

//! 17.Chameleon Div
// Create a div that changes its background color every time the user clicks it (onClick).
// Display: “I’m a chameleon, can’t catch me!”

const Assignment17 = () => {
  const [backgroundColor, setBackgroundColor] = useState("lightgray");

  const handleDivClick = () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      onClick={handleDivClick}
      style={{ backgroundColor, transition: "background-color 0.5s ease" }}
    >
      <h1 className="text-center text-lg font-bold text-gray-800">
        I’m a chameleon, can’t catch me!
      </h1>
    </div>
  );
};

export default Assignment17;
