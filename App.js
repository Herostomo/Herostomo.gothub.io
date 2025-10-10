// src/App.js
import React, { useState } from "react";
import Terminal from "./components/Terminal";
import "./App.css";

function App() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <div className="App">
      {!showTerminal ? (
        <div className="landing">
          <h1>Kshitij Hedau Portfolio Website</h1>
          <button
            className="terminal-btn"
            onClick={() => setShowTerminal(true)}
          >
            🚀 Get Started with Terminal
          </button>
        </div>
      ) : (
        <Terminal />
      )}
    </div>
  );
}

export default App;
