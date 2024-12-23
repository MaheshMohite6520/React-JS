import React, { useState } from "react";

//! 4. Mouse Move Tracker
// Build a "Spy Glass" component.
// Track the mouse's position (onMouseMove) and display its X, Y coordinates live.
// Bonus: Add a "You’re being watched" banner for fun.

const Assignment4 = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="h-screen bg-gray-100 flex flex-col items-center justify-center"
    >
      <h1 className="text-xl font-bold text-red-600 mb-4">
        You’re being watched
      </h1>
      <div className="text-lg text-gray-700">
        Mouse Position:{" "}
        <span className="font-semibold">X: {coordinates.x}</span>,{" "}
        <span className="font-semibold">Y: {coordinates.y}</span>
      </div>
    </div>
  );
};

export default Assignment4;
