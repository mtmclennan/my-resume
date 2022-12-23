import React from "react";
import { Data } from "../data";
import AboutMe from "./AboutMe";
import Personal from "./Personal";
import SideBar from "./SideBar";

const Page = ({ data }: { data: Data }) => {
  return (
    <div className="page">
      <SideBar data={data} />
      <div className="main">
        <Personal />
        <AboutMe />
      </div>
    </div>
  );
};

export default Page;
