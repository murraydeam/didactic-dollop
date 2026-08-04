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
          href="https://drive.google.com/file/d/1TLjoclgJZeAhsTK2Ft9U6-N2oq8kGthK/view?usp=sharing"
          rel="noreferrer"
        >
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Navi;
