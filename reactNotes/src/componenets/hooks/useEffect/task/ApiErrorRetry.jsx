import React, { useState, useEffect } from "react";

const ApiErrorRetry = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    let interval;
    if (retry) {
      interval = setInterval(() => {
        console.log("Retrying API call...");
        fetchData();
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [retry]);

  const stopRetry = () => {
    setRetry(false);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h2 className="text-xl font-semibold">API Error Retry</h2>

      {loading && <p>Loading...</p>}

      {error && !loading && (
        <div className="text-red-500">
          <p>Error: {error}</p>
          <p>Retrying...</p>
        </div>
      )}

      {data && !loading && !error && (
        <div className="space-y-4">
          <h3 className="font-medium text-gray-800">
            Data Fetched Successfully:
          </h3>
          <ul className="space-y-2">
            {data.slice(0, 5).map((post) => (
              <li key={post.id} className="p-2 border-b border-gray-300">
                <h4 className="font-semibold">{post.title}</h4>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!data && !loading && (
        <button
          onClick={stopRetry}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Stop Retry
        </button>
      )}

      <p className="text-sm text-gray-500">
        {retry ? "Retrying..." : "Retry stopped"}
      </p>
    </div>
  );
};

export default ApiErrorRetry;
