import React from "react";
import { Data } from "../data";

const Skills = ({ data }: { data: Data }) => {
  return (
    <div className="skills">
      <div className="skills__container">
        <h2>SKILLS</h2>
        <h3 className="heading-box">Languages</h3>
        <ul>
          {data.languages.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="skills__container">
        <h3 className="heading-box">Technologies</h3>
        <ul>
          {data.tech.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
