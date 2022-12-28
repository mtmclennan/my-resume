import React from "react";
import { address, contact } from "../data";
import IconButton from "../UI/IconButton";
import IonIcon from "@reacticons/ionicons";

const Personal = () => {
  return (
    <div className="section">
      <h3 className="heading-box">Software Devoloper</h3>
      <ul>
        <li>
          <IonIcon name="location-outline" />
          {`${address.number} ${address.street}, ${
            address.city
          }, ${address.province.slice(0, 2).toUpperCase()}`}
        </li>
        <li>
          <IonIcon name="locate-outline" />
          {contact.phone}
        </li>
        <li>
          <IonIcon name="at-circle-outline" />

          {contact.email}
        </li>
        <li>
          <IonIcon name="logo-linkedin" />
          {contact.linkedin}
        </li>
        <li>
          <IconButton
            url={contact.github}
            icon={<IonIcon name="logo-github" />}
          >
            GitHub
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Personal;
