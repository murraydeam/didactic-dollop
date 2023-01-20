import React from "react";
import "./navi.css";

const Navi = () => {
  return (
    <div className="navi">
      <div className="name-logo">
        <h2>Deandre Murray</h2>
      </div>
      <div className="nav-items">
        <a href="#work" rel="noopener noreferrer">
          <button>Work</button>
        </a>
        <a href="#about" rel="noopener noreferrer">
          <button>About</button>
        </a>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1mtLT2DU9JaCMtVP06GFlE4SVzIgYuvglzO0DHTcOCCE/edit?usp=sharing"
          rel="noreferrer"
        >
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Navi;
