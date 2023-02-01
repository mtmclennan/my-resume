import React from "react";
import Letter from "../components/Letter";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { data } from "../data";

const CoverLetter = () => {
  return (
    <div className="page-top">
      {/* <SideBar data={data} /> */}
      <TopBar />
      <Letter />
    </div>
  );
};

export default CoverLetter;
