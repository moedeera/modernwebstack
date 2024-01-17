import React from "react";
import "./Testing.css";

export const Testing = () => {
  const content = [
    {
      name: "Main",
      content: [
        "Why MWS",
        "Getting Started",
        "Features",
        "Components",
        "Templates",
        "Video Tutorials",
      ],
    },
    {
      name: "Basic Components",
      content: [
        "Navbar",
        "Footers",
        "Landing",
        "Text",
        "Images",
        "Grids",
        "Forms",
      ],
    },
    {
      name: "Functional",
      content: [
        "Search bar",
        "Multi-step",
        "Loading",
        "Carousel",
        "Slider",
        "Counter",
        "Modal",
      ],
    },
    {
      name: "Functional",
      content: [
        "Search bar",
        "Multi-step",
        "Loading",
        "Carousel",
        "Slider",
        "Counter",
        "Modal",
      ],
    },
  ];

  return (
    <div className="container docs-page">
      <div className="docs-side-menu">
        {content.map((section, index) => (
          <div className="content-section" key={index}>
            <p>{section.name}</p>
            {section.content.map((item, index) => (
              <small key={index}>{item}</small>
            ))}
          </div>
        ))}
      </div>
      <div className="docs-content-container"></div>
    </div>
  );
};
