import { useEffect, useState } from "react";
import "./Block1.css";
import { Link } from "react-router-dom";
import basicImage from "../Landing/code1.jpg";
import { useRef } from "react";

import { SubBlock2 } from "../SubBlock2/SubBlock2";

export const Block1 = ({ data }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.35,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        } else {
          // Optional: Reset opacity when element is not visible
          // entry.target.style.opacity = 0;
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const [info, setInfo] = useState({
    small: "",
    header: "Faster and easier design with AI",
    text: ` Our AI engine gives you everything you need to create stunning
        designs, from vector graphics to interactive prototypes with our
        powerful features and intuitive interface.`,
    buttonText: "Learn More",
    link: "/",
    reverse: true,
  });

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, []);
  return (
    <div
      className={
        info.reverse ? "block-1-container reverse" : "block-1-container"
      }
    >
      <div className="block-1-text">
        <small>{info.small}</small>
        <h3>{info.header}</h3>
        <p>{info.text}</p>
        {/* <br /> */}
        <p>{info.text_sec}</p>
        <Link className="btn btn-primary" to={info.link}>
          {info.buttonText}
        </Link>
      </div>
      {/* <div
        className="block-1-image"
        ref={targetRef}
        style={{ opacity: 0, transition: "opacity 0.75s" }}
      > </div> */}
      {/* <img src={info.image ? info.image : basicImage} alt="" /> */}
      <div className="block-1-animation">
        <div className="block1-a-frame" id="frame-1"></div>
        <div className="block1-a-frame" id="frame-2"></div>
        <div className="block1-a-frame" id="frame-3">
          <SubBlock2 />
        </div>
      </div>
    </div>
  );
};
