import React from "react";
import { Data } from "../data";
import AboutMe from "./AboutMe";
import Personal from "./Personal";
import Project from "./projects/Project";
import SideBar from "./SideBar";
import previewPP from "../assets/images/PP-preview.png";
import previewEM from "../assets/images/edgeinmindpreview.png";
import PPLogo from "../assets/images/PPlogoonly.png";

const Page = ({ data }: { data: Data }) => {
  return (
    <div className="page">
      <SideBar data={data} />
      <div className="main">
        <Personal />
        <AboutMe />
        <h3 className="heading-box">My Current Projects</h3>
        <Project
          logo={PPLogo}
          brand="PluralPost"
          description="This headless CMS project is designed with content creators with multiple websites in mind.  It uses a React client connecting to the Node/Express backend via REST API.  It features authentication with JWT and React Context API for user login, controlling user roles, and storing the selected website for connecting to different MongoDB databases for each site.  It also features CKEditor5 rich text editor,  sends build hook on publish, receives subscriber emails via API, compose and sends emails to subscriber lists using nodemailer."
          preview={previewPP}
          code="https://github.com/mtmclennan/PluralPost"
          link="https://pluralpost.com"
        />
        <Project
          brand="EdgeInMind"
          preview={previewEM}
          code="https://github.com/mtmclennan/tradingsite"
          description="This NextJS project is a blog website with a tools section that includes calculators for quickly figuring out various trade details, such as order placement prices and the number of shares.  The site uses NextJS SSG (Static Site Generation) and  On-Demand Revalidation ISR (Incremental Static Regeneration).  That rebuilds the static site whenever a post is published or removed from the backend database—using PluralPost for the backend."
        />
      </div>
    </div>
  );
};

export default Page;
