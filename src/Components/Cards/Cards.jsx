
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, btn, image }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(btn);
  };

  return (
    <div// AOS animation for scrolling
      className="rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">Explore my project: {name}.</p>
        <button
          onClick={handleNavigate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default Card;
