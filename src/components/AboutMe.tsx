import React from "react";
import { about } from "../data";

const AboutMe = () => {
  return (
    <div className="section">
      <h3 className="heading-box">About Me</h3>
      <p>{about}</p>
    </div>
  );
};

export default AboutMe;
