import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        {timeLeft > 0 ? (
          <>
            <h1 className="text-4xl font-bold text-blue-500 mb-4">
              Countdown Timer
            </h1>
            <p className="text-2xl text-gray-700">
              {timeLeft} seconds remaining
            </p>
          </>
        ) : (
          <h1 className="text-4xl font-bold text-red-500">Time's up!</h1>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
