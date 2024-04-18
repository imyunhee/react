import React from "react";
import ReactDOM from "react-dom/client";
// import quickstart from "./quickstart.js";
// import "./quickstart.css";
import "./tutorial_TicTacToe.css";

import TicTacToe from "./tutorial_TicTacToe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
);
