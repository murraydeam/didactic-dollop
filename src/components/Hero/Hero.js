import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="section">
      <div className="sub-header">
        <h4>It's a me! Mari... Just kidding It's Deandre!</h4>
      </div>
      <div className="header">
        <h2>Web Developer</h2>
      </div>
      <div className="header-details">
        <h4>Molding Ideas into Digital Products</h4>
      </div>
        <a href="#Contact">
          <button className="header-button">Contact me</button>
        </a>
    </div>
  );
};

export default Hero;
