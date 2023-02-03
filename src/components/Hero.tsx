import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo/Logo";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero">
        <div className="hero__content">
          <h3>Hello!</h3>
          <h1>I'm Matt,</h1>
          <h1>Software Developer</h1>
          <p>For more information about me, please visit the links below</p>
          <div className="btnContainer">
            <Link className="btn" to="/letter">
              Let's Talk
            </Link>
            <Link className="btn" to="/resume">
              Read More
            </Link>
          </div>
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default Hero;
