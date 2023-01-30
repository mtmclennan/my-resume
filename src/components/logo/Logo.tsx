import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.container}>
      <img src="/logo-no-background.png" alt="Matthew McLennan" />
    </div>
  );
};

export default Logo;
