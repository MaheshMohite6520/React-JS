import React, { useState, useEffect } from "react";

const Assignment9 = () => {
  const [message, setMessage] = useState("Welcome! 😊");

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setMessage("Don’t leave me! 😢");
      } else {
        setMessage("Oh, you’re back! 😍");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold text-gray-800">{message}</h1>
    </div>
  );
};

export default Assignment9;
