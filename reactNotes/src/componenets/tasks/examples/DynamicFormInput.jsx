import React, { useState } from "react";

const DynamicFormInput = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <input
        type="text"
        placeholder="Enter your name"
        className="mb-6 px-4 py-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1 className="text-2xl font-semibold text-gray-800">
        Hello, {name ? name : "Stranger"}!
      </h1>
    </div>
  );
};

export default DynamicFormInput;
