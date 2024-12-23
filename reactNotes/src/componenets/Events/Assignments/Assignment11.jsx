import React, { useState } from "react";

//! 11. Timer Bomb
// Display a "Defuse the Bomb" button.
// Start a countdown timer when the user clicks it (onClick).
// Defuse the bomb by double-clicking the button (onDoubleClick).
// Show a funny “BOOM!” message if the user fails.

const Assignment11 = () => {
  const [countdown, setCountdown] = useState(null); // Countdown timer
  const [message, setMessage] = useState(""); // Current message
  const [timerId, setTimerId] = useState(null); // Timer ID for clearing interval

  const startCountdown = () => {
    if (timerId) return; // Prevent multiple timers

    setMessage(""); // Clear any previous message
    let timeLeft = 10; // 10 seconds countdown
    setCountdown(timeLeft);

    const id = setInterval(() => {
      timeLeft -= 1;
      setCountdown(timeLeft);

      if (timeLeft === 0) {
        clearInterval(id);
        setTimerId(null);
        setMessage("💥 BOOM! You failed to defuse the bomb.");
        setCountdown(null);
      }
    }, 1000);

    setTimerId(id);
  };

  const defuseBomb = () => {
    if (timerId) {
      clearInterval(timerId); // Stop the timer
      setTimerId(null);
      setCountdown(null);
      setMessage("🎉 Phew! You defused the bomb.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        {message || "Defuse the bomb before time runs out!"}
      </h1>
      {countdown !== null && (
        <div className="text-2xl font-bold text-red-500 mb-4">
          Time left: {countdown}s
        </div>
      )}
      <button
        onClick={startCountdown}
        onDoubleClick={defuseBomb}
        className="px-6 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 focus:outline-none"
      >
        {countdown !== null ? "Defuse the Bomb!" : "Start Countdown"}
      </button>
    </div>
  );
};

export default Assignment11;
