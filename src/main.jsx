import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
 import { GlobalContext } from "./Components/Firebasedata/Context";
import './index.css'

// Create the root element

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render the app
root.render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
