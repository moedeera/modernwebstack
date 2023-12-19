import { useState } from "react";
import "./Block7.css";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";

export const Block7 = ({ info }) => {
  const [icons, setIcons] = useState([
    { id: 1, title: "Custom Settings", icon: icon1 },
    { id: 2, title: "Networking Platforms", icon: icon2 },
    { id: 3, title: "Design Resources", icon: icon3 },
    { id: 4, title: "Support", icon: icon4 },
  ]);
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
        <button className="btn btn-primary">Learn More</button>
      </div>
      <div className="block-7-lower">
        {icons.map((item) => (
          <div key={item.id} className="block-7-lower-unit">
            <img src={item.icon} alt="" srcset="" />
            <h4> {item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
