import React, { useState, useEffect } from "react";

const NotificationPopup = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const dismissNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="relative">
      {showNotification && (
        <div
          className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out opacity-100 translate-y-0"
          style={{
            animation: "fadeIn 0.5s ease-out, slideIn 0.5s ease-out",
          }}
        >
          <p className="text-lg font-semibold">This is a notification!</p>
          <button
            onClick={dismissNotification}
            className="mt-2 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationPopup;
