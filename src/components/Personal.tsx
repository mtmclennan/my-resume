import React from "react";
import { address, contact } from "../data";
import IconButton from "../UI/IconButton";
import {
  LocationOutline,
  CallOutline,
  AtCircleOutline,
  LogoLinkedin,
  LogoGithub,
} from "react-ionicons";

const Personal = () => {
  return (
    <div className="section">
      <h3>Software Devoloper</h3>
      <ul>
        <li>
          <LocationOutline />
          {`${address.number} ${address.street}, ${
            address.city
          }, ${address.province.slice(0, 2).toUpperCase()}`}
        </li>
        <li>
          <CallOutline />
          {contact.phone}
        </li>
        <li>
          <AtCircleOutline />
          {contact.email}
        </li>
        <li>
          <LogoLinkedin />
          {contact.linkedin}
        </li>
        <li>
          <IconButton url={contact.github} icon={<LogoGithub />}>
            GitHub
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Personal;
