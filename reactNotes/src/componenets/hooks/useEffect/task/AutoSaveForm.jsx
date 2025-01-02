import React, { useState, useEffect } from "react";

const AutoSaveForm = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setInputValue(savedData);
    }
  }, []);

  useEffect(() => {
    if (inputValue) {
      localStorage.setItem("formData", inputValue);
    }
  }, [inputValue]);

  const clearForm = () => {
    setInputValue("");
    localStorage.removeItem("formData");
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h2 className="text-xl font-semibold">Auto-Save Form</h2>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="inputField"
            className="block text-sm font-medium text-gray-700"
          >
            Enter some text:
          </label>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type something..."
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={clearForm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Clear Form
          </button>
        </div>
      </form>

      <p className="text-sm text-gray-500">
        The form data is auto-saved in localStorage.
      </p>
    </div>
  );
};

export default AutoSaveForm;
