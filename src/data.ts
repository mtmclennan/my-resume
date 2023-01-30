export const data = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS, SASS"],
  tech: [
    "ReactJS",
    "NodeJS / ExpressJS",
    "NoSQL - MongoDB",
    "NextJS",
    "Redux",
    "Git - version Control",
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

export type Contact = typeof contact;

export type Address = typeof address;

export type Data = typeof data;
