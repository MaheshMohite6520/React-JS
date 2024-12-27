import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-8">{count}</h1>

      <div className="space-x-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className={`px-6 py-2 bg-red-500 text-white rounded ${
            count === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
          } transition`}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Decrement
        </button>

        <button
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
