import React, { useState } from "react";

const Assignment10 = () => {
  const [isRainbow, setIsRainbow] = useState(false);
  const [background, setBackground] = useState("white");
  const [intervalId, setIntervalId] = useState(null);

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  let colorIndex = 0;

  const toggleRainbow = () => {
    if (isRainbow) {
      clearInterval(intervalId);
      setBackground("white");
      setIsRainbow(false);
    } else {
      const id = setInterval(() => {
        setBackground((prev) => {
          const nextColor = colors[colorIndex];
          colorIndex = (colorIndex + 1) % colors.length;
          return nextColor;
        });
      }, 500);
      setIntervalId(id);
      setIsRainbow(true);
    }
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: background }}
    >
      <h1 className="text-lg font-bold text-gray-800 mb-4">
        The rainbow respects your vibe.
      </h1>
      <button
        onClick={toggleRainbow}
        className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
      >
        {isRainbow ? "Stop Rainbow" : "Start Rainbow"}
      </button>
    </div>
  );
};

export default Assignment10;
