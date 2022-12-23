export const data = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
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
  linkedin: "www.linkedin.com/in/matthew-mclennan-bb2655253",
  github: "https://github.com/mtmclennan",
};

export const about =
  "best solution driven software developer.  Passionate about building high-quality applications. Complex Problem solver, with a thrust for knowledge.  Always looking to learn new technologies. ";

export type Contact = typeof contact;

export type Address = typeof address;

export type Data = typeof data;
