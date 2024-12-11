// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Components/DICE/Start"; // Import Start component

// Importing Card component
// Corrected to match the file structure
import PROJECTS from "./Constant"; // Assuming PROJECTS is an array of objects
import Card from "./Components/Cards/Cards";

const App = () => {
  return (
    // Ensure BrowserRouter wraps the entire component tree
    <BrowserRouter>
      <Routes>
        <Route path="/Dice" element={<Start />} />{" "}
        {/* Path for Start component */}
      </Routes>

      <div className="bg-green-300 w-full min-h-screen">
        <h1 className="uppercase text-white text-center">
          Welcome to my personal project gallery
        </h1>
        <h4 className="text-center">
          Here you can access all my personal projects and play with them
        </h4>
      </div>

      <div className="flex sm:flex-row flex-col">
        {PROJECTS.map((element, index) => (
          <Card key={index} {...element} />
        ))}
      </div>
    </BrowserRouter>
  );
};

export default App;
