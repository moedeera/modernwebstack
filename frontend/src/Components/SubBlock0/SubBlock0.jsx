import { useState } from "react";
import "./SubBlock0.css";
import icon1 from "../Block7/icon01.png";
import icon2 from "../Block7/icon02.png";
import icon3 from "../Block7/icon03.png";
import icon4 from "../Block7/icon04.png";

export const SubBlock0 = () => {
  const [icons, setIcons] = useState([
    { id: 1, title: "Custom Settings", icon: icon1 },
    { id: 2, title: "Networking Platforms", icon: icon4 },
    { id: 3, title: "Design Resources", icon: icon2 },
    { id: 4, title: "Support", icon: icon3 },
  ]);
  return (
    <div className="sub-block-0">
      {icons.map((item) => (
        <div key={item.id} className="sub-block-0-unit">
          <img src={item.icon} alt="" srcset="" />
          <p> {item.title}</p>
        </div>
      ))}
    </div>
  );
};