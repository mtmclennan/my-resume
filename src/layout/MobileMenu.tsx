import classes from "./MobileMenu.module.scss";
import React, { useEffect, useState } from "react";

const MobileMenu = ({
  children,
  showMenu,
}: {
  children: React.ReactNode;
  showMenu: boolean;
}) => {
  const menuClass = showMenu ? classes.menu : classes.menuHidden;

  return <div className={menuClass}>{children}</div>;
};

export default MobileMenu;
