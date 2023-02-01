import React from "react";
import classes from "./Logo.module.scss";
import logo from "../../assets/images/logo-no-background.png";

const Logo = ({ size }: { size?: "small" | undefined }) => {
  const containerClass =
    size === "small" ? classes.containerSmall : classes.container;
  return (
    <a href="https://mtmclennan.github.io/my-resume/">
      <div className={containerClass}>
        <img src={logo} alt="Matthew McLennan" />
      </div>
    </a>
  );
};

export default Logo;
