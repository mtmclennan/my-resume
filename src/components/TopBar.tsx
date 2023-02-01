import React from "react";
import Logo from "./logo/Logo";
import TopbarNav from "./TopbarNav";
import TopBarPersonal from "./TopBarPersonal";

const TopBar = () => {
  return (
    <div className="top-bar">
      <Logo size="small" />
      <div className="top-bar__nav-container">
        <TopbarNav />
        <TopBarPersonal />
      </div>
    </div>
  );
};

export default TopBar;
