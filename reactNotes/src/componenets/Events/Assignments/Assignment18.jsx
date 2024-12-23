import React, { useState } from "react";

//! 18.Hover Maze
// Create a small maze.
// Users must hover (onMouseMove) through it without touching the walls.
// If they fail, display a message: “Oops! Walls hurt, don’t they?”

const Assignment18 = () => {
  const [message, setMessage] = useState("");

  const handleMouseMove = (event) => {
    const maze = event.currentTarget;
    const mazeRect = maze.getBoundingClientRect();
    const mouseX = event.clientX - mazeRect.left;
    const mouseY = event.clientY - mazeRect.top;

    if (
      mouseX <= 5 ||
      mouseX >= mazeRect.width - 5 ||
      mouseY <= 5 ||
      mouseY >= mazeRect.height - 5
    ) {
      setMessage("Oops! Walls hurt, don’t they?");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        className="w-80 h-80 border-4 border-black relative"
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute top-0 left-0 w-full h-full border-4 border-gray-300"
          style={{
            pointerEvents: "none",
          }}
        />
        <div
          className="absolute top-0 left-0 w-20 h-20 bg-blue-500 rounded"
          style={{ pointerEvents: "none" }}
        />
      </div>
      {message && (
        <p className="mt-4 text-lg font-bold text-red-600">{message}</p>
      )}
    </div>
  );
};

export default Assignment18;
