import React, { useState } from 'react';
import Start from './Start';  // Import Start component
import Game from './Game';    // Import Game component

const ToggleLogic = () => {
  const [changePage, setChangePage] = useState(true); // true to show Start initially

  // This function will toggle the page state (Start <-> Game)
  const handlePageChange = () => setChangePage(prev => !prev);

  return (
    <div>
      {changePage ? (
        <Start checkpage={handlePageChange} />  // Pass handlePageChange to Start
      ) : (
        <Game checkpage={handlePageChange} />  // Pass handlePageChange to Game
      )}
    </div>
  );
};

export default ToggleLogic;
