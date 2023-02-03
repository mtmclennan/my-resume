import React, { Fragment } from "react";
import Hero from "../components/Hero";
import TechImages from "../components/TechImages";
import { techLogos } from "../data";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <TechImages images={techLogos} />
    </Fragment>
  );
};

export default Home;
