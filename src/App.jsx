import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from  "./Home"

import ToggleLogic from "./Components/DICE/ToggleLogic";
import Menu from "./Components/MenuRest/Menu";
import Task from "./Components/CurdTodo.jsx/Task";
import MyComponent from './Components/Firebasedata/Mycomponents'
import Chatbot from "./Components/bot/Chatbot";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Start" element={<ToggleLogic />} /> 
        <Route path="/Menu" element={<Menu />} /> 
        <Route path="/SingledataCurd" element={<Task />} /> 
    
        <Route  path="/MyComponent"  element={<MyComponent/>}/>
        <Route path="/Chatbot"  element={<Chatbot/>} />
    
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;


