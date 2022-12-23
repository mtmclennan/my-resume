import React from "react";
import Logo from "./LogoContainer";
import Skills from "./Skills";
import { Data } from "../data";

const SideBar = ({ data }: { data: Data }) => {
  return (
    <div className="side-bar">
      <Logo />
      <Skills data={data} />
    </div>
  );
};

export default SideBar;
