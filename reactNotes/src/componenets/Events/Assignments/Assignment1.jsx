import React, { useState } from "react";

//! 1. Double Click to Reveal Secret
// Create a component that hides a secret message.
// On a double-click event (onDoubleClick), reveal the message: “Shh! I’m a React developer undercover!”

const Assignment1 = () => {
  const [revealed, setRevealed] = useState(false);

  const handleDoubleClick = () => {
    setRevealed(true);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray-700">
      <div
        onDoubleClick={handleDoubleClick}
        style={{
          width: "300px",
          height: "100px",
          border: "2px solid black",
          borderRadius: "10px",
          textAlign: "center",
          lineHeight: "100px",
          cursor: "pointer",
          backgroundColor: revealed ? "#f0f8ff" : "#e0e0e0",
          userSelect: "none",
        }}
      >
        {revealed
          ? "Shh! I’m a React developer undercover!"
          : "Double-click to reveal the secret"}
      </div>
    </div>
  );
};

export default Assignment1;
