import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState(""); // For storing the name
  const [error, setError] = useState(""); // For showing validation errors

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (name.trim() === "") {
      setError("Name is required!"); // Show error if empty
    } else if (name.trim().length < 3) {
      setError("Name must be at least 3 characters!"); // Show error for short names
    } else {
      setError(""); // Clear the error
      console.log("Form Submitted:", name);
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-4 shadow rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-lg font-bold mb-4">Simple Form</h1>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update the name state
            className={`mt-1 p-2 w-full border rounded ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {/* Error Message */}
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
