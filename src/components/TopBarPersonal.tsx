import React from "react";
import { contact, address } from "../data";
import IonIcon from "@reacticons/ionicons";

const TopBarPersonal = () => {
  return (
    <ul className="top-bar__personal">
      <li>
        <span>
          {`${address.number} ${address.street}, ${
            address.city
          }, ${address.province.slice(0, 2).toUpperCase()}`}
        </span>
        {/* <span>Cambridge, Ontario, Canada</span> */}
      </li>
      |
      <li>
        <span>{contact.phone}</span>
      </li>
      |
      <li>
        <span>{contact.email}</span>
      </li>
    </ul>
  );
};

export default TopBarPersonal;
