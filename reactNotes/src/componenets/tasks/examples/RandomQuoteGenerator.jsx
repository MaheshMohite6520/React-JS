import React, { useState } from "react";

const RandomQuoteGenerator = () => {
  const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
    {
      text: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll",
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 max-w-md text-center">
        <p className="text-lg italic font-semibold mb-4">"{quote.text}"</p>

        <p className="text-sm text-gray-500 mb-6">- {quote.author}</p>

        <button
          onClick={getRandomQuote}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
