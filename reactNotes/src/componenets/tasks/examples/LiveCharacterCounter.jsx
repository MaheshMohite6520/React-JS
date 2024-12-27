import React, { useState } from "react";

const LiveCharacterCounter = () => {
  const [text, setText] = useState("");
  const maxLength = 200;

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  const getCharacterCountColor = () => {
    const percentage = (text.length / maxLength) * 100;
    if (percentage > 90) return "text-red-500";
    if (percentage > 70) return "text-yellow-500";
    return "text-gray-700";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 max-w-md w-full">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Type something..."
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <p className={`mt-4 text-sm font-medium ${getCharacterCountColor()}`}>
          Characters: {text.length}/{maxLength}
        </p>
      </div>
    </div>
  );
};

export default LiveCharacterCounter;
