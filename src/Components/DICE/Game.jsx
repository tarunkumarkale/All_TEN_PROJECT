import React, { useState } from 'react';

const Game = () => {
  const diceValues = [1, 2, 3, 4, 5, 6];

  const [random, setRandom] = useState(0); // Holds the current dice value
  const [result, setResult] = useState(0); // Keeps track of the score

  const rollDice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    setRandom(diceRoll);
  };

  const resetGame = () => {
    setRandom(0);
    setResult(0);
  };

  const handleDiceClick = (value) => {
    console.log(`Clicked value: ${value}`);
    if (random) {
      setResult((prev) => (value === random ? prev + 1 : prev - 1));
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Score and dice options */}
      <div className="flex flex-row justify-around mx-11">
        {/* Score display */}
        <div className="text-left font-semibold text-2xl w-[30%]">
          <h1 className="text-left font-extrabold text-9xl">{result}</h1>
          <h1 className="text-green-400 mx-1">Result</h1>
        </div>

        {/* Dice options */}
        <div className="flex flex-row justify-end w-[70%] mx-5 mt-3">
          {diceValues.map((value, index) => (
            <div
              key={index}
              className="border border-black p-5 bg-slate-200 hover:bg-slate-300 active:bg-red-400 mx-2"
              onClick={() => handleDiceClick(value)}
            >
              <h1 className="p-7 text-2xl cursor-pointer">{value}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Random dice result and controls */}
      <div className="flex justify-center items-center flex-col mt-[10%]">
        <h1 className="text-9xl font-semibold text-red-600">{random || '-'}</h1>
        <button
          className="text-black font-semibold bg-red-300 active:bg-red-600 p-3 mt-4"
          onClick={rollDice}
        >
          Roll Dice
        </button>
        <button
          className="text-black font-semibold bg-red-300 active:bg-red-600 p-3 mt-2"
          onClick={resetGame}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Game;
