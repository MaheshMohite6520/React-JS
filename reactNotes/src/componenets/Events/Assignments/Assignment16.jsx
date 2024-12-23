import React, { useState } from "react";

//! 16.Peek-a-Boo Popup
// Create a popup box that appears when a user right-clicks (onContextMenu).
// Display: “Didn’t expect me, huh?”

const Assignment16 = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setPopupPosition({ x: event.pageX, y: event.pageY });
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className="w-full h-screen bg-gray-100"
      onContextMenu={handleContextMenu}
      onClick={handleClosePopup}
    >
      <h1 className="text-center text-lg font-bold text-gray-800 mt-8">
        Right-click anywhere to see the popup!
      </h1>

      {popupVisible && (
        <div
          className="absolute bg-white border border-gray-300 rounded shadow-lg p-4"
          style={{
            top: `${popupPosition.y}px`,
            left: `${popupPosition.x}px`,
          }}
        >
          <p className="text-gray-800 font-semibold">Didn’t expect me, huh?</p>
        </div>
      )}
    </div>
  );
};

export default Assignment16;
