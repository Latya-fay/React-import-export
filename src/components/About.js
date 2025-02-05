import React from "react";
import { image } from "../data/user"; // Import data

function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="User Profile" />
    </div>
  );
}

export default About;
