import classes from "./Footer.module.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo-no-background.png";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo} alt="M" />
      </div>
      <div className={classes.nav}>
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
                isActive ? `nav__btn active` : "nav__btn"
              }
            >
              Cover Letter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? `nav__btn active` : "nav__btn"
              }
            >
              My Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `nav__btn active` : "nav__btn"
              }
            ></NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `nav__btn active` : "nav__btn"
              }
            ></NavLink>
          </li>
        </ul>
      </div>
      <SocialLinks className={classes.social} />
      <div className={classes.copyright}>
        <p>{`©${year} By Me`}</p>
        <Link to="https://icons8.com">Logos by Icons8</Link>
      </div>
    </footer>
  );
};

export default Footer;
