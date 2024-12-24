import React from 'react';

const UseGanit = (a, b) => {
  const Add = a + b;
  const sub = a - b;

  return { Add, sub }; // Return the calculated values, not the functions
};

export default UseGanit;
