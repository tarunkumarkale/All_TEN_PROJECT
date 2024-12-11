// src/Components/Card.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ projectname, linkofproject }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigate = () => {
    navigate(linkofproject); // Navigate to the dynamic link provided
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {projectname}
          </h2>
          <p className="text-gray-600 mb-6">
            Explore the exciting projects and creative work done by John Doe.
            Click the button below to learn more.
          </p>
          <button
            onClick={handleNavigate} // Trigger navigation on click
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
