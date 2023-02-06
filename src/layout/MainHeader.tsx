import classes from "./MainHeader.module.scss";
import Hamburger from "./Hamburger";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import logo from "../assets/images/mlogo-no-background.png";
import SocialLinks from "../components/SocialLinks";
import MobileMenu from "./MobileMenu";

const MainHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location]);

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

          <Hamburger
            showMenu={showMobileMenu}
            setShowMenu={setShowMobileMenu}
          />
        </nav>
      </header>

      <MobileMenu showMenu={showMobileMenu}>
        <ul className={classes.mobile}>
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
          <SocialLinks className={classes.mobileSocial} />
        </ul>
      </MobileMenu>
    </Fragment>
  );
};

export default MainHeader;
