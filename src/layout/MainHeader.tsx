import classes from "./MainHeader.module.scss";

import { useMatch, NavLink, Link } from "react-router-dom";
import { Fragment } from "react";
import logo from "../assets/images/mlogo-no-background.png";

const MainHeader = () => {
  // const matches = useMatch('/');
  // const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const currentRoute = matches.pathname;

  // const homeClassName = useMatch("/") ? "active" : "non-active";
  // const coverLetterClassName = useMatch("/blog") ? "active" : "non-active";
  // const resumeClassName = useMatch("/contact") ? "active" : "non-active";

  // useEffect(() => {
  //   setShowMobileMenu(false);
  // }, [currentRoute]);

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
            {/* <li>
              <NavLink to="/about">
                <a className={aboutClassname}>About</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <a className={contactClassname}>Contact</a>
              </NavLink>
            </li> */}
          </ul>

          {/* <Hamburger
            showMenu={showMobileMenu}
            setShowMenu={setShowMobileMenu}
          /> */}
        </nav>
      </header>
      {/* {showMobileMenu && (
        <MobileMenu
          homeClassname={homeClassname}
          blogClassname={blogClassname}
          aboutClassname={aboutClassname}
          contactClassname={contactClassname}
          toolsClassname={toolsClassname}
        />
      )} */}
    </Fragment>
  );
};

export default MainHeader;
