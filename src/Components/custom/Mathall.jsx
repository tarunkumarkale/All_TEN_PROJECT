import React, { useState } from 'react';
import UseGanit from './UseGanit';

const Mathall = () => {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [resultA, setResultA] = useState(null);
  const [resultB, setResultB] = useState(null);

  const handleNumberChangeA = (e) => {
    setA(e.target.value); // Store as string from input
  };

  const handleNumberChangeB = (e) => {
    setB(e.target.value); // Store as string from input
  };

  const handleCalculate = () => {
    const numA = parseFloat(A); // Convert to number
    const numB = parseFloat(B); // Convert to number

    // Check if both inputs are valid numbers
    if (!isNaN(numA) && !isNaN(numB)) {
      const { Add, sub } = UseGanit(numA, numB); // Perform calculation if valid numbers
      setResultA(Add);
      setResultB(sub);
    } else {
      setResultA('Invalid input');
      setResultB('Invalid input');
    }
  };

  return (
    <div>
      <input
        type="number"
        onChange={handleNumberChangeA}
        value={A}
        placeholder="Enter A"
      />
      <input
        type="number"
        onChange={handleNumberChangeB}
        value={B}
        placeholder="Enter B"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        {resultA !== null && resultB !== null && (
          <>
            <p>Addition: {resultA}</p>
            <p>Subtraction: {resultB}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Mathall;
