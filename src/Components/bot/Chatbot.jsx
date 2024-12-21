import React, { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="bg-slate-400 flex flex-row justify-between p-4 items-center">
      <input
        type={isVisible ? "text" : "password"}
        placeholder="Enter your password"
        className="p-2 rounded border"
      />
      <button
        onClick={toggleVisibility}
        className="ml-4 text-xl flex items-center"
      >
        {isVisible ? <FaEyeSlash /> : <FaRegEye />}
      </button>
    </div>
  );
};

export default Chatbot;

