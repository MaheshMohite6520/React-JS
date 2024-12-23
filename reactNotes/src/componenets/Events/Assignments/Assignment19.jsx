import React, { useState } from "react";

//! 19.Lazy Button
// Create a button labeled “Click Me.”
// On onClick, randomly delay the button’s reaction with a sarcastic message like:
// “Huh? Oh, sorry, I was on a break.”

const Assignment19 = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const randomDelay = Math.floor(Math.random() * 3000) + 1000;

    setMessage("...");

    setTimeout(() => {
      setMessage("Huh? Oh, sorry, I was on a break.");
    }, randomDelay);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        onClick={handleClick}
      >
        Click Me
      </button>
      {message && (
        <p className="mt-4 text-lg font-bold text-red-600">{message}</p>
      )}
    </div>
  );
};

export default Assignment19;
