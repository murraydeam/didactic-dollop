import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="section">
      <div className="projects" id="work">
        <div className="project">
          <div className="project-details">
            <div className="project-title">
              <h2>Forza Tune</h2>
            </div>
            <div className="project-stack">
              <div className="stack-item">React</div>
              <div className="stack-item">JS</div>
              <div className="stack-item">NPM</div>
              <div className="stack-item">CSS</div>
              <div className="stack-item">GIT</div>
            </div>
            <div className="project-description">
              <p>
                This is my first passion project. I created it to aid players of
                the game Forza Horizon in getting a base tune for their
                vehicles. Features will continually get added to this project as
                I discover new needs for the the player base!
              </p>
            </div>
          </div>

          <a
            className="project-image"
            href="https://murraydeam.github.io/ForzaQuickTune/"
            target="_blank"
            rel="noreferrer preload"
          >
            <img src="img/forzatune.png" alt="Forzatune" />
          </a>
        </div>
        <div className="project">
          <div className="project-details">
            <div className="project-title">
              <h2>Calculator</h2>
            </div>
            <div className="project-stack">
              <div className="stack-item">React</div>
              <div className="stack-item">JS</div>
              <div className="stack-item">NPM</div> 
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
            rel="noreferrer preload"
          >
            <img src="img/calculator.png" alt="CalculatorApp" />
          </a>
        </div>
        <div className="project">
          <div className="project-details">
            <div className="project-title">
              <h2>Etch-a-Sketch</h2>
            </div>
            <div className="project-stack">
              <div className="stack-item">JS</div>
              <div className="stack-item">CSS</div>
              <div className="stack-item">GIT</div>
              <div className="stack-item">NPM</div>
              <div className="stack-item">DOM</div>
            </div>
            <div className="project-description">
              <p>
                Keeping it simple with this Etch-a-Sketch project. The primary
                focus here is DOM manipulation. The entire grid here is created
                using js! This was a project task for the{" "}
                <a href="https://www.theodinproject.com/">The Odin Project's</a>{" "}
                development course. I really enjoyed this course as it give's
                simple outlining parameters for the project but forces you to go
                out and search for a solution that you personally find useful.
              </p>
            </div>
          </div>

          <a
            className="project-image"
            href="https://murraydeam.github.io/Etch-a-Sketch/"
            target="_blank"
            rel="noreferrer preload"
          >
            <img src="img/etch-a-sketch.png" alt="eEtch-a-Sketch" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
