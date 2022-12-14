import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="section contact-section" id="contact">
      <div className="contact-header">
        <h2>Let'Chat more!</h2>
      </div>
      <a href="mailto:deandremurray22@gmail.com">
        <button className="header-button">Connect</button>
      </a>
    </div>
  );
};

export default Contact;
