import { useState } from "react";
import "./SubBlock0.css";
import icon1 from "../Block7/icon01.png";
import icon2 from "../Block7/icon02.png";
import icon3 from "../Block7/adobe.png";
import icon4 from "../Block7/github.png";
import figma from "./figma.png";
import google from "./google.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import { useEffect } from "react";

export const SubBlock0 = ({ data }) => {
  const [icons, setIcons] = useState([
    { id: 1, title: "Custom Settings", icon: icon1 },
    { id: 2, title: "Share Repositories", icon: icon4 },
    { id: 3, title: "Adobe Designs", icon: icon3 },
    { id: 4, title: "Support", icon: icon2 },
    { id: 5, title: "Follow Us", icon: twitter },
    { id: 6, title: "Figma Toolkit", icon: figma },
    { id: 7, title: "Share your work", icon: instagram },
    { id: 8, title: "Google Services", icon: google },
  ]);

  useEffect(() => {
    if (data) {
      setIcons(data);
    }
  });
  return (
    <div className="sub-block-0">
      {icons.map((item) => (
        <div key={item.id} className="sub-block-0-unit">
          <img src={item.icon} alt="" />
          <p> {item.title}</p>
          <small>
            {item.details && item.details}
            {/* Select from numerous add-ons that enhance features and streamline
            tasks, all within your web browser */}
          </small>
          {item.link && item.link}
          <div className="cta">More</div>
        </div>
      ))}
    </div>
  );
};
