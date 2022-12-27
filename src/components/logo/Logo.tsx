import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.letterContainer}>
        <h1>M</h1>
      </div>
      <div className={classes.letterContainer}>
        <h1>M</h1>
      </div>
    </div>
  );
};

export default Logo;
