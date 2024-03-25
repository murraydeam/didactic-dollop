import gsap from "gsap";
import React, { useEffect } from "react";
import { HeaderContainer } from "../../styles/containers";
import "./hero.css";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fadeIn",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.6 }
    );
    gsap.fromTo(
      ".fadeInTwo",
      { opacity: 0 },
      { opacity: 1, duration: 3, delay: 0.8 }
    );
    gsap.fromTo(
      ".fadeInThree",
      { opacity: 0 },
      { opacity: 1, duration: 3, delay: 1.2 }
    );
  }, []);
  return (
    <div className="section">
      <HeaderContainer className="header fadeInTwo">
        <h2>Web Developer</h2>
        <p className="fadeInThree">With a background in Technical support!</p>
      </HeaderContainer>
      <div className="header-details fadeInTwo">
        <h4>Molding Ideas into Digital Products</h4>
      </div>
      <a href="#contact">
        <button className="header-button fadeInTwo">Contact me</button>
      </a>
    </div>
  );
};

export default Hero;
