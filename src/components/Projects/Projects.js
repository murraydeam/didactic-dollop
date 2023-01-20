import { DoDisturbAltTwoTone } from "@mui/icons-material";
import gsap from "gsap";
import React, { useEffect } from "react";
import { ProjectContainer } from "../../styles/containers";
import "./projects.css";

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(".animateInOne", { y: 100 }, { y: -100 });

  }, []);

  return (
    <div className="section">
      <div className="projects " id="work">
        <ProjectContainer className="project animateInOne">
          <div className="project-details ">
            <div className="project-title">
              <h2>Forza Tune</h2>
            </div>
            <div className="project-stack ">
              <div className="stack-item">React</div>
              <div className="stack-item">JS</div>
              <div className="stack-item">NPM</div>
              <div className="stack-item">Material Design</div>
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
        </ProjectContainer>
        <ProjectContainer className="project animateInOne">
          <div className="project-details ">
            <div className="project-title">
              <h2>Web Auto</h2>
            </div>
            <div className="project-stack">
              <div className="stack-item">React</div>
              <div className="stack-item">Tom Tom API</div>
              <div className="stack-item">JS</div>
              <div className="stack-item">NPM</div>
              <div className="stack-item">CSS</div>
              <div className="stack-item">GIT</div>
            </div>
            <div className="project-description">
              <p>
                This project has been created using the Tom Tom api for the map.
                Theme changes for the car Auto interface along with a useable
                map are the stars of the show here.
              </p>
            </div>
          </div>

          <a
            className="project-image"
            href="https://murraydeam.github.io/web-auto/"
            target="_blank"
            rel="noreferrer preload"
          >
            <img src="img/webauto.png" alt="Web Auto" />
          </a>
        </ProjectContainer>
        <ProjectContainer className="project animateInOne">
          <div className="project-details ">
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
        </ProjectContainer>
      </div>
    </div>
  );
};

export default Projects;
