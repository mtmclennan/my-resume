import React from "react";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import { contact } from "../data";
import classes from "./SocialLink.module.scss";

interface SocialItemProps {
  link: string;
  icon: React.ReactNode;
  title?: string;
}

const SocialItem = ({ link, icon, title }: SocialItemProps) => (
  <li className={classes.item}>
    <Link to={link}>
      {title}
      {icon}
    </Link>
  </li>
);

const SocialLinks = ({
  className,
  logos,
}: {
  className: string;
  logos?: "only" | undefined;
}) => {
  return (
    <div className={className}>
      <ul>
        <SocialItem
          icon={
            <div>
              {logos !== "only" ? (
                <span className={classes.linked}>Linked</span>
              ) : (
                ""
              )}
              <IonIcon name="logo-linkedin" size="large"></IonIcon>
            </div>
          }
          link={contact.linkedin}
        />
        <SocialItem
          icon={<IonIcon name="logo-github" size="large" />}
          link={contact.github}
          title={logos !== "only" ? "GitHub" : ""}
        />
      </ul>
    </div>
  );
};

export default SocialLinks;
