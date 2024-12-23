import React, { useState } from "react";

//! 5. Button That Runs Away
// Create a button that moves to a random position when hovered over (onMouseEnter).
// Bonus: Add a label: "Catch me if you can!"

const Assignment5 = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const handleMouseEnter = () => {
    const randomTop = Math.random() * (window.innerHeight - 50);
    const randomLeft = Math.random() * (window.innerWidth - 100);

    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="relative h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="absolute top-4 text-xl font-bold text-blue-600">
        Catch me if you can!
      </h1>
      <button
        onMouseEnter={handleMouseEnter}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
        className="absolute px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 focus:outline-none"
      >
        Hover Me!
      </button>
    </div>
  );
};

export default Assignment5;
