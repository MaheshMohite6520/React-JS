import React, { useState, useEffect } from "react";

const ScrollPositionTracker = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScrollPercentage = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", calculateScrollPercentage);
    };
  }, []);

  const getProgressBarColor = () => {
    if (scrollPercentage < 50) return "bg-green-500";
    if (scrollPercentage < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 w-full h-2 ${getProgressBarColor()}`}
        style={{ width: `${scrollPercentage}%` }}
      ></div>

      <div className="h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Scroll Position Tracker
        </h1>
        <p className="text-lg">
          Scroll down the page to see the progress bar change based on your
          scroll position.
        </p>
        <div className="h-[2000px]"></div>
      </div>
    </div>
  );
};

export default ScrollPositionTracker;
