import "./BlockB.css";
import img1 from "./responsive.png";
import img2 from "./reusable.png";
import img3 from "./simple.png";
import img4 from "./design.png";
import { useState } from "react";

const BlockB = () => {
  const [view, setView] = useState(0);
  const items = [
    { name: "Choices", image: img4 },
    {
      name: "Responsive",
      image: img1,
    },
    {
      name: "Reusable",
      image: img2,
    },
    {
      name: "Simplicity",
      image: img3,
    },
  ];

  return (
    <div className="block-b-container">
      <div className="block-b-main-block">
        {" "}
        <div className="block-b-image">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setView(index);
                console.log(index * 25);
              }}
            >
              <img src={item.image} alt="" srcset="" />
              <small>{item.name}</small>
            </div>
          ))}
        </div>
        <div className="block-b-text">
          <small>Getting Started</small>
          <h3>
            No <span>Packages</span> need
          </h3>
          <div>
            {" "}
            <p>
              Work with what you have already,{" "}
              <strong>
                {" "}
                <span>
                  Our components and designs are built with every UI Library
                </span>
              </strong>{" "}
              Easily build on top of what you were already working with.
            </p>
            <br />
            {/* <div className="btn">Search Templates</div> */}
          </div>
        </div>
      </div>
      <div className="block-b-scrolling-container">
        <div
          className="block-b-scrolling-contents"
          style={{ transform: `translateY(-${view * 25}%)` }}
        >
          {" "}
          <div className="block-b-box" id="box-1">
            {" "}
            A
          </div>
          <div className="block-b-box" id="box-2">
            {" "}
            B
          </div>
          <div className="block-b-box" id="box-3">
            {" "}
            C{" "}
          </div>
          <div className="block-b-box " id="box-4">
            {" "}
            D
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockB;
