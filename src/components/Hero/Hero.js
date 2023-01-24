import gsap from "gsap";
import React, { useEffect } from "react";
import { HeaderContainer } from "../../styles/containers";
import "./hero.css";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fadeIn",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.2 }
    );
    gsap.fromTo(
      ".fadeInTwo",
      { opacity: 0 },
      { opacity: 1, duration: 3, delay: 1.8 }
    );
  }, []);
  return (
    <div className="section">
      <div className="sub-header fadeIn">
        <h4>It's a me! Mari... Just kidding It's Deandre!</h4>
      </div>
      <HeaderContainer className="header fadeInTwo">
        <h2>Web Developer</h2>
      </HeaderContainer>
      <div className="header-details">
        <h4>Molding Ideas into Digital Products</h4>
      </div>
      <a href="#contact">
        <button className="header-button">Contact me</button>
      </a>
    </div>
  );
};

export default Hero;
