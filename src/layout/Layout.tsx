// import Footer from "./Footer";
import { Fragment, ReactNode } from "react";
import Footer from "./Footer";
import classes from "./Layout.module.scss";
import MainHeader from "./MainHeader";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
