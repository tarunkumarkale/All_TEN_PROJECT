

import React, { useState } from "react";

function DynamicForm() {
  // Form fields with their initial states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // To store errors dynamically for each field
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the formData dynamically
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field as the user types
    validateField(name, value);
  };

  // Validate individual fields
  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (value.trim() === "") error = "Name is required.";
      else if (value.trim().length < 3) error = "Name must be at least 3 characters.";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
      if (value.trim() === "") error = "Email is required.";
      else if (!emailRegex.test(value.trim())) error = "Invalid email format.";  // jabardasti true krna hai 
    } else if (name === "password") {
      if (value.trim() === "") error = "Password is required.";
      else if (value.trim().length < 6) error = "Password must be at least 6 characters.";
    }

    // Set the error for the field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Re-validate all fields on submit
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors) {
      console.log("Form Submitted Successfully!", formData);
      alert("Form Submitted Successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-96" onSubmit={handleSubmit}>
        <h1 className="text-lg font-bold mb-4">Dynamic Form</h1>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;




Full Flow Example:
Input Object:

javascript
Copy code
const formData = {
  name: "Tarun",
  email: "tarun@gmail.com",
  password: "123456",
};
Keys Extraction:

javascript
Copy code
Object.keys(formData); // ["name", "email", "password"]
Loop with forEach:

javascript
Copy code
["name", "email", "password"].forEach((field) => {
  validateField(field, formData[field]);
});
Validation Calls:

validateField("name", "Tarun");
validateField("email", "tarun@gmail.com");
validateField("password", "123456");
Summary:
Object.keys(formData):

Form ke sare fields ka naam nikalta hai.
.forEach():

Har field ke liye ek-ek function ko call karta hai.
validateField(field, formData[field]):

Field ka naam aur uska value ko check karne ke liye validateField function ko call karta hai.
Agar iske practical example chahiye, mai ek live example code likh kar de sakta hoon! 😊