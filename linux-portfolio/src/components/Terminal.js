// src/components/Terminal.js
import React, { useState, useEffect, useRef } from "react";
import OutputLine from "./OutputLine";
import "./Terminal.css";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const terminalEnd = useRef(null);

  const commands = {
    help: "commands to use :\nhelp, about, skills, projects, contact, resume",
    about: "I am Kshitij Hedau, an undergraduate student at PCCoE (Pimpri Chinchwad College of Engineering) pursuing a degree in Electronics and Telecommunication Engineering. I am passionate about Artificial Intelligence,Machine Learning, and Generative AI, with strong skills in building intelligent systems using frameworks such as LangChain, Retrieval-Augmented Generation (RAG), and large language models. I have hands-on experience in developing end-to-end AI applications, knowledge-driven chatbots, and automation pipelines, and I enjoy learning, experimenting, and innovating with cutting-edge technologies. My goal is to contribute to creating impactful AI-driven solutions that enhance efficiency, scalability, and user experience.",
    skills: "Programming Languages: Python, C, C++, JavaScript (React.js), SQL, C.\nAI/ML Data Science: TensorFlow, PyTorch, Keras, OpenCV, Scikit-learn, LangChain, RAG.\nFrameworks Tools: React.js, Node.js, Flask, Streamlit, Git/GitHub, REST APIs.\nDatabases Cloud: Firebase, MySQL, MongoDB, Google Colab.",
    projects: "1. Virtual Assistant : https://github.com/Herostomo/Virtual-Assistant\n2. Dog-breeds-classifier: https://github.com/Herostomo/Dog-breeds-classifier\n3. Truthlens: https://github.com/Herostomo/Truthlens\n 4. Own Neural Network: https://github.com/Herostomo/Create-My-Own-Neural-Network",
    contact: "Email: kshitijhedau48@gmail.com\nGitHub: https://github.com/Herostomo",
    resume: "Click here to view my Resume: https://drive.google.com/file/d/1kF-Z4bL_mzYkqVjpj1C51sztCMvKQFte/view?usp=sharing",
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      let output = commands[input.toLowerCase()] || `Command not found: ${input}`;

      // Make resume clickable
      if (input.toLowerCase() === "resume") {
        output = (
          <a
            href="https://drive.google.com/file/d/1LmTC9t1MUInKxTTmYpRnk6jUKDRTVFGw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#33ff33", textDecoration: "underline" }}
          >
            Click here to view my Resume
          </a>
        );
      }
      if (input.toLowerCase() === "contact") {
        output = (
          <>
          <a
            href="https://github.com/Herostomo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#33ff33", textDecoration: "underline",display: "block" }}
          >
            Github
          </a>

          <a
            href="mailto:kshitijhedau48@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#33ff33", textDecoration: "underline",display: "block" }}
          >
            Email:kshitijhedau48@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kshitij-hedau-8084aa292/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#33ff33", textDecoration: "underline",display: "block" }}
          >
            Linkedin:Kshitij_Hedau
          </a>
          </>
        );
      }
      if (input.toLowerCase() === "projects") {
  output = (
    <>
      <a
        href="https://github.com/Herostomo/Virtual-Assistant"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#33ff33", textDecoration: "underline", display: "block" }}
      >
        1. Virtual-Assistant
      </a>

      <a
        href="https://github.com/Herostomo/Dog-breeds-classifier"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#33ff33", textDecoration: "underline", display: "block" }}
      >
        2. Dog-breeds-classifier
      </a>

      <a
        href="https://github.com/Herostomo/Truthlens"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#33ff33", textDecoration: "underline", display: "block" }}
      >
        3. Truthlens
      </a>

      <a
        href=" https://github.com/Herostomo/Create-My-Own-Neural-Network"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#33ff33", textDecoration: "underline", display: "block" }}
      >
        3. Own-Neural-Network
      </a>
    </>
  );
}
      

      setHistory([...history, { command: input, output }]);
      setInput("");
    }
  };

  useEffect(() => {
    terminalEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="terminal">
      <div className="history">
        {history.map((h, index) => (
          <OutputLine key={index} command={h.command} output={h.output} />
        ))}
      </div>

      {/* Input line with native caret */}
      <div className="input-line">
        <span className="prompt">$ </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>

      <div ref={terminalEnd}></div>
    </div>
  );
};

export default Terminal;
