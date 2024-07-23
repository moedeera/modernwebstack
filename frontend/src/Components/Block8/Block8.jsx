import "./Block8.css";
import image1 from "./block8.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";

import { useState } from "react";

export const Block8 = ({ info }) => {
  const [data, setData] = useState({
    header: "Styling components should be easy",
    points: [
      {
        id: 1,
        header: "Supercharge your creativity",
        icon: icon1,
        text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
`,
      },
      {
        id: 2,
        header: "Networking is encouraged",
        icon: icon3,
        text: `Invite anyone to view your documents or share your documents
         via a link. What they see is up to you,and anyone you invite 
         can view at no cost.`,
      },
      {
        id: 3,
        header: "Brainstorming new styles",
        icon: icon2,
        text: `Take advantage of a solid version history to monitor 
        alterations. Manage the visibility of different versions
        throughout the process, ensuring that crucial edits are acknowledged`,
      },
    ],
  });

  return (
    <div className="block-8-container">
      <div className="block-8-text">
        <div className="block-8-header">
          <h3>{data.header}</h3>
        </div>

        {data.points.map((item) => (
          <div key={item.id} className="block-8-unit">
            <div className="block-8-unit-header">
              <div className="block-8-icon">
                <img src={item.icon} alt="" />
              </div>
              <h4>{item.header}</h4>{" "}
            </div>
            <div className="block-8-unit-text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="block-8-image">
        <div className="bg-div"></div>
        <img src={image1} alt="image-1" />
      </div>
    </div>
  );
};
