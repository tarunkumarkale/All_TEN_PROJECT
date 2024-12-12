
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, btn,image }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigate = () => {
    navigate(btn); // Navigate to the dynamic link provided
  };
console.log(name)
  return (
    <div className="flex items-center justify-start mx-2 min-h-screen  bg-gray-100">
      <div className="w-[20%] rounded overflow-hidden shadow-lg bg-white">
      <img src={image} alt="image" className="w-[100%] h-auto " />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {name}
          </h2>
          <p className="text-gray-600 mb-6">
        welcome to my project {name}.
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
