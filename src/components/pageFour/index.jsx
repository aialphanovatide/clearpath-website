import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./pageFour.css";
import Core from "../core";
import res_1 from "../../img/resource1_page_4.gif";

const TEXTS = [
  "Frictionless alignment with your current infrastructure.",
  "Continuous refinement of perspectives as internal and external variables shift.",
  "Immediate comprehension—no delays, no barriers, no static edges.",
];

function PageFour() {
  // This will be true if screen width is 768px or below
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    // Change text every 4 seconds:
    const interval = setInterval(() => {
      // 1) Start fading out
      setFadeState("fade-out");

      // 2) After fade-out finishes, swap to next text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
        setFadeState("fade-in");
      }, 500); // match the fade-out duration in CSS
    }, 4000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  if (isMobile) {
    // ---- MOBILE LAYOUT ----
    return (
      <div className="page_container">
        <p className="tittle-page">Flow</p>

        <p className="paragraph-page">
          Integration should feel like memory, not muscle. Clear Path Acuity
          blends into your ecosystem, translating complexity into lucid
          guidance.
        </p>

        <p className={`paragraph-page-faded2-rotated ${fadeState}`}>
          {TEXTS[currentIndex]}
        </p>

        <div className="core-mobile-rotated">
          <Core image={res_1} tittle="" description="" extraStyle="-dif4" />
        </div>
      </div>
    );
  } else {
    // ---- DESKTOP LAYOUT ----
    return (
      <div className="page_container">
        <p className="tittle-page">Flow</p>
        <p className="paragraph-page">
          Integration should feel like memory, not muscle. Clear Path Acuity
          blends into your ecosystem, translating complexity into lucid
          guidance.
        </p>
        <Core image={res_1} tittle="" description="" extraStyle="-dif4" />
        <p className={`paragraph-page-faded2-rotated ${fadeState}`}>
          {TEXTS[currentIndex]}
        </p>{" "}
      </div>
    );
  }
}

export default PageFour;
