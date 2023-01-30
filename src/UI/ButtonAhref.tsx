import React from "react";
import classes from "./ButtonAhref.module.scss";

const ButtonAhef = ({
  url,
  icon,
  children,
}: {
  url: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className={classes.btn}>
      <a href={url} target="_blank" rel="noreferrer">
        {icon}
        {children}
      </a>
    </div>
  );
};

export default ButtonAhef;
