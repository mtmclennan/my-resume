import classes from "./MainHeader.module.scss";

import { NavLink, Link } from "react-router-dom";
import { Fragment } from "react";
import logo from "../assets/images/mlogo-no-background.png";
import SocialLinks from "../components/SocialLinks";

const MainHeader = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={logo} alt="M" />
            </Link>
          </div>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `nav__btn active` : "nav__btn"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/letter"
                className={({ isActive }) =>
                  isActive ? "nav__btn active" : "nav__btn"
                }
              >
                Cover Letter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "nav__btn active" : "nav__btn"
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>

          <SocialLinks className={classes.social} logos="only" />
        </nav>
      </header>
    </Fragment>
  );
};

export default MainHeader;
