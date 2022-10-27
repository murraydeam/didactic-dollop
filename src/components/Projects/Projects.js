import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="section">
      <div className="projects">
        <div className="project">
          <div className="project-details">
            <div className="project-title">
              <h2>Calculator</h2>
            </div>
            <div className="project-stack">
              <div className="stack-item">React</div>
              <div className="stack-item">JS</div>
              <div className="stack-item">CSS</div>
              <div className="stack-item">GIT</div>
            </div>
            <div className="project-description">
              <p>
                This project uses react Actions and Dispatch to control each
                button. Along with some CSS using Flex. This project also served
                as my introduction to rem units. I love rem units!
              </p>
            </div>
          </div>

          <a
            className="project-image"
            href="https://murraydeam.github.io/Calclulator/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="img/calculator.png" alt="CalculatorApp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
