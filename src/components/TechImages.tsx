import React from "react";
import classes from "./TechImages.module.scss";

const TechImages = ({ images }: { images: string[] }) => {
  return (
    <div className={classes.container}>
      <ul className={classes.slide}>
        {images.map((image) => (
          <li key={Math.random().toString()}>
            <img src={image} alt={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechImages;
