import React, { useState } from "react";

//! 2. Hover to Grow
// Create a "Magic Plant" component.
// When a user hovers over the plant image, it grows by increasing its size.
// On hover out, it shrinks back.

const Assignment2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.FmwKwxv4gt1iGusbmWpnewHaFA&pid=Api&P=0&h=180"
        alt="Magic Plant"
        style={{
          width: isHovered ? "200px" : "150px",
          height: isHovered ? "200px" : "150px",
          transition: "all 1s ease",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Assignment2;
