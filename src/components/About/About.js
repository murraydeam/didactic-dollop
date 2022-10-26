import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="section">
      <div className="about-container">
        <div className="my-face">
          <div className="about-title">
            <h2>About Me!</h2>
          </div>
          <img
            src="https://picsum.photos/id/3/300/300"
            alt="me"
          />
        </div>
        <div className="about-details">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, at
            pariatur adipisci minus ullam eaque neque optio, beatae ut iure
            reprehenderit velit sit, voluptatem delectus? Voluptas voluptatibus,
            quia quidem recusandae perspiciatis dignissimos rem, laboriosam nemo
            quisquam voluptate hic dolores, obcaecati commodi minima sit ipsa
            error possimus laudantium? Nisi facilis rem dolorem earum
            repellendus neque, fuga dolores praesentium illum laudantium ut
            ipsa, doloremque sunt maiores magni! Eaque sint odit magnam natus
            reiciendis cumque porro doloremque delectus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio
            repellat ullam necessitatibus distinctio reiciendis impedit? Fuga
            totam libero vel eveniet, qui vitae molestias sequi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
