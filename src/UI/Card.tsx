import React from "react";
import classes from "./Card.module.scss";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ children, className }: CardProps) => {
  return <div className={className ? className : classes.card}>{children}</div>;
};

export default Card;
