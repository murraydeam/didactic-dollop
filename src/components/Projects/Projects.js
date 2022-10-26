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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias quis doloribus odit illo necessitatibus possimus
              nesciunt, odio facere harum culpa.
            </div>
          </div>

          <a
            className="project-image"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://picsum.photos/id/0/400/400" alt="CalculatorApp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
