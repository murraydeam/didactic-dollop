import { Box, Divider, Tooltip } from "@mui/material";
import gsap from "gsap";
import React, { useEffect } from "react";
import { ProjectContainer } from "../../styles/containers";
import "./projects.css";

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animateInOne",
      { y: 100, opacity: 0 },
      { y: -100, opacity: 1, duration: 1, delay: 0.4 }
    );
    gsap.fromTo(
      ".animateInTwo",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.8 }
    );
    gsap.fromTo(
      ".animateInThree",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.2 }
    );
  }, []);

  return (
    <div className="section">
      <div className="projects " id="work">
        <Box className="Title animateInOne">
          <Divider />
          <h1>Projects</h1>
          <Divider />
        </Box>
        <ProjectContainer className="project animateInOne">
          <div className="project-details ">
            <div className="project-title">
              <h2>Forza Tune</h2>
            </div>
            <div className="project-stack animateInTwo">
              <Tooltip enterDelay={150} title="React" placement="top" arrow>
                <div className="stack-item">React</div>
              </Tooltip>
              <Tooltip
                enterDelay={150}
                title="Javascript"
                placement="top"
                arrow
              >
                <div className="stack-item">JS</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="NPM" placement="top" arrow>
                <div className="stack-item">NPM</div>
              </Tooltip>
              <Tooltip
                enterDelay={150}
                title="Material Design"
                placement="top"
                arrow
              >
                <div className="stack-item">Material Design</div>
              </Tooltip>
              <Tooltip
                enterDelay={150}
                title="Cascading Style Sheets"
                placement="top"
                arrow
              >
                <div className="stack-item">CSS</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="GIT" placement="right" arrow>
                <div className="stack-item">GIT</div>
              </Tooltip>
            </div>
            <div className="project-description animateInThree">
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
              <Tooltip enterDelay={150} title="React" placement="top" arrow>
                <div className="stack-item">React</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="Tom Tom" placement="top" arrow>
                <div className="stack-item">Tom Tom Api</div>
              </Tooltip>
              <Tooltip
                enterDelay={150}
                title="Javascript"
                placement="top"
                arrow
              >
                <div className="stack-item">JS</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="NPM" placement="top" arrow>
                <div className="stack-item">NPM</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="CSS" placement="top" arrow>
                <div className="stack-item">CSS</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="GIT" placement="top" arrow>
                <div className="stack-item">GIT</div>
              </Tooltip>
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
              <Tooltip
                enterDelay={150}
                title="Javascript"
                placement="top"
                arrow
              >
                <div className="stack-item">JS</div>
              </Tooltip>

              <Tooltip enterDelay={150} title="NPM" placement="top" arrow>
                <div className="stack-item">NPM</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="CSS" placement="top" arrow>
                <div className="stack-item">CSS</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="GIT" placement="top" arrow>
                <div className="stack-item">GIT</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="DOM" placement="top" arrow>
                <div className="stack-item">DOM</div>
              </Tooltip>
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
        <Box className="upcoming-projects animateInOne">
          <Divider />
          <h1>Upcoming Projects</h1>
          <Divider />
        </Box>
        <ProjectContainer className="project animateInOne">
          <div className="project-details ">
            <div className="project-title">
              <h2>Bike Shop</h2>
            </div>
            <div className="project-stack">
              <Tooltip
                enterDelay={150}
                title="Javascript"
                placement="top"
                arrow
              >
                <div className="stack-item">JS</div>
              </Tooltip>

              <Tooltip enterDelay={150} title="NPM" placement="top" arrow>
                <div className="stack-item">NPM</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="CSS" placement="top" arrow>
                <div className="stack-item">CSS</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="GIT" placement="top" arrow>
                <div className="stack-item">GIT</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="DOM" placement="top" arrow>
                <div className="stack-item">DOM</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="Postman" placement="top" arrow>
                <div className="stack-item">Postman</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="Django" placement="top" arrow>
                <div className="stack-item">Django</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="RestAPI" placement="top" arrow>
                <div className="stack-item">RestAPI</div>
              </Tooltip>
              <Tooltip enterDelay={150} title="RestAPI" placement="top" arrow>
                <div className="stack-item">JSON</div>
              </Tooltip>
              <Tooltip
                enterDelay={150}
                title="React Router"
                placement="top"
                arrow
              >
                <div className="stack-item">React Router</div>
              </Tooltip>
            </div>
            <div className="project-description">
              <strong>
                <p>
                  Utilizing Django for the backend, creating the database and
                  hosting the API, and React linked to Axios for fetching the
                  API. This application can be dynamically updated, from images
                  to descriptions and prices of items all using the Django Admin
                  panel!
                </p>
              </strong>
              <p>
                This project is one of my favorite passion projects, I love
                bikes and I really enjoy development. So creating a bike shop as
                an e-commerce project was the obvious answer. I feel most bike
                shops have very simple static websites that are all dying for an
                update. This site serves as a base for that and will continue to
                see updates for components!.
              </p>
            </div>
          </div>

          <a
            className="project-image"
            href="https://github.com/murraydeam/bike-shop"
            target="_blank"
            rel="noreferrer preload"
          >
            <img src="img/bike.jpg" alt="eEtch-a-Sketch" />
          </a>
        </ProjectContainer>
      </div>
    </div>
  );
};

export default Projects;
