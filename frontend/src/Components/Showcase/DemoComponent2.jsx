import React from "react";

const DemoComponent2 = () => {
  return (
    <div className="demo-component demo-2">
      <small>Content Blocks</small>
      <h3 style={{ marginTop: "5px" }}>Customizable & Reusable Blocks</h3>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
      <p className="demo-2-extra">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        <button className="demo-btn">Learn More</button>
      </div>
    </div>
  );
};

export default DemoComponent2;
