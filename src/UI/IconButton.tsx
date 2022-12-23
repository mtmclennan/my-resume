import React from "react";
import { LogoGithub } from "react-ionicons";

const IconButton = ({
  url,
  icon,
  children,
}: {
  url: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        <button className="btn btn_icon">
          {icon}
          {children}
        </button>
      </a>
    </div>
  );
};

export default IconButton;
