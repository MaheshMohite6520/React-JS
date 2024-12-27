import React, { useState } from "react";

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        className="mb-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p className="text-lg text-gray-700">I LOVE INDIA</p>}
    </div>
  );
};

export default ToggleVisibility;
