import React from "react";
import PROJECTS from "../../Constant";
import { GrActions } from "react-icons/gr";
import { FaRegMoon } from "react-icons/fa6";

const Start = ({ checkpage, toggleBg, color }) => {
  return (
    <>
      <div
        className="flex justify-end p-4 cursor-pointer"
        onClick={toggleBg} // Toggle background color
      >
        {color === "white" ? <GrActions className="text-black" /> : <FaRegMoon  className="text-white"/>}
      </div>
      <div className="flex justify-center items-center mt-7 flex-col">
        <img src={PROJECTS[0].image} alt="Dice" className="w-[30%]" />
        <button
          onClick={checkpage} // Change page
          className="bg-green-500 active:bg-red-500 w-auto h-auto p-4 rounded-md font-bold text-white text-lg"
        >
          Start Game
        </button>
      </div>
    </>
  );
};

export default Start;
