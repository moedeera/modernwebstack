import React from "react";
import "./Homepage.css";
import { Landing } from "../../Components/Landing/Landing";
import { Block1 } from "../../Components/Block1/Block1";
import { landingPageAbout, landingPageLearning } from "../../Context/Content";
import { Block3 } from "../../Components/Block3/Block3";
import { Block6 } from "../../Components/Block6/Block6";
import { Block8 } from "../../Components/Block8/Block8";
import { SubBlock0 } from "../../Components/SubBlock0/SubBlock0";
import { SubBlock2 } from "../../Components/SubBlock2/SubBlock2";
import { BlurredGradient } from "../../Components/BlurredGradient/BlurredGradient";
export const Homepage = () => {
  function sendPostRequest(url, data) {
    fetch(url, {
      method: "POST", // Specifies the method to be used
      headers: {
        "Content-Type": "application/json", // Specifies the content type
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

  // Example usage:
  // sendPostRequest('https://your-api-url.com', { key1: 'value1', key2: 'value2' });
  sendPostRequest("https://www.modernwebstack.com/api/testing/test", {
    key1: "value1",
    key2: "value2",
  });
  return (
    <div className="container homepage">
      <BlurredGradient />
      {/* <CodeBlock codeString={codeSample} /> */}
      <Landing />
      <Block1 data={landingPageAbout} />
      <Block1 data={landingPageLearning} />
      <Block3 />

      <Block8 />

      <div className="features">
        <h3>Our Features</h3>
        <SubBlock0 />
      </div>
    </div>
  );
};
