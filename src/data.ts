import reactLogo from "./assets/images/React_logo_wordmark-700x235.png";
import reduxLogo from "./assets/images/icons8-redux-480.png";
import expressLogo from "./assets/images/icons8-express-js-250-white.png";
import nodeLogo from "./assets/images/icons8-node-js-240.png";
import tsLogo from "./assets/images/icons8-typescript-480.png";
import jsLogo from "./assets/images/icons8-javascript-480.png";
import nextLogo from "./assets/images/Next.js Logo Vector-white.png";
import mongodbLogo from "./assets/images/icons8-mongodb-480.png";
import sassLogo from "./assets/images/icons8-sass-480.png";
import gitLogo from "./assets/images/icons8-git-480.png";
import cssLogo from "./assets/images/icons8-css3-480.png";
import HTMLLogo from "./assets/images/HTML5_Logo_256.png";

export const techLogos = [
  reactLogo,
  reduxLogo,
  expressLogo,
  nodeLogo,
  nextLogo,
  tsLogo,
  jsLogo,
  mongodbLogo,
  sassLogo,
  cssLogo,
  HTMLLogo,
  gitLogo,
];

export const data = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS, SASS"],
  tech: [
    "ReactJS",
    "NodeJS / ExpressJS",
    "NoSQL - MongoDB",
    "NextJS",
    "Redux",
    "Git - Version Control",
  ],
};

export const address = {
  number: 614,
  street: "Glen Morris Rd W",
  city: "Glen Morris",
  province: "Ontario",
  country: "Canada",
};

export const contact = {
  email: "mtmclennan@gmail.com",
  phone: "226-338-8443",
  linkedin: "https://linkedin.com/in/matthew-mclennan-dev",
  github: "https://github.com/mtmclennan",
};

export const about =
  "Hello,  my name is Matt; I am a self-taught full-stack developer passionate about building dynamic and user-friendly web applications using ReactJS and NodeJS / ExpressJS.  I am a very analytical and logical individual who excels at strategic planning and complex problem-solving.  Although I am new to the industry, I am highly motivated and dedicated to learning and staying up-to-date with the latest technologies. My strong desire to build and improve innovative software will make me an asset to any team";

export const coverLetter =
  "Dear Hiring Manager,\nI hope this letter finds you well.  I am writing to express my interest in joining your team as a software developer.  I am a quick learner, a problem solver, and a dedicated individual, eager to put my skills to use in a professional setting.\nI am a self-taught developer who has completed many online courses and projects and used my free time to build my projects.  I am constantly improving.  I am confident in my abilities to learn quickly and adapt to new technologies, making me a valuable asset to your team.  My expertise in JavaScript, TypeScript, ReactJS, NodeJS / ExpressJS, and MongoDB, along with my logical approach to problem-solving, have helped me to develop a strong foundation in full-stack development, and I am eager to apply these skills in a professional setting. \n In addition to my technical skills, I am also independent and self-motivated.  I am always looking for new opportunities to learn and grow as a developer.  As a result, I can bring a fresh perspective and a passion for technology to your organization.  In addition, my love, dedication, and problem-solving abilities will make me an asset to any team. \n Thank you for considering my application.  I am eager to discuss further how I can contribute to your team and would be happy to provide additional information if needed. \n I look forward to hearing back from you soon. \n Sincerly, \n Matthew McLennan";

export type Contact = typeof contact;

export type Address = typeof address;

export type Data = typeof data;
