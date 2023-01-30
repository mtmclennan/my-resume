import React from "react";
import classes from "./Logo.module.css";
import logo from "../../assets/images/logo-no-background.png";

const Logo = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="Matthew McLennan" />
    </div>
  );
};

export default Logo;
