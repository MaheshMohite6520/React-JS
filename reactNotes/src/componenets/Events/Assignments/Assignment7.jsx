import React, { useState } from "react";

const Assignment7 = () => {
  const [dotPosition, setDotPosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = (event) => {
    setDotPosition({
      top: event.clientY,
      left: event.clientX,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-screen bg-gray-100 flex items-center justify-center"
    >
      <h1 className="absolute top-4 text-xl font-bold text-blue-600">
        Wow, such skills! The dot is impressed.
      </h1>
      <div
        style={{
          top: `${dotPosition.top}px`,
          left: `${dotPosition.left}px`,
        }}
        className="absolute w-4 h-4 bg-red-500 rounded-full pointer-events-none"
      ></div>
    </div>
  );
};

export default Assignment7;
