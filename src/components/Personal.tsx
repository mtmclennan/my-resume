import React from "react";
import { address, contact } from "../data";
import ButtonAhef from "../UI/ButtonAhref";
import IonIcon from "@reacticons/ionicons";

const Personal = () => {
  return (
    <div className="section">
      <h3 className="heading-box">Software Devoloper</h3>
      <ul className="personal">
        <li>
          <ButtonAhef
            icon={<IonIcon name="location-outline" />}
            url="https://goo.gl/maps/6y9gdeJUBhKxSSK6A"
          >
            Address
          </ButtonAhef>

          {/* <span>
            {`${address.number} ${address.street}, ${
              address.city
            }, ${address.province.slice(0, 2).toUpperCase()}`}
          </span> */}
          <span>Cambridge, Ontario, Canada</span>
        </li>
        <li>
          {/* <ButtonAhef
            icon={<IonIcon name="call-outline" className="icon" />}
            url={`tel:${contact.phone}`}
          >
            Call Me
          </ButtonAhef>
          <span>{contact.phone}</span> */}
        </li>
        <li>
          <ButtonAhef
            icon={<IonIcon name="at-circle-outline" />}
            url={`mailto:${contact.email}?subject=Resume`}
          >
            Email me
          </ButtonAhef>
          <span>{contact.email}</span>
        </li>
        <li>
          <ButtonAhef
            icon={<IonIcon name="logo-linkedin" />}
            url={contact.linkedin}
          >
            LinkedIn
          </ButtonAhef>
          <span>{contact.linkedin}</span>
        </li>
        <li>
          <ButtonAhef
            url={contact.github}
            icon={<IonIcon name="logo-github" />}
          >
            GitHub
          </ButtonAhef>
          <span>{contact.github}</span>
        </li>
      </ul>
    </div>
  );
};

export default Personal;
