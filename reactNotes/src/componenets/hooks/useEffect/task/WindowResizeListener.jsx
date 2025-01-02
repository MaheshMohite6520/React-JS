import React, { useState, useEffect } from "react";

const WindowResizeListener = () => {
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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-5 right-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
        <p className="text-lg font-semibold">Window Size</p>
        <p>
          <strong>Width:</strong> {windowSize.width}px
        </p>
        <p>
          <strong>Height:</strong> {windowSize.height}px
        </p>
      </div>
    </div>
  );
};

export default WindowResizeListener;
