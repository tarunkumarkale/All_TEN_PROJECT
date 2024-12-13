import React, { useState } from "react";
import Start from "./Start"; // Import Start component
import Game from "./Game";   // Import Game component

const ToggleLogic = () => {
  const [changePage, setChangePage] = useState(true); // true to show Start initially
  const [changebgcolor, setChangeBgColor] = useState("white"); // Background color state

  // Toggle the page state (Start <-> Game)
  const handlePageChange = () => setChangePage((prev) => !prev);

  // Toggle background color
  const toggleBgColor = () =>
    setChangeBgColor((prev) => (prev === "white" ? "black" : "white"));

  return (
    <div style={{ backgroundColor: changebgcolor, minHeight: "100vh" }}>
      {changePage ? (
        <Start
          checkpage={handlePageChange}
          toggleBg={toggleBgColor}
          color={changebgcolor}
        />
      ) : (
        <Game checkpage={handlePageChange} toggleBg={toggleBgColor} />
      )}
    </div>
  );
};

export default ToggleLogic;
