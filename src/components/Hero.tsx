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
          <h1>FullStack Developer</h1>
          <p>
            I have a passion for building, and improving MERN stack
            applications. <br /> Start here to learn more about me, and why you
            should hire me.
          </p>
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
