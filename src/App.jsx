import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from  "./Home"

import ToggleLogic from "./Components/DICE/ToggleLogic";
import Menu from "./Components/MenuRest/Menu";
import Task from "./Components/CurdTodo.jsx/Task";
import MyComponent from './Components/Firebasedata/Mycomponents'
// import Chatbot from "./Components/bot/Chatbot";
import Passwordtogg from "./Components/passwordtoggle/Passwordtogg";
import Chatbot from "./Components/bot/Chatbot";
import Direct from "./Components/bot/Direct";
import Mathall from "./Components/custom/Mathall";
import Firstpra from "./Components/Practices/Firstpra";
import Ganesh from "./Ganesh";
import Realtimedatabase from "./Components/Firebasedata/Realtimedatabase";
import FullFirebse from "./Components/Firebasedata/FullFirebse";


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
        <Route path="/Passwordtogg"  element={<Passwordtogg/>} />
        <Route path="/Chatbot"  element={<Chatbot/>} />
        <Route path='/Chatbot/:userid' element={<Direct />} />
        <Route path='/custom' element={<Mathall/>} />
        {/* this is for practice */}
        <Route path='/digitaltime' element={<Firstpra/>}/>
        <Route path='/FullFirebse' element={<FullFirebse/>}/>
        <Route path='/Realtimedatabase' element={<Realtimedatabase/>}/>
    
  
{/* 👿 praactice  */}
<Route  path="/allreactpractice" element={<Ganesh/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
