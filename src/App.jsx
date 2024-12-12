import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Start from  './Components/DICE/Start'
import ToggleLogic from "./Components/DICE/ToggleLogic";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component */}
        <Route path="/Start" element={<ToggleLogic />} /> {/* Dice component */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
