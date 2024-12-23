import React, { useState, useEffect } from "react";

//! 6. Window Resize Monitor
// Display a live banner that says:
// "Window size: Width X Height".
// Update the banner dynamically using the onResize event.

const Assignment6 = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-lg font-bold text-gray-800">
        Window size: {windowSize.width} x {windowSize.height}
      </h1>
    </div>
  );
};

export default Assignment6;
