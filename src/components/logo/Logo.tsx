import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.letterContainer}>
        <h1>Matthew</h1>
      </div>
      <div className={classes.letterContainer}>
        <h1>McLennan</h1>
      </div>
    </div>
  );
};

export default Logo;
