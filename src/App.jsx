import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/profile/1">Profile 1</Link>
          </li>
          <li>
            <Link to="/profile/2">Profile 2</Link>
          </li>
          <li>
            <Link to="/profile/3">Profile 3</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
