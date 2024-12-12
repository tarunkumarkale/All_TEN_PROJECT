import React from 'react';
import PROJECTS from '../../Constant';

const Start = ({ checkpage }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-7 flex-col  ">
        <img src={PROJECTS[0].image} alt="Dice"  className='w-[30%]'/>
        <button onClick={checkpage} className='bg-green-500 active:bg-red-500  w-auto h-auto p-4 rounded-md font-bold text-white text-lg'>Start Game</button> {/* Click to toggle */}
      </div>
    </>
  );
};

export default Start;
