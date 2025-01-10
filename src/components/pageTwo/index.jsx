import React, { useState, useEffect } from "react";
import "./pageTwo.css";
import GraphicFiveMobile from "../graphicFiveMobile";
import GraphicFiveDesktop from "../graphicFiveDesktop";
import Core from "../core";
import res_1 from "../../img/resource2_page_5.gif";

// All the text messages you want to cycle through
const TEXTS = [
  "Guide decisions with a fluid intelligence that evolves in real time.",
  "Achieve alignment that feels natural, as if the market bends to your strategy.",
  "Detect subtle signals that shape tomorrow’s landscape.",
];

function PageTwo({ isActive }) {
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

  return (
    <div className="page_container">
      <p className="tittle-page">Vision</p>

      <p className="paragraph-page">
        Instead of chasing the curve, shape it. We reveal patterns as they
        emerge, letting you harness shifts that others meet too late.
      </p>

      <Core image={res_1} tittle="" description="" extraStyle="-dif2" />

      {/*
        Apply our fade classes to the animated text. The text
        shown is determined by the currentIndex.
      */}
      <p className={`paragraph-page-faded ${fadeState}`}>
        {TEXTS[currentIndex]}
      </p>
    </div>
  );
}

export default PageTwo;
