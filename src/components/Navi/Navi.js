import React from "react";
import "./navi.css";

const Navi = () => {
  return (
    <div className="navi">
      <div className="name-logo">
        <h2>Deandre Murray</h2>
      </div>
      <div className="nav-items">
        <button>Work</button>
        <button>About</button>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1Njy2tm21RXbm9LnfCrFZI1bnoFeU4Bh2/view?usp=sharing"
          rel="noreferrer"
        >
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Navi;
