import React from "react";

const DemoComponent1 = () => {
  return (
    <div className="demo-component">
      <div className="demo-component-author">
        {" "}
        <div className="demo-image-container">
          <img
            src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="demo-author-name">
          <h3>James Smith</h3>
          <small>Frontend developer</small>
        </div>
      </div>
      <div className="demo-author-bio">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </div>
    </div>
  );
};

export default DemoComponent1;
