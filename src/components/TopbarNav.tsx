import React from "react";
import ButtonAhef from "../UI/ButtonAhref";
import { address, contact } from "../data";
import IonIcon from "@reacticons/ionicons";

const TopbarNav = () => {
  return (
    <ul className="top-bar__nav">
      <li>
        <ButtonAhef
          nav={true}
          icon={<IonIcon name="call-outline" className="icon" />}
          url={`tel:${contact.phone}`}
        >
          Call Me
        </ButtonAhef>
      </li>
      <li>
        <ButtonAhef
          nav={true}
          icon={<IonIcon name="at-circle-outline" />}
          url={`mailto:${contact.email}?subject=Resume`}
        >
          Email me
        </ButtonAhef>
      </li>

      <li>
        <ButtonAhef
          nav={true}
          icon={<IonIcon name="logo-linkedin" />}
          url={contact.linkedin}
        >
          LinkedIn
        </ButtonAhef>
      </li>
      <li>
        <ButtonAhef
          nav={true}
          url={contact.github}
          icon={<IonIcon name="logo-github" />}
        >
          GitHub
        </ButtonAhef>
      </li>
    </ul>
  );
};

export default TopbarNav;
