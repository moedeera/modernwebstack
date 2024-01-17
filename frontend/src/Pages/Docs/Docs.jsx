import { CodeBlock } from "../../Components/CodeBlock/CodeBlock";
import "./Docs.css";

export const Docs = () => {
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
      <div className="docs-content-container">
        <h3>Getting Started</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className="docs-content-codeblock">
          <CodeBlock />
        </div>
      </div>
    </div>
  );
};
