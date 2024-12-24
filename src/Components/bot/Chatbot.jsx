import React from 'react';
import { NavLink } from 'react-router-dom';

const Chatbot = () => {
  return (
    <div>
      <h1>Chatbot</h1>
      <NavLink to="/Chatbot/1" className="bg-red-500">Link 1</NavLink>
      <NavLink to="/Chatbot/2" className="bg-green-400">Link 2</NavLink>
      <NavLink to="/Chatbot/3" className="bg-slate-500">Link 3</NavLink>
    </div>
  );
};

export default Chatbot;
