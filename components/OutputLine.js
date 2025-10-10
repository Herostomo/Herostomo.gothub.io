// src/components/OutputLine.js
import React from "react";

const OutputLine = ({ command, output }) => (
  <div>
    {command && <div><span className="prompt">$ </span>{command}</div>}
    {output && <div className="output">{output}</div>}
  </div>
);

export default OutputLine;
