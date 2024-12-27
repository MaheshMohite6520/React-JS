import React, { useState } from "react";

const CounterWithStepSize = () => {
  const [count, setCount] = useState(0);
  const [stepSize, setStepSize] = useState(1);

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStepSize(value > 0 ? value : 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8">{count}</h1>

      <div className="mb-6">
        <label htmlFor="stepSize" className="text-lg font-medium mr-4">
          Step Size:
        </label>
        <input
          type="number"
          id="stepSize"
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={stepSize}
          onChange={handleStepChange}
          min="1"
        />
      </div>

      <div className="space-x-4">
        <button
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          onClick={() => setCount(count + stepSize)}
        >
          Increment
        </button>

        <button
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => setCount(count - stepSize)}
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

export default CounterWithStepSize;
