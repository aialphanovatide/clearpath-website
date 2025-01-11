import React, { useState, useEffect } from "react";
import "./pageThree.css";
import Core from "../core";
import res_1 from "../../img/resource1_page_3.gif";

const TEXTS = [
  "Dynamic dashboards that absorb change and reshape direction.",
  "Automated pathways that free you from guesswork, placing you always a step ahead.",
  "Predictive modules that propose next steps before you ask.",
];

function PageThree() {
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
      <p className="tittle-page">Tools</p>

      <p className="paragraph-page">
        Our platform fuses human insight with Penelope AI’s evolving core—an
        interface that refines itself as conditions shift.
      </p>

      <Core image={res_1} tittle="" description="" extraStyle="-dif3" />
      <p className={`paragraph-page-faded2 ${fadeState}`}>
        {TEXTS[currentIndex]}
      </p>
    </div>
  );
}

export default PageThree;
