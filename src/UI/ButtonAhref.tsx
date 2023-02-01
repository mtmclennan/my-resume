import React from "react";
import classes from "./ButtonAhref.module.scss";

const ButtonAhef = ({
  url,
  icon,
  children,
  nav,
}: {
  url: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  nav?: true | undefined;
}) => {
  const linkClass = nav ? `${classes.btn} ${classes.navBtn}` : classes.btn;

  return (
    <div className={linkClass}>
      <a href={url} target="_blank" rel="noreferrer">
        {icon}
        {children}
      </a>
    </div>
  );
};

export default ButtonAhef;
