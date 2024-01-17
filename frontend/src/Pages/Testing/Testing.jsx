import React from "react";
import "./testing.css";

export const Testing = () => {
  const content = [
    {
      section: "Main",
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
      section: "Basic Components",
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
      section: "Functional",
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
      <div className="docs-side-menu"></div>
      <div className="docs-content-container"></div>
    </div>
  );
};
