import React from "react";
import "./Homepage.css";
import { Landing } from "../../Components/Landing/Landing";
import { Block1 } from "../../Components/Block1/Block1";
import {
  componentLibraries,
  landingPageAbout,
  landingPageLearning,
} from "../../Context/Content";
import { Block3 } from "../../Components/Block3/Block3";
import { Block6 } from "../../Components/Block6/Block6";
import { Block8 } from "../../Components/Block8/Block8";
import { SubBlock0 } from "../../Components/SubBlock0/SubBlock0";
import { SubBlock2 } from "../../Components/SubBlock2/SubBlock2";
import { BlurredGradient } from "../../Components/BlurredGradient/BlurredGradient";
import { useEffect } from "react";
import { useRef } from "react";
import SearchBlock from "../../Components/SearchBlock/SearchBlock";
import BlockA from "../../Components/BlockA/BlockA";
import BlockB from "../../Components/BlockB/BlockB";
export const Homepage = () => {
  function sendPostRequest(url, data) {
    fetch(url, {
      method: "POST", // Specifies the method to be used
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS", // Specifies the content type
      },
      body: JSON.stringify(data), // Converts the JavaScript object to a JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json(); // Parses the JSON response
      })
      .then((data) => {
        console.log("Success:", data); // Logs the response data
      })
      .catch((error) => {
        console.error("Error:", error); // Logs any errors
      });
  }

  const blockRef1 = useRef(null);
  const blockRef2 = useRef(null);
  const blockRef3 = useRef(null);
  const blockRef4 = useRef(null);

  sendPostRequest("https://www.modernwebstack.com/api/testing/test", {
    key1: "value1",
    key2: "value2",
  });
  return (
    <>
      {" "}
      <div className="container homepage">
        <BlurredGradient />
        {/* <CodeBlock codeString={codeSample} /> */}
        <Landing />

        <div className="animated-block" ref={blockRef1}>
          {/* <Block1 data={landingPageAbout} /> */}
          <BlockA />
        </div>
        <div className="animated-block" ref={blockRef2}>
          <BlockB />
        </div>
        <Block3 />

        {/* <Block8 /> */}

        <div className="features">
          <h3>Libraries we work with</h3>
          <SubBlock0 data={componentLibraries} />
        </div>
        {/* <div className="features">
        <h3>Share Your Designs</h3>
        <SubBlock0 />
      </div> */}
      </div>
    </>
  );
};
