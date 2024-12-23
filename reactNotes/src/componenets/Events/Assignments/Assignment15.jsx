import React, { useState } from "react";

//! 15.Hover to Reveal Treasure Map
// Create a div with a blurred image of a treasure map.
// On hover (onMouseEnter), gradually unblur the map.
// Add a label: “X marks the React component.”

const Assignment15 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        className={`w-80 h-80 bg-center bg-cover transition-filter duration-500 ${
          isHovered ? "filter-none" : "filter blur-lg"
        }`}
        style={{
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/4/49/Old_treasure_map.jpg")`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <p className="mt-4 text-lg font-bold text-gray-800">
        X marks the React component.
      </p>
    </div>
  );
};

export default Assignment15;
