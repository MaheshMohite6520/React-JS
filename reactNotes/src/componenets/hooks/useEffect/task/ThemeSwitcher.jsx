import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`flex items-center justify-center h-screen transition-colors duration-500 ${
        theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <h1 className="text-4xl font-bold mb-4">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
