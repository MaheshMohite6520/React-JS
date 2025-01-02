import React, { useState, useEffect } from "react";

const WeatherFetcher = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [fetching, setFetching] = useState(true);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fetching) {
      const id = setInterval(fetchWeather, 10000);
      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [fetching]);

  const toggleFetching = () => {
    setFetching((prevFetching) => !prevFetching);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Weather Data</h1>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {weatherData && (
        <div className="text-center bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">
            Weather in {weatherData.name}
          </h2>
          <p className="text-lg">
            <strong>Temperature:</strong> {weatherData.main.temp}°C
          </p>
          <p className="text-lg">
            <strong>Weather:</strong> {weatherData.weather[0].description}
          </p>
          <p className="text-lg">
            <strong>Humidity:</strong> {weatherData.main.humidity}%
          </p>
          <p className="text-lg">
            <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
          </p>
        </div>
      )}
      <div className="text-center mt-6">
        <button
          onClick={toggleFetching}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          {fetching ? "Stop Fetching" : "Resume Fetching"}
        </button>
      </div>
    </div>
  );
};

export default WeatherFetcher;
