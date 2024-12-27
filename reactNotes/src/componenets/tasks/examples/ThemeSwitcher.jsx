import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-all ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </h1>

      <button
        className={`px-6 py-2 rounded transition ${
          isDarkMode
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
