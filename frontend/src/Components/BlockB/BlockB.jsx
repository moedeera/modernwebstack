import "./BlockB.css";
import img1 from "./responsive.png";
import img2 from "./reusable.png";
import img3 from "./simple.png";
import img4 from "./design.png";
import { useState } from "react";

const BlockB = () => {
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
            <div className="block-b-card" key={index}>
              <div className="bbi-image">
                <img src={item.image} alt="" srcset="" />{" "}
              </div>
              <div>
                <div className="bbi-text">
                  {" "}
                  <h4>{item.name}</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur.sed do eiusmod</p>
                  {/* <small>{item.name}</small> */}
                  {/* <div className="btn"> More</div> */}
                </div>{" "}
              </div>
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
              Want to keep your project as minimalist as possible? Work with
              what you have already, . Our goal is to help you reduce the number
              of stacks and add-ons you are using for your UI.
              <strong>
                {" "}
                <span>
                  Our components and designs are built with every UI Library
                </span>
              </strong>{" "}
              Easily build on top of what you were already with.
            </p>
            <br />
            {/* <div className="btn">Search Templates</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockB;
