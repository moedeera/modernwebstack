import React, { useEffect, useRef } from "react";
import "./LandingBlockDemo.css";

const LandingBlockDemo = ({ infinite = true }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentIndex = 0;
    let direction = 1;
    const boxes = carousel.children;
    const totalBoxes = boxes.length;

    const moveCarousel = () => {
      currentIndex += direction;

      if (currentIndex === totalBoxes - 1 || currentIndex === 0) {
        direction *= -1; // Reverse the direction when reaching the end or start
      }

      const translateValue = -(currentIndex * 50 - 25); // Center the current box
      carousel.style.transform = `translateX(${translateValue}%)`;
      carousel.style.transition = "transform 1s ease-in-out";

      if (!infinite && currentIndex === 0 && direction === -1) {
        clearInterval(intervalId); // Stop the interval if infinite is false
      }
    };

    const intervalId = setInterval(moveCarousel, 3000); // 1 second static, 1 second moving

    return () => clearInterval(intervalId);
  }, [infinite]);

  return (
    <div className="landing-block-demo">
      <div className="demo-carousel-container" ref={carouselRef}>
        <div className="demo-box box-a"></div>
        <div className="demo-box box-b"></div>
        <div className="demo-box box-c"></div>
        <div className="demo-box box-d"></div>
      </div>
      <div className="demo-code-container"></div>
    </div>
  );
};

export default LandingBlockDemo;
