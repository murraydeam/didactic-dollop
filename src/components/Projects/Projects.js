import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header">
        <h2>What can you think up?</h2>
      </div>
      <div className="project-1">
        <div className="project-details">
          <div className="project-stack">
            <div className="stack-item">React</div>
            <div className="stack-item">JS</div>
            <div className="stack-item">CSS</div>
            <div className="stack-item">GIT</div>
          </div>
          <div className="project-title">Calculator</div>
          <div className="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quis doloribus odit illo necessitatibus possimus nesciunt, odio
            facere harum culpa.
          </div>
        </div>
        <a href="/">
          <img src="https://picsum.photos/id/0/400/400" alt="CalculatorApp" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
