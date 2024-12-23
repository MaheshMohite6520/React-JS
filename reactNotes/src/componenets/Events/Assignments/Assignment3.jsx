import React from "react";

//! 3. Right-Click Trap
// Create a "Right-Click Me" button.
// On a right-click, display an alert that says:
// "Ha! You thought you could outsmart React?"

const Assignment3 = () => {
  const handleRightClick = (event) => {
    event.preventDefault();
    alert("Ha! You thought you could outsmart React?");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onContextMenu={handleRightClick}
        className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 rounded"
      >
        Right-Click Me
      </button>
    </div>
  );
};

export default Assignment3;
