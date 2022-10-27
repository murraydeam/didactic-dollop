import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="section">
      <div className="about-container" id="about">
        <div className="my-face">
          <div className="about-title">
            <h2>About Me!</h2>
          </div>
          <img src="img/me.jpg" alt="me" />
        </div>
        <div className="about-details">
          <h2>The Dreamer</h2>
          <p>
            I'm a completely self taught developer, the journey is a roller
            coaster. However the challenge I find endearing. I Enjoy having the
            ability to create a product from an idea that pops into my head at
            2AM. Each idea coming with it's own assortment of challenges and new
            technologies to learn!
          </p>
          <p>
            Whilst not at my desk, I really enjoy being active. From simple gym
            workouts to my passion hobby mountain biking! I Genuinely love the
            outdoors. I also have picked up playing the bass guitar which has
            been a treat similar to my endeavors in development!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
