import React, { useState, useEffect } from "react";

const DynamicBackgroundColor = () => {
  const [color, setColor] = useState(getRandomColor());
  const [isPaused, setIsPaused] = useState(false);

  function getRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setColor(getRandomColor());
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused((prevState) => !prevState);
  };

  return (
    <div
      className="flex items-center justify-center h-screen transition-colors duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Dynamic Background Color</h1>
        <p className="text-lg mb-4">Current Color: {color}</p>
        <button
          onClick={togglePause}
          className={`px-4 py-2 rounded font-semibold ${
            isPaused ? "bg-red-500" : "bg-blue-500"
          } text-white hover:bg-opacity-80`}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  );
};

export default DynamicBackgroundColor;
