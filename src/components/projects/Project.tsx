import IonIcon from "@reacticons/ionicons";
import React from "react";
import ButtonAhef from "../../UI/ButtonAhref";
import Card from "../../UI/Card";
import classes from "./Project.module.scss";

interface ProjectProps {
  logo?: string;
  preview: string;
  description: string;
  link?: string;
  code: string;
  brand?: string;
}

const Project = ({
  logo,
  preview,
  description,
  link,
  code,
  brand,
}: ProjectProps) => {
  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.flex}>
          <div className={classes.logo}>
            <a href={link}>
              {logo && <img src={logo} alt="logo" />}
              <h3>{brand}</h3>
            </a>
          </div>

          <div>
            <img className={classes.preview} src={preview} alt="Site Preview" />
          </div>
        </div>
        <p>{description}</p>
        <div className={classes.btnContainer}>
          {link && <ButtonAhef url={link}>Go To Live Site</ButtonAhef>}
          <ButtonAhef url={code} icon={<IonIcon name="logo-github" />}>
            Go To Code
          </ButtonAhef>
        </div>
      </div>
    </Card>
  );
};

export default Project;
