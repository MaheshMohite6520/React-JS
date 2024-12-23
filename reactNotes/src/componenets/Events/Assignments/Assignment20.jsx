import React, { useState } from "react";

//! 20.Weather-Reacting Box
// Create a box that changes text based on mouse hover, right-click, and double-click:
// Hover: “Cloudy vibes today.”
// Right-click: “Storm incoming!”
// Double-click: “Sunny and happy!”

const Assignment20 = () => {
  const [message, setMessage] = useState("");

  const handleMouseEnter = () => {
    setMessage("Cloudy vibes today.");
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMessage("Storm incoming!");
  };

  const handleDoubleClick = () => {
    setMessage("Sunny and happy!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        className="w-80 h-80 bg-gray-300 border-4 border-gray-500 flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onContextMenu={handleContextMenu}
        onDoubleClick={handleDoubleClick}
      >
        <p className="text-lg font-bold text-gray-800">{message}</p>
      </div>
      <p className="mt-4 text-lg font-bold text-gray-600">
        Hover, right-click, or double-click the box!
      </p>
    </div>
  );
};

export default Assignment20;
