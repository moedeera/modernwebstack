import { useState } from "react";
import "./Block7.css";

import { Link } from "react-router-dom";
import { SubBlock0 } from "../SubBlock0/SubBlock0";

export const Block7 = ({ info }) => {
  return (
    <div className="block-7-container">
      <div className="block-7-upper">
        <h1>About Us</h1>
        <p>
          At Modern Web Stack, our commitment to fostering a thriving ReactJS
          community goes beyond just providing an extensive collection of
          free-to-copy components. We understand the importance of clear
          guidance and hands-on learning, which is why our platform features an
          abundance of free documentation and instructional videos. Dive into a
          wealth of resources that offer step-by-step explanations on how to
          effectively build and implement the showcased React components.
          Whether you prefer to absorb information through written documentation
          or visual aids, our platform has you covered. Elevate your development
          skills as you embark on a journey through our user-friendly tutorials
          and engaging video content, ensuring that every user, regardless of
          their learning style, can confidently master React and bring their web
          projects to new heights
        </p>
        <Link to="/" className="btn btn-primary">
          Learn More
        </Link>
      </div>

      <SubBlock0 />
    </div>
  );
};
