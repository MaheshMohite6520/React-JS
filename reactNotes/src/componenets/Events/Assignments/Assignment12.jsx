import React, { useState } from "react";

//! 12. Idle User Warning
// If the user is inactive for 5 seconds (onMouseMove + setTimeout), display:
// "Hello? Are you there? React is getting lonely."

const Assignment12 = () => {
  const [message, setMessage] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const resetIdleTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      setMessage("Hello? Are you there? React is getting lonely.");
    }, 5000);

    setTimeoutId(id);
    setMessage("");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100"
      onMouseMove={resetIdleTimer}
    >
      <h1 className="text-lg font-bold text-gray-800">
        {message || "Move your mouse to keep React company!"}
      </h1>
    </div>
  );
};

export default Assignment12;
