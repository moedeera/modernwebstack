import chakra from "../Components/Block7/chakra.png";
import mui from "../Components/Block7/materialsui.png";
import js from "../Components/Block7/js.png";
import tailwindcss from "../Components/Block7/tailwind.png";

const landingPageAbout = {
  small: "Skills Development",
  header: "Empower Your React Journey",
  text: `Modern Web Stack is a comprehensive online platform
     dedicated to providing exceptional learning resources for ReactJS enthusiasts.
     Whether you're a beginner seeking to grasp the fundamentals or an experienced
     developer looking to enhance your skills, Modern Web Stack offers a curated
     collection of tutorials, guides, and interactive lessons.`,
  button: true,
  buttonText: "See Templates",
  link: "/",
  reverse: true,
};

const landingPageAbout2 = {
  small: "",
  header: "",
  text: `What sets this
     platform apart is its commitment to community empowerment—offering a vast
     repository of free-to-copy React components. Users can explore and integrate
     these components seamlessly into their projects, fostering a collaborative
     environment and accelerating the development process. Modern Web Stack not
     only serves as a valuable educational hub for ReactJS but also as a practical
     toolkit for developers to efficiently build modern and dynamic web applications.`,
};

const landingPageLearning = {
  small: "Resources",
  header: "Learning Resources and a Treasure Trove of Free-to-Copy Components",
  text: `At Modern Web Stack, our commitment to fostering a thriving
   ReactJS community goes beyond just providing an extensive collection of
   free-to-copy components. We understand the importance of clear guidance
   and hands-on learning, which is why our platform features an abundance of
   free documentation and instructional videos. `,
  button: true,
  buttonText: "Learn More",
  link: "/",
  reverse: false,
};

const landingPageLearning2 = {
  header: "",
  text: `Dive into a wealth of resources
   that offer step-by-step explanations on how to effectively build and implement
   the showcased React components. Whether you prefer to absorb information through
   written documentation or visual aids, our platform has you covered. Elevate your
   development skills as you embark on a journey through our user-friendly tutorials
   and engaging video content, ensuring that every user, regardless of their
   learning style, can confidently master React and bring their web projects to new heights`,
  button: true,
};

const codeblock1 = `
import { useEffect, useState } from "react";
import "./Block1.css";
import { Link } from "react-router-dom";
import basicImage from "../Landing/code1.jpg";

export const Block1 = ({ data }) => {
 
  return (
    <div
      className={
        info.reverse ? "block-1-container reverse" : "block-1-container"
      }
    >
      <div className="block-1-text">
        <small>{info.small}</small>
        <h3>{info.header}</h3>
        <p>{info.text}</p>
        <Link className="btn btn-primary" to={info.link}>
          {info.buttonText}
        </Link>
      </div>
      <div className="block-1-image">
        <img src={basicImage} alt="" />
      </div>
    </div>
  );
};

`;

const codeblock2 = `
import React from "react";
import "./Block3.css";
import b3svg from "./block3.svg";

import { useEffect, useState } from "react";

export const Block3 = ({ data }) => {
  const [info, setInfo] = useState({
    small: "Prototyping",
    header: "Prototyping and create stunning animations",
    text: "Our AI engine gives you everything you need to create stunning
            designs, from vector graphics to interactive prototypes with our
            powerful features and intuitive interface.",
    buttonText: "Learn More",
    link: "/",
    reverse: true,
  });

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, []);
  return (
    <div className="block3-container">
      <small>{info.small}</small>
      <h2>{info.header}</h2>
      <div className="block3-image-container">
        <img
          src="https://www.modernwebstack.com/assets/code1-ba39da29.jpg"
          alt=""
          srcset=""
        />
        <img
          src="https://www.modernwebstack.com/assets/code1-ba39da29.jpg"
          alt=""
          srcset=""
        />

        <img
          src="https://www.modernwebstack.com/assets/code1-ba39da29.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};


`;

const componentLibraries = [
  { id: 0, title: "Shadcn", icon: null, svg: true, version: 1 },
  { id: 1, title: "TailwindCSS", svg: false, icon: tailwindcss },
  { id: 2, title: "MaterialsUI", svg: false, icon: mui },
  // { id: 3, title: "Plain JS", svg: false, icon: js },
  { id: 4, title: "Chakra UI", svg: false, icon: chakra },
];

export {
  landingPageAbout as landingPageAbout,
  landingPageLearning as landingPageLearning,
  codeblock1 as codeblock1,
  codeblock2 as codeblock2,
  componentLibraries,
};
