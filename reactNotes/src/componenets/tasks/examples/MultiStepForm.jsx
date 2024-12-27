import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded p-8 w-96">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Enter your name</h2>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Step 2: Enter your email
            </h2>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Confirmation</h2>
            <p className="mb-4">
              <strong>Name:</strong> {formData.name || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {formData.email || "N/A"}
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
