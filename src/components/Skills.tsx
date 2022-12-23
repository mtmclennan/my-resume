import React from "react";
import { Data } from "../data";

const Skills = ({ data }: { data: Data }) => {
  return (
    <div className="skills">
      <div>
        <h3>Languages</h3>
        <ul>
          {data.languages.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Technologies</h3>
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
